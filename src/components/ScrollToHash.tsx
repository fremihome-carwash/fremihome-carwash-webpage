import { useEffect } from "react";
import { useLocation } from "wouter";

// Alto del header sticky (h-16), más un respiro para que el título de la
// sección no quede pegado al borde.
const HEADER_OFFSET = 80;

/**
 * Resuelve el scroll en cada navegación.
 *
 * Sin esto pasan dos cosas:
 *  1. Entrar a `/#preguntas` desde otra página deja el scroll arriba de todo:
 *     el browser busca el ancla antes de que React haya renderizado la sección,
 *     no la encuentra y se rinde.
 *  2. Navegar entre páginas con wouter conserva el scroll anterior, así que
 *     caés a mitad de la página nueva.
 *
 * Reintenta con requestAnimationFrame porque el destino puede aparecer un par
 * de frames después del primer render.
 */
export default function ScrollToHash() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash.slice(1);

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let raf = 0;
    let intentos = 0;

    const intentar = () => {
      const el = document.getElementById(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
      // ~1s a 60fps: suficiente para el primer render, sin quedar colgado si
      // el ancla no existe.
      if (++intentos < 60) raf = requestAnimationFrame(intentar);
    };

    raf = requestAnimationFrame(intentar);
    return () => cancelAnimationFrame(raf);
  }, [location]);

  // También en clicks a un ancla de la misma página, donde `location` no cambia.
  useEffect(() => {
    const onHashChange = () => {
      const el = document.getElementById(window.location.hash.slice(1));
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
