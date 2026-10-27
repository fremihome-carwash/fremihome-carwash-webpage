// La webpage sirve a dos audiencias con dos apps distintas:
//   - Negocio de Car Wash  → cw_cmp (panel de empresa)
//   - Cliente final        → cw     (app del cliente, Expo Web)
// En dev caen a los puertos locales del stack; en build se definen con env vars.

const APP_URL = import.meta.env.VITE_APP_URL ?? "http://localhost:8082";
const CLIENT_APP_URL = import.meta.env.VITE_CLIENT_APP_URL ?? "http://localhost:8081";

// --- Negocio (cw_cmp) ---
// Ojo: la raíz de cw_cmp sólo resuelve con sesión iniciada; sin usuario el
// <Switch> cae en NotFound. Por eso apuntamos a /login explícito.
// Las dos pantallas se enlazan entre sí ("Crear cuenta" / "Iniciar sesión"),
// así que cualquiera de las dos sirve de puerta única.
export const LOGIN_URL = `${APP_URL}/login`;
export const REGISTER_URL = `${APP_URL}/register`;

// --- Cliente (cw). La app usa React Navigation sin rutas web,
// así que todo entra por la raíz y el propio stack decide login/registro. ---
export const CLIENT_LOGIN_URL = CLIENT_APP_URL;
export const CLIENT_REGISTER_URL = CLIENT_APP_URL;

// --- Rutas internas de la webpage ---
// Las dos landings van por audiencia: `/negocio` y `/clientes`.
// `/` sirve la del Negocio para que el dominio pelado funcione.
export const NEGOCIO_HOME = "/negocio";
export const CLIENTE_HOME = "/clientes";

// El catálogo que le explica al Negocio qué le ofrece a *sus* clientes
// (paquetes, tipos de lavado, adicionales). Antes vivía en `/clientes`, que
// ahora es la landing del Cliente final.
export const NEGOCIO_CATALOGO = "/catalogo";
// Los paquetes del cliente tienen página propia (contraparte de `/planes`,
// que le habla al Negocio sobre comisiones).
export const CLIENTE_PAQUETES = "/paquetes";
