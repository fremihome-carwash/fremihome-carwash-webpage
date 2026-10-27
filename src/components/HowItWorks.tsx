import { ArrowRight, Bell, UserPlus, Wallet } from "lucide-react";

/**
 * Teaser de "Cómo funciona" para la home del Negocio.
 *
 * A propósito son 3 pasos y no los 5 de `/como-funciona`: acá se cuenta el
 * arco (te registrás → te llegan citas → cobrás) y el detalle vive en la
 * página. Mismo patrón que `PlansTeaser` con `/planes`.
 */
const pasos = [
  {
    icon: UserPlus,
    numero: "1",
    title: "Te registrás y configurás",
    text: "Qué servicios ofrecés, en qué horarios y hasta dónde llegás. Aprobamos tu cuenta rápido.",
  },
  {
    icon: Bell,
    numero: "2",
    title: "Te llegan las citas solas",
    text: "Clientes de tu zona con dirección, auto, servicio y hora. Aceptás o rechazás con un tap.",
  },
  {
    icon: Wallet,
    numero: "3",
    title: "Lavás y cobrás",
    text: "Marcás la cita completada. Cobramos al cliente y te transferimos tu parte según tu plan.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5">
            Cómo funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            Vos lavás y cobrás. Del resto nos encargamos nosotros.
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            No buscás clientes, no atendés WhatsApp y no perseguís pagos. Las
            citas llegan a tu panel listas para aceptar.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {pasos.map((p, i) => (
            <div key={p.numero} className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 h-full flex flex-col gap-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-blue-50">
                    <p.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-100 tabular-nums leading-none">
                    {p.numero}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-950 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.text}</p>
              </div>

              {i < pasos.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-slate-300"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/como-funciona"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
          >
            Ver cómo funciona en detalle
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
