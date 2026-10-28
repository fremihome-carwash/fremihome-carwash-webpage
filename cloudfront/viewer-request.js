// CloudFront Function (viewer request) reusable entre sitios estaticos en S3.
//
// Para usarla en un sitio nuevo se toca UNICAMENTE el bloque CONFIG de abajo.
// El resto es generico. CloudFront Functions no soporta variables de entorno,
// asi que la config vive en el codigo; si molesta mantener N copias, la
// alternativa es CloudFront KeyValueStore (requiere runtime 2.0).

var CONFIG = {
  // Dominio canonico. Cualquier otro host (apex, el *.cloudfront.net) se
  // redirige aca. Dejar en '' para no redirigir: sirve mientras el sitio
  // todavia se accede por el dominio de CloudFront y no hay DNS propio.
  //
  // OJO: el valor tiene que estar en los Alternate Domain Names (CNAMEs) de
  // la distribucion. Si no, el redirect no llega a ningun lado.
  host: 'www.fremitech.com',

  // Carpeta del sitio dentro del bucket, tal como esta en el Origin path de
  // la distribucion. Dejar en '' si el sitio vive en la raiz del bucket.
  // Solo se usa para SACARLA de la URL si llega escrita: el Origin path la
  // vuelve a agregar y quedaria duplicada.
  folder: '/www.fremitech.com',

  // false -> sitio prerenderizado: /planes sirve /planes/index.html
  // true  -> SPA con router en el cliente: cualquier ruta sin extension
  //          sirve /index.html y el router resuelve del lado del browser.
  spa: false,
};

function handler(event) {
  var request = event.request;

  // --- 1. Normalizar la URI -------------------------------------------
  // Va ANTES del redirect a proposito: asi el 301 ya manda la URL limpia y
  // el browser no encadena dos saltos.
  var uri = request.uri.replace(/\/{2,}/g, '/');

  if (CONFIG.folder) {
    if (uri === CONFIG.folder) {
      uri = '/';
    } else if (uri.indexOf(CONFIG.folder + '/') === 0) {
      uri = uri.slice(CONFIG.folder.length);
    }
  }

  // --- 2. Dominio canonico --------------------------------------------
  var host = request.headers.host ? request.headers.host.value.toLowerCase() : '';

  if (CONFIG.host && host && host !== CONFIG.host) {
    var parts = [];
    for (var k in request.querystring) {
      var p = request.querystring[k];
      if (p.multiValue) {
        for (var i = 0; i < p.multiValue.length; i++) {
          parts.push(k + '=' + p.multiValue[i].value);
        }
      } else {
        parts.push(p.value ? k + '=' + p.value : k);
      }
    }
    var search = parts.length ? '?' + parts.join('&') : '';

    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: 'https://' + CONFIG.host + uri + search },
      },
    };
  }

  // --- 3. Resolucion de indice ----------------------------------------
  var last = uri.substring(uri.lastIndexOf('/') + 1);
  var isFile = last.indexOf('.') !== -1;

  if (uri === '/' || uri === '') {
    uri = '/index.html';
  } else if (!isFile) {
    // En una SPA no existe /planes/index.html: lo resuelve el router.
    uri = CONFIG.spa ? '/index.html' : uri.replace(/\/$/, '') + '/index.html';
  }

  request.uri = uri;
  return request;
}
