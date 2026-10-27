import { useCallback, useEffect, useRef, useState } from "react";

export type Slide = {
  src: string;
  alt: string;
  /** Etiqueta chica que se muestra junto a los indicadores. */
  caption?: string;
};

/**
 * Carrusel de fondo: las fotos rotan detrás del contenido (`children`).
 *
 * Mismo patrón que el hero del Negocio (`Hero.tsx`), pero extraído para poder
 * reusarlo: crossfade largo + zoom lento, gradientes para que el texto se lea,
 * e indicadores abajo a la derecha.
 *
 * Se pausa solo con el mouse encima, con el foco de teclado adentro, y cuando
 * la pestaña pasa a segundo plano — si no, el usuario vuelve y se encuentra
 * la foto cambiada sin haber visto la transición.
 */
export default function PhotoCarousel({
  slides,
  interval = 6000,
  className = "",
  children,
}: {
  slides: Slide[];
  interval?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  const go = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total],
  );

  // El timer se rearma en cada cambio de índice: tocar un indicador reinicia
  // el reloj en vez de dejar medio ciclo corriendo.
  useEffect(() => {
    if (paused || total < 2) return;
    const t = setTimeout(() => go(index + 1), interval);
    return () => clearTimeout(t);
  }, [index, paused, interval, total, go]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Swipe en touch.
  const touchStartX = useRef<number | null>(null);

  return (
    <section
      className={`relative overflow-hidden bg-slate-950 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1));
        touchStartX.current = null;
      }}
      aria-roledescription="carrusel"
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden="true"
        >
          <img
            src={s.src}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: i === index ? "scale(1.06)" : "scale(1)",
              transition: "transform 7s ease-out",
            }}
          />
        </div>
      ))}

      {/* El texto vive sobre el lado oscuro; la foto respira a la derecha. */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/35" />

      <div className="relative">{children}</div>

      {total > 1 && (
        <div className="absolute bottom-5 right-4 sm:right-6 lg:right-8 flex items-center gap-3">
          {slides[index].caption && (
            <span className="hidden sm:block text-[11px] font-medium text-white/60">
              {slides[index].caption}
            </span>
          )}
          <div className="flex items-center gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.src}
                onClick={() => go(i)}
                aria-label={`Foto ${i + 1} de ${total}`}
                aria-current={i === index}
                className="py-2"
              >
                <span
                  className="block h-[3px] rounded-full bg-white transition-all duration-300"
                  style={{
                    width: i === index ? "26px" : "10px",
                    opacity: i === index ? 1 : 0.4,
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
