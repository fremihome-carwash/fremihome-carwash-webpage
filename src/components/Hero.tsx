import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, Search, TrendingUp, Wallet } from "lucide-react";
import { REGISTER_URL } from "../lib/links";

// Fotos de fondo: lavado real, no capturas del panel. Rotan detrás de un
// único mensaje — el pitch al Negocio de Car Wash.
// Sólo entran acá las fotos de 1920px: a pantalla completa las de menor
// resolución se ven blandas. Las demás viven en WorkGallery (tiles chicos).
const backdrops = [
  {
    src: "/wash-driveway.jpg",
    alt: "Lavado a domicilio con hidrolavadora en la entrada de una casa",
  },
  {
    src: "/wash-pressure.jpg",
    alt: "Hidrolavadora enjuagando el frente de un auto negro",
  },
];

// Frase corta en negativo (el dolor que dejás de tener) + una línea que
// explica quién se ocupa en su lugar.
// OJO con el copy de precios: NO existe "sin cuota mensual" como claim
// general. Inicial es $0, pero Estándar cuesta $499/mes e Ilimitado $1,499/mes.
const bondades = [
  {
    icon: Search,
    title: "Sin buscar clientes",
    text: "Te asignamos las lavadas de tu zona. No repartís volantes ni salís a ofrecer.",
  },
  {
    icon: MessageCircle,
    title: "Sin atender WhatsApp",
    text: "La IA conversa con el cliente y arma la cita. A vos te llega lista para aceptar.",
  },
  {
    icon: Wallet,
    title: "Sin perseguir pagos",
    text: "Le cobramos al cliente y te transferimos tu parte según tu plan.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % backdrops.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {backdrops.map((b, i) => (
        <div
          key={b.src}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden="true"
        >
          <img
            src={b.src}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: i === current ? "scale(1.06)" : "scale(1)",
              transition: "transform 7s ease-out",
            }}
          />
        </div>
      ))}

      {/* Gradientes: el texto vive sobre el lado oscuro, la foto respira a la derecha */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/35" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-9 pb-10 sm:pt-12 sm:pb-13">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-white text-balance drop-shadow-lg">
              Nosotros conseguimos los clientes. Vos solo lavás.
            </h1>

            <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-xl">
              Salís a trabajar y el trabajo ya está esperándote.{" "}
              <span className="text-white font-semibold">
                Aceptás, vas y cobrás.
              </span>
            </p>

            <ul className="mt-7 space-y-3.5 max-w-xl">
              {bondades.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 border border-white/15 backdrop-blur shrink-0">
                    <b.icon className="w-4 h-4 text-emerald-400" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-white leading-snug">
                      {b.title}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mt-0.5">
                      {b.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={REGISTER_URL}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm shadow-lg shadow-blue-950/40"
              >
                Registrar mi Car Wash gratis
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/como-funciona"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-medium rounded-xl border border-white/25 hover:bg-white/10 transition-colors text-sm backdrop-blur"
              >
                Ver cómo funciona
                <ArrowRight className="w-4 h-4 text-white/60" />
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xl">
              Arrancás con el <span className="text-slate-200 font-medium">plan
              Inicial: $0 para siempre</span>. Los planes pagos son para cuando
              querés más lavadas al mes y menos comisión por lavada.
            </p>

          </div>

          {/* Prueba de producto: las tarjetas del panel, no una captura estirada */}
          <div className="hidden lg:flex flex-col gap-4 justify-self-end w-full max-w-sm">
            <BookingCard />
            <EarningsCard />
          </div>
        </div>
      </div>

      {/* Indicadores de slide */}
      <div className="absolute bottom-5 right-4 sm:right-6 lg:right-8 flex items-center gap-1.5">
        {backdrops.map((b, i) => (
          <button
            key={b.src}
            aria-label={`Foto ${i + 1} de ${backdrops.length}`}
            onClick={() => setCurrent(i)}
            className="py-2"
          >
            <span
              className="block h-[3px] rounded-full bg-white transition-all duration-300"
              style={{
                width: i === current ? "26px" : "10px",
                opacity: i === current ? 1 : 0.4,
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function BookingCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-slate-950/50 p-4">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-900 leading-tight">
            Nueva reserva asignada
          </p>
          <p className="text-xs text-slate-500 mt-1">Villa California · SUV</p>
          <p className="text-xs text-slate-500">Lavado Completo · $280</p>
          <span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
            Por aceptar
          </span>
        </div>
      </div>
    </div>
  );
}

function EarningsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-slate-950/50 p-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
        </div>
        <div>
          <p className="text-xs text-slate-500">Ingresos de hoy</p>
          <p className="text-base font-bold text-slate-900 tabular-nums">
            $2,340 MXN
          </p>
        </div>
      </div>
    </div>
  );
}
