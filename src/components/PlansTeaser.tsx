import { ArrowRight, Rocket, TrendingUp, Infinity } from "lucide-react";

type Plan = {
  name: string;
  icon: React.ElementType;
  accent: string;
  bg: string;
  tagline: string;
  inherits?: string;
  perks: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Inicial",
    icon: Rocket,
    accent: "text-blue-600",
    bg: "bg-blue-50",
    tagline: "Probá la plataforma sin costo",
    perks: [
      "Sin cuota mensual, sin tarjeta",
      "Recibís lavadas asignadas por la plataforma",
      "Panel completo con reservas por WhatsApp",
    ],
  },
  {
    name: "Estándar",
    icon: TrendingUp,
    accent: "text-violet-600",
    bg: "bg-violet-50",
    tagline: "El plan más elegido por Negocios activos",
    inherits: "Inicial",
    perks: [
      "Más lavadas y servicios extras al mes",
      "Comisión más baja por lavada",
      "Pagos más rápidos a tu cuenta",
    ],
    highlighted: true,
  },
  {
    name: "Ilimitado",
    icon: Infinity,
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    tagline: "Lavadas sin límite al mes",
    inherits: "Estándar",
    perks: [
      "Sin tope de lavadas mensuales",
      "La comisión más baja de la plataforma",
      "WhatsApp+IA con capacidad ampliada",
    ],
  },
];

export default function PlansTeaser() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5">
            Elegí tu plan y arrancá
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            ¿Querés empezar con nosotros? Adquirí un plan y probá cómo te va.
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Elegí el plan que se adapta a tu Negocio de Car Wash desde el día uno. Recibí clientes, hacé lavadas y cobrá — sin permanencia y sin cuotas ocultas.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
          <a
            href="/planes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
          >
            Ver planes completos con precios
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-slate-400">Sin permanencia · Cambiás cuando quieras · Cancelás cuando quieras</p>
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  name,
  icon: Icon,
  accent,
  bg,
  tagline,
  inherits,
  perks,
  highlighted = false,
}: Plan) {
  const dotClass = accent.replace("text-", "bg-");

  return (
    <div
      className={`relative rounded-2xl border-2 p-6 flex flex-col gap-4 ${
        highlighted ? "border-blue-500 bg-white shadow-lg shadow-blue-100/60" : "border-slate-200 bg-white"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
          Más elegido
        </span>
      )}

      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${bg}`}>
        <Icon className={`w-5 h-5 ${accent}`} />
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-950">{name}</h3>
        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{tagline}</p>
      </div>

      <div className="flex flex-col gap-3 flex-1 border-t border-slate-100 pt-4">
        {inherits && (
          <div className={`inline-flex items-center gap-2 self-start rounded-full px-3 py-1 ${bg}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
            <p className={`text-xs font-semibold ${accent}`}>
              Todo lo del plan {inherits}
            </p>
          </div>
        )}

        {inherits && (
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Además incluye
          </p>
        )}

        <ul className="space-y-2">
          {perks.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
              <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${dotClass}`} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
