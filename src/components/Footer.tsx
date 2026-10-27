import {
  CLIENTE_HOME,
  CLIENTE_PAQUETES,
  NEGOCIO_CATALOGO,
} from "../lib/links";

// Sólo links que llevan a algo que existe. Nada de placeholders a `#` ni a
// páginas sin construir: si no hay destino real, no va en el footer.
const footerLinks = {
  Negocio: [
    { label: "Cómo funciona", href: "/como-funciona" },
    { label: "Planes y comisiones", href: "/planes" },
    { label: "Qué ofrecés a tus clientes", href: NEGOCIO_CATALOGO },
    { label: "Preguntas frecuentes", href: "/#preguntas" },
  ],
  Clientes: [
    { label: "Lavar mi auto", href: CLIENTE_HOME },
    { label: "Paquetes", href: CLIENTE_PAQUETES },
    { label: "Precios", href: `${CLIENTE_HOME}#precios` },
    { label: "Preguntas frecuentes", href: `${CLIENTE_HOME}#preguntas` },
  ],
  Empresa: [
    { label: "Contacto", href: "/contacto" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo-mark.png" alt="Car Wash Fremi" className="h-8 w-8 rounded-lg object-cover" />
              <span className="font-bold text-lg text-slate-950 leading-none">Car Wash Fremi</span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              La plataforma de lavado a domicilio en Jalisco.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p>Tlajomulco de Zúñiga, Jalisco</p>
              <a href="mailto:hola@carwashfremi.com" className="hover:text-slate-700 transition-colors">
                hola@carwashfremi.com
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-slate-100 flex justify-center">
          <p className="text-xs text-slate-400 text-center">
            &copy; 2026 Car Wash Fremi. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
