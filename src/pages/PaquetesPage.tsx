import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  Gift,
  Minus,
  Percent,
  Repeat,
  Tag,
  Wallet,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CLIENT_REGISTER_URL, CLIENTE_HOME } from "../lib/links";

/**
 * Página de PAQUETES del cliente — la que abre "Paquetes" en el toolbar.
 *
 * Es la contraparte de `/planes` (que le habla al Negocio sobre comisiones):
 * acá van las suscripciones mensuales que compra el cliente final.
 * La landing (`/clientes#paquetes`) muestra los 3 en resumen y manda acá
 * con el botón "Ver paquetes".
 */
export default function PaquetesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Ventajas />
        <Planes />
        <Comparativa />
        <ComoSeUsan />
        <Premios />
        <Preguntas />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------- Hero --- */

function Hero() {
  return (
    <section className="pt-10 pb-8 sm:pt-14 sm:pb-10 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
          <BadgeCheck className="w-3.5 h-3.5" />
          Paquetes mensuales
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 text-balance leading-[1.05]">
          Pagá una vez al mes. Olvidate de lavar el auto.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Cuatro lavadas al mes a precio rebajado, siempre con el mismo Negocio
          de Car Wash, más ofertas exclusivas y premios que vas acumulando.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={CLIENT_REGISTER_URL}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm shadow-lg shadow-blue-600/20"
          >
            Activar mi paquete
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#comparativa"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-slate-700 font-medium rounded-xl border border-slate-300 hover:bg-slate-50 transition-colors text-sm"
          >
            Comparar los tres
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Ventajas --- */

function Ventajas() {
  return (
    <section className="pb-4 px-4">
      <div className="max-w-5xl mx-auto rounded-3xl border-2 border-blue-200 bg-white shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-100">
          <VentajaTile
            icon={<Percent className="w-6 h-6 text-blue-600" />}
            iconBg="bg-blue-50"
            value="Rebajas"
            label="Hasta 24% menos que pagando lavada por lavada. El descuento ya viene aplicado en el precio del paquete."
          />
          <VentajaTile
            icon={<Tag className="w-6 h-6 text-violet-600" />}
            iconBg="bg-violet-50"
            value="Ofertas exclusivas"
            label="Servicios adicionales a precio rebajado y promos de temporada que sólo ven los clientes con paquete activo."
          />
          <VentajaTile
            icon={<Gift className="w-6 h-6 text-emerald-600" />}
            iconBg="bg-emerald-50"
            value="Premios"
            label="Acumulás lavadas y desbloqueás premios: lavadas gratis, upgrades de tipo de lavado y adicionales sin costo."
          />
        </div>
      </div>
    </section>
  );
}

function VentajaTile({
  icon,
  iconBg,
  value,
  label,
}: {
  icon: React.ReactNode;
  iconBg: string;
  value: string;
  label: string;
}) {
  return (
    <div className="px-6 py-6 sm:px-8 sm:py-8 flex flex-col items-start gap-3">
      <div
        className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${iconBg}`}
      >
        {icon}
      </div>
      <p className="text-lg font-bold text-slate-950 leading-tight">{value}</p>
      <p className="text-sm text-slate-500 leading-relaxed">{label}</p>
    </div>
  );
}

/* -------------------------------------------------------------- Planes --- */

const paquetes = [
  {
    name: "Básico",
    color: "#3B82F6",
    bar: "bg-blue-500",
    price: "≈ $800",
    suelto: "≈ $1,000 suelto",
    ahorro: "Ahorrás $200",
    tagline: "Un lavado por semana para que el auto nunca se vea sucio.",
    paraQuien: "Para el que sólo quiere el exterior siempre presentable.",
    incluye: [
      "4 lavadas exteriores al mes",
      "Tamaño SUV incluido sin cargo",
      "Van a tu domicilio",
      "Reagendás o cancelás sin costo",
    ],
    noIncluye: ["Interior", "Rines", "Encerado"],
    popular: false,
  },
  {
    name: "Completo",
    color: "#8B5CF6",
    bar: "bg-violet-500",
    price: "≈ $1,200",
    suelto: "≈ $1,520 suelto",
    ahorro: "Ahorrás $320",
    tagline: "Exterior siempre limpio, más interior aspirado dos veces al mes.",
    paraQuien: "El equilibrio que elige la mayoría: exterior semanal e interior quincenal.",
    incluye: [
      "4 lavadas completas exteriores",
      "Interior en 2 de las 4 visitas",
      "Tamaño SUV incluido sin cargo",
      "Se descuenta por lavada usada",
    ],
    noIncluye: ["Rines", "Encerado"],
    popular: true,
  },
  {
    name: "Premium",
    color: "#F59E0B",
    bar: "bg-amber-500",
    price: "≈ $1,700",
    suelto: "≈ $2,240 suelto",
    ahorro: "Ahorrás $540",
    tagline: "El más completo: interior, rines y encerado incluidos.",
    paraQuien: "Para el que cuida el auto en serio y no quiere pensar en extras.",
    incluye: [
      "4 lavadas completas al mes",
      "Interior las 4 veces",
      "Rines las 4 veces",
      "Encerado 2 veces al mes",
    ],
    noIncluye: ["Tapicería", "Motor"],
    popular: false,
  },
];

function Planes() {
  return (
    <section id="paquetes" className="py-9 sm:py-11 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {paquetes.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-2xl border overflow-hidden flex flex-col shadow-sm ${
                pkg.popular ? "border-blue-300 shadow-blue-100" : "border-slate-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex px-2.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                    El más pedido
                  </span>
                </div>
              )}
              <div className={`h-1.5 w-full ${pkg.bar}`} />
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-slate-950">{pkg.name}</h2>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  {pkg.tagline}
                </p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className="text-3xl font-extrabold"
                    style={{ color: pkg.color }}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-sm text-slate-400 font-medium">/ mes</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-slate-400 line-through decoration-slate-300">
                    {pkg.suelto}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                    <Percent className="w-3 h-3" />
                    {pkg.ahorro}
                  </span>
                </div>

                <p className="mt-4 text-xs text-slate-500 leading-relaxed bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5">
                  {pkg.paraQuien}
                </p>

                <ul className="mt-5 space-y-2 flex-1">
                  {pkg.incluye.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: pkg.color }}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                  {pkg.noIncluye.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-slate-400"
                    >
                      <Minus className="w-4 h-4 mt-0.5 shrink-0 text-slate-300" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={CLIENT_REGISTER_URL}
                  className={`mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Quiero el {pkg.name}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Precios estimados en MXN — el final depende del tamaño de tu auto y tu
          zona. Podés pausar o cancelar el paquete cuando quieras.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Comparativa --- */

const filas: { label: string; valores: (string | boolean)[] }[] = [
  { label: "Lavadas al mes", valores: ["4", "4", "4"] },
  { label: "Exterior completo", valores: [true, true, true] },
  { label: "Interior aspirado", valores: ["—", "2 de 4", "4 de 4"] },
  { label: "Rines", valores: [false, false, "4 de 4"] },
  { label: "Encerado", valores: [false, false, "2 de 4"] },
  { label: "Tamaño SUV sin cargo", valores: [true, true, true] },
  { label: "Servicio a domicilio", valores: [true, true, true] },
  { label: "Reagendar sin costo", valores: [true, true, true] },
  { label: "Ofertas exclusivas", valores: [true, true, true] },
  { label: "Suma para premios", valores: [true, true, true] },
];

function Comparativa() {
  return (
    <section
      id="comparativa"
      className="py-10 sm:py-14 px-4 bg-slate-50 border-y border-slate-100"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            Los tres, lado a lado
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            La diferencia está en cuánto del interior y del detallado entra
            incluido. El exterior está en los tres.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left font-semibold text-slate-500 px-5 py-4 text-xs uppercase tracking-wider">
                  Qué incluye
                </th>
                {paquetes.map((p) => (
                  <th
                    key={p.name}
                    className="px-4 py-4 text-center font-bold text-slate-900"
                  >
                    {p.name}
                    {p.popular && (
                      <span className="block text-[10px] font-bold text-blue-600 uppercase tracking-wider mt-0.5">
                        El más pedido
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filas.map((f, i) => (
                <tr
                  key={f.label}
                  className={i % 2 === 1 ? "bg-slate-50/60" : undefined}
                >
                  <td className="px-5 py-3 text-slate-600">{f.label}</td>
                  {f.valores.map((v, j) => (
                    <td key={j} className="px-4 py-3 text-center">
                      <Celda valor={v} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t-2 border-slate-200">
                <td className="px-5 py-4 font-semibold text-slate-900">
                  Precio estimado
                </td>
                {paquetes.map((p) => (
                  <td key={p.name} className="px-4 py-4 text-center">
                    <span
                      className="font-extrabold"
                      style={{ color: p.color }}
                    >
                      {p.price}
                    </span>
                    <span className="block text-[11px] text-slate-400">
                      / mes
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Celda({ valor }: { valor: string | boolean }) {
  if (valor === true)
    return (
      <>
        <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
        <span className="sr-only">Incluido</span>
      </>
    );
  if (valor === false)
    return (
      <>
        <Minus className="w-4 h-4 text-slate-300 mx-auto" />
        <span className="sr-only">No incluido</span>
      </>
    );
  return <span className="font-semibold text-slate-700">{valor}</span>;
}

/* --------------------------------------------------------- Cómo se usan --- */

const reglas = [
  {
    icon: CalendarClock,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Las usás cuando querés",
    text: "Las 4 lavadas no tienen día fijo. Agendás la que necesites, cuando la necesites, dentro del mes.",
  },
  {
    icon: Repeat,
    color: "text-violet-600",
    bg: "bg-violet-50",
    title: "Siempre el mismo Negocio",
    text: "Te atiende el mismo Negocio de Car Wash todo el mes — ya conoce tu auto y tu dirección. Si algún día no puede, la IA te consigue otro.",
  },
  {
    icon: Wallet,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Se descuenta por lavada usada",
    text: "Cada lavada que hacés descuenta una del paquete. Ves cuántas te quedan en la app.",
  },
  {
    icon: CheckCircle2,
    color: "text-amber-600",
    bg: "bg-amber-50",
    title: "Pausás o cancelás cuando quieras",
    text: "Sin permanencia. Si un mes no lo vas a usar, lo pausás desde la app y no se te cobra.",
  },
];

function ComoSeUsan() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            Cómo funcionan las 4 lavadas
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Sin letra chica: comprás el paquete y tenés 4 lavadas para usar en el
            mes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {reglas.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-3 shadow-sm"
            >
              <div
                className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${r.bg}`}
              >
                <r.icon className={`w-5 h-5 ${r.color}`} />
              </div>
              <h3 className="text-base font-bold text-slate-950">{r.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Premios --- */

function Premios() {
  const hechas = 7;
  const meta = 10;

  return (
    <section className="pb-20 sm:pb-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900 px-6 py-7 sm:px-9 sm:py-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-7 lg:gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-emerald-300 text-xs font-semibold mb-4">
              <Gift className="w-3.5 h-3.5" />
              Premios por lavada
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight text-balance">
              Cada lavada te acerca a una gratis
            </h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-lg">
              Con paquete activo sumás una lavada al contador cada vez que te
              lavan. Al llegar a {meta} desbloqueás el premio: lavada gratis,
              upgrade de tipo de lavado o un servicio adicional sin costo —
              elegís vos.
            </p>
          </div>

          <div className="w-full lg:w-72 rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="flex items-end justify-between mb-2">
              <span className="text-xs text-slate-400">Tu progreso</span>
              <span className="text-sm font-bold text-white tabular-nums">
                {hechas}/{meta}
              </span>
            </div>
            <div
              className="h-2.5 rounded-full bg-white/10 overflow-hidden"
              role="progressbar"
              aria-valuenow={hechas}
              aria-valuemin={0}
              aria-valuemax={meta}
              aria-label={`${hechas} de ${meta} lavadas para tu premio`}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                style={{ width: `${(hechas / meta) * 100}%` }}
              />
            </div>
            <p className="mt-3 text-xs text-emerald-300 font-semibold">
              Te faltan {meta - hechas} para tu próxima lavada gratis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Preguntas --- */

const preguntas = [
  {
    q: "¿Qué pasa si no uso las 4 lavadas del mes?",
    a: "La app te avisa antes de que se venzan para que alcances a usarlas. Las lavadas son del mes en curso y no se acumulan para el siguiente.",
  },
  {
    q: "¿Puedo cambiar de paquete?",
    a: "Sí, cuando quieras desde la app. El cambio aplica desde el próximo ciclo mensual.",
  },
  {
    q: "¿El precio cambia según mi auto?",
    a: "Los precios de esta página son estimados con tamaño SUV incluido. El final depende del tamaño de tu auto y tu zona — lo ves exacto en la app antes de activar.",
  },
  {
    q: "¿Puedo agregar servicios adicionales sobre una lavada del paquete?",
    a: "Sí. Los adicionales que no vengan incluidos los agregás a cualquier lavada y se cobran aparte — con precio rebajado por tener paquete activo.",
  },
  {
    q: "¿Cómo funcionan los premios?",
    a: "Con paquete activo sumás una lavada al contador cada vez que te lavan. Al llegar a 10 desbloqueás el premio y elegís vos: una lavada gratis, un upgrade de tipo de lavado o un servicio adicional sin costo.",
  },
  {
    q: "¿Hay permanencia?",
    a: "No. Pausás o cancelás cuando quieras desde la app o por el chat, sin costo ni penalización.",
  },
];

function Preguntas() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-slate-50 border-y border-slate-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-7">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-2">
          {preguntas.map((f) => (
            <details
              key={f.q}
              className="group border border-slate-200 rounded-xl overflow-hidden bg-white"
            >
              <summary className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer list-none hover:bg-slate-50 transition-colors">
                <span className="text-sm font-medium text-slate-900">{f.q}</span>
                <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-4 border-t border-slate-100">
                <p className="text-sm text-slate-500 leading-relaxed pt-3">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Final CTA --- */

function FinalCTA() {
  return (
    <section className="py-9 sm:py-11 px-4">
      <div className="max-w-3xl mx-auto text-center rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-balance">
          Activá tu paquete y dejá de pensar en el tema
        </h2>
        <p className="mt-3 text-blue-100 text-sm sm:text-base max-w-lg mx-auto">
          Sin permanencia. Lo pausás o lo cancelás cuando quieras.
        </p>
        <a
          href={CLIENT_REGISTER_URL}
          className="mt-6 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm"
        >
          Activar mi paquete
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="mt-5 text-xs text-blue-200">
          ¿Preferís pagar por lavada suelta?{" "}
          <a
            href={`${CLIENTE_HOME}#precios`}
            className="underline hover:text-white transition-colors"
          >
            Mirá los precios
          </a>
          .
        </p>
      </div>
    </section>
  );
}
