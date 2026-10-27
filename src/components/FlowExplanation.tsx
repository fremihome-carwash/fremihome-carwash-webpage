import { MessageCircle, Sparkles, LayoutDashboard, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle className="w-7 h-7 text-emerald-600" />,
    iconBg: "bg-emerald-50",
    title: "El cliente escribe en WhatsApp",
    description:
      'En lenguaje natural: "quiero lavar mi camioneta mañana en la tarde". La IA entiende auto, tipo de lavado y horario.',
  },
  {
    icon: <Sparkles className="w-7 h-7 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "La IA arma la cita",
    description:
      "Detecta zona, tamaño del vehículo, tipo de lavado y hora. Confirma con el cliente los detalles que falten.",
  },
  {
    icon: <LayoutDashboard className="w-7 h-7 text-violet-600" />,
    iconBg: "bg-violet-50",
    title: "Aparece en tu app",
    description:
      "Ves la lavada lista en el panel de reservas de tu app, con toda la info. Aceptás o rechazás con un tap.",
  },
];

export default function FlowExplanation() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            Cómo pasa un cliente de WhatsApp a tu app
          </h2>
          <p className="mt-3 text-slate-500 leading-relaxed">
            Vos no atendés WhatsApp. Es la IA la que traduce y arma la cita.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col md:flex-row items-center gap-4 flex-1">
              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 text-center flex flex-col items-center gap-3">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${step.iconBg}`}>
                  {step.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-950">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-5 h-5 text-slate-300 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
