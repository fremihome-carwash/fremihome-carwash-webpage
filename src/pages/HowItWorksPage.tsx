import { ArrowRight, ArrowDown, MessageCircle, Sparkles, Smartphone, LayoutDashboard, UserPlus, Settings2, Bell, CheckCircle2, Wallet, Check, MapPin, Clock, Car, Link2, CreditCard, RefreshCw } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { REGISTER_URL } from "../lib/links";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <FlowSelector />
        <FlowWhatsApp />
        <CrossoverBridge />
        <FlowDirectApp />
        <CompanySteps />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function CrossoverBridge() {
  return (
    <section className="py-8 sm:py-10 px-4 bg-white">
      <div className="max-w-4xl mx-auto rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-white p-8 sm:p-10">
        <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white shrink-0">
            <RefreshCw className="w-6 h-6" />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
              WhatsApp y app están conectados
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 text-balance">
              Aunque el cliente reserve por WhatsApp, puede entrar a la app cuando quiera.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Al confirmar la cita, la IA le manda un link. El cliente elige: <strong className="text-slate-900">pagar directo desde ese link</strong> o <strong className="text-slate-900">abrir la reserva en la app</strong> para reagendar, cambiar servicios, agregar extras o crear otra cita nueva. Es el mismo cliente, la misma reserva — la app y WhatsApp trabajan juntos.
            </p>

            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              <BridgePoint
                icon={<Link2 className="w-4 h-4 text-blue-600" />}
                title="Link al final del chat"
                desc="La IA envía un link con pago o con acceso a la reserva."
              />
              <BridgePoint
                icon={<CreditCard className="w-4 h-4 text-emerald-600" />}
                title="Pago con un tap"
                desc="El link abre el checkout: tarjeta o método guardado."
              />
              <BridgePoint
                icon={<Smartphone className="w-4 h-4 text-violet-600" />}
                title="Cambios desde la app"
                desc="Reagenda, cancela o agrega extras sin volver a WhatsApp."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BridgePoint({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-3.5">
      <div className="flex items-center gap-2 mb-1.5">
        {icon}
        <p className="text-xs font-semibold text-slate-900 leading-tight">{title}</p>
      </div>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-10 pb-8 sm:pt-14 sm:pb-11 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
          Cómo funciona Car Wash Fremi
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 text-balance leading-[1.05]">
          Dos formas de reservar. Un mismo flujo hacia tu Negocio de Car Wash.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          El cliente puede reservar por WhatsApp con nuestra IA, o directo desde su app. En ambos casos la cita llega a tu panel lista para aceptar.
        </p>
      </div>
    </section>
  );
}

function FlowSelector() {
  return (
    <section className="pb-8 px-4">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
        <a
          href="#flujo-whatsapp"
          className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 flex items-center gap-4 hover:border-emerald-300 hover:shadow-sm transition-all"
        >
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900">Flujo 1 — Por WhatsApp</p>
            <p className="text-xs text-slate-500 mt-0.5">Cliente escribe · IA arma la cita · llega a tu app</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
        </a>

        <a
          href="#flujo-app"
          className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 flex items-center gap-4 hover:border-blue-300 hover:shadow-sm transition-all"
        >
          <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
            <Smartphone className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900">Flujo 2 — Desde la app del cliente</p>
            <p className="text-xs text-slate-500 mt-0.5">Cliente agenda directo · llega a tu app</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
        </a>
      </div>
    </section>
  );
}

function FlowWhatsApp() {
  return (
    <section id="flujo-whatsapp" className="py-10 sm:py-14 px-4 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-7 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold mb-5">
            Flujo 1 · WhatsApp
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            El cliente escribe. La IA arma la cita. Vos la ves en la app.
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            La IA lee el mensaje del cliente, detecta auto, tipo de lavado, dirección y hora, y crea la reserva por él. Vos no atendés WhatsApp — solo aceptás desde el panel.
          </p>
        </div>

        <FlowSteps
          steps={[
            {
              icon: <MessageCircle className="w-6 h-6 text-emerald-600" />,
              bg: "bg-emerald-50",
              title: "1. Cliente escribe por WhatsApp",
              description: 'En lenguaje natural: "quiero lavar mi camioneta mañana en la tarde".',
            },
            {
              icon: <Sparkles className="w-6 h-6 text-blue-600" />,
              bg: "bg-blue-50",
              title: "2. La IA arma la cita",
              description: "Detecta zona, tamaño del vehículo, tipo de lavado y hora. Confirma los detalles que falten.",
            },
            {
              icon: <Smartphone className="w-6 h-6 text-violet-600" />,
              bg: "bg-violet-50",
              title: "3. Cita entra a la app del cliente",
              description: "El cliente la ve confirmada en su app con dirección, hora y precio. Puede reprogramar o cancelar.",
            },
            {
              icon: <LayoutDashboard className="w-6 h-6 text-amber-600" />,
              bg: "bg-amber-50",
              title: "4. Llega a la app de tu Negocio de Car Wash",
              description: "La reserva aparece en tu panel con todo. Aceptás o rechazás con un tap.",
            },
          ]}
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 text-center">
              1 · Conversación en WhatsApp
            </p>
            <WhatsAppChat />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 text-center">
              2 · Así llega la cita a tu app
            </p>
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowDirectApp() {
  return (
    <section id="flujo-app" className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-7 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5">
            Flujo 2 · App del cliente
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            El cliente entra a su app y agenda directo.
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Sin pasar por WhatsApp. Elige paquete, tamaño, tipo de lavado y hora en pocos taps. La reserva sale directo a tu panel.
          </p>
        </div>

        <FlowSteps
          steps={[
            {
              icon: <Smartphone className="w-6 h-6 text-blue-600" />,
              bg: "bg-blue-50",
              title: "1. Cliente abre su app",
              description: "Elige tipo de lavado, tamaño del auto y servicios extras. Ve el precio al instante.",
            },
            {
              icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
              bg: "bg-emerald-50",
              title: "2. Selecciona fecha, hora y dirección",
              description: "Puede usar su paquete activo o pagar por lavada. Confirma con un botón.",
            },
            {
              icon: <LayoutDashboard className="w-6 h-6 text-amber-600" />,
              bg: "bg-amber-50",
              title: "3. Llega a la app de tu Negocio de Car Wash",
              description: "La reserva aparece en tu panel con toda la información. Aceptás o rechazás.",
            },
            {
              icon: <Check className="w-6 h-6 text-violet-600" />,
              bg: "bg-violet-50",
              title: "4. Ambos ven la misma cita",
              description: "Cliente y Negocio de Car Wash comparten estado en tiempo real: aceptada, en camino, completada.",
            },
          ]}
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 text-center">
              1 · App del cliente
            </p>
            <ClientBookingMockup />
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 text-center">
              2 · Así llega la cita a tu app
            </p>
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingCard() {
  return (
    <div className="max-w-md mx-auto rounded-2xl border-2 border-blue-100 bg-white shadow-lg shadow-blue-50/80 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-slate-900">Nueva reserva asignada</span>
        </div>
        <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">
          Por aceptar
        </span>
      </div>

      <div className="space-y-1.5 text-xs text-slate-600 mb-4">
        <Row label="Cliente" value="Juan P." />
        <Row label="Auto" value="Camioneta (SUV)" />
        <Row label="Servicio" value="Lavado Completo" />
        <Row label="Zona" value="Villa California — Av. Rosas 245" />
        <Row label="Fecha/hora" value="Mañana 16:00" />
        <Row label="Total" value="$280 (neto según tu plan)" highlight />
      </div>

      <div className="flex gap-2">
        <button className="flex-1 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors">
          Aceptar
        </button>
        <button className="flex-1 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50 transition-colors">
          Rechazar
        </button>
      </div>
    </div>
  );
}

function Row({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-slate-400 shrink-0">{label}:</span>
      <span className={`font-medium text-right ${highlight ? "text-emerald-700" : "text-slate-700"}`}>
        {value}
      </span>
    </div>
  );
}

function ClientBookingMockup() {
  return (
    <div className="max-w-md mx-auto rounded-2xl bg-white shadow-lg shadow-slate-200/60 overflow-hidden border border-slate-100">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-500/60 flex items-center justify-center shrink-0">
          <Smartphone className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-tight">Mi reserva</p>
          <p className="text-blue-200 text-xs">Estado: Confirmada</p>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="rounded-xl bg-blue-50 border border-blue-100 px-3 py-2.5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Servicio</p>
          <p className="text-sm font-semibold text-slate-900 mt-0.5">Lavado Completo · SUV</p>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-slate-500">Dirección</p>
              <p className="text-slate-800 font-medium">Av. Rosas 245, Villa California</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-slate-500">Fecha y hora</p>
              <p className="text-slate-800 font-medium">Mañana · 16:00</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Car className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-slate-500">Auto</p>
              <p className="text-slate-800 font-medium">Camioneta SUV — Ford Escape</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <span className="text-xs text-slate-500">Total</span>
          <span className="text-sm font-bold text-emerald-700">$280 MXN</span>
        </div>

        <button className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors">
          Reagendar o cancelar
        </button>
      </div>
    </div>
  );
}

function FlowSteps({ steps }: { steps: { icon: React.ReactNode; bg: string; title: string; description: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((step, i) => (
        <div key={step.title} className="relative">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 h-full flex flex-col gap-3">
            <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${step.bg}`}>
              {step.icon}
            </div>
            <h3 className="text-sm font-bold text-slate-950 leading-tight">{step.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
          </div>
          {i < steps.length - 1 && (
            <>
              <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <ArrowDown className="lg:hidden mx-auto my-2 w-5 h-5 text-slate-300" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function WhatsAppChat() {
  return (
    <div className="max-w-md mx-auto shadow-lg shadow-slate-200/60 rounded-2xl overflow-hidden border border-slate-100">
      <div className="bg-emerald-600 px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-tight">Car Wash Fremi</p>
          <p className="text-emerald-200 text-xs">Asistente IA</p>
        </div>
      </div>
      <div className="bg-slate-50 px-3 py-4 space-y-2.5">
        <ClientMsg text="hola, quiero lavar mi camioneta mañana en la tarde" />
        <AIMsg text="Hola! Con gusto. ¿Qué tipo de lavado te sirve? Básico ($200), Completo ($280) o Premium ($350)?" />
        <ClientMsg text="el completo" />
        <AIMsg text="Perfecto. ¿Dirección? Tenemos disponible mañana a las 3, 4 o 5 pm." />
        <ClientMsg text="Av. Rosas 245, Villa California. 4 pm está bien." />
        <AIMsg text="Listo. Reserva confirmada. Recibirás un aviso cuando el equipo del Negocio de Car Wash esté en camino." />
        <AILinkMsg
          title="Tu reserva está lista"
          subtitle="Podés pagar ahora o ver los detalles en la app."
          primaryLabel="Pagar $280"
          secondaryLabel="Ver reserva en la app"
        />
      </div>
    </div>
  );
}

function AILinkMsg({
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
}: {
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
}) {
  return (
    <div className="flex justify-start">
      <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[88%] shadow-sm border border-slate-100 w-full">
        <div className="flex items-center gap-2 mb-1.5">
          <Link2 className="w-3.5 h-3.5 text-blue-600" />
          <p className="text-xs font-semibold text-slate-900">{title}</p>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">{subtitle}</p>
        <div className="mt-2.5 flex flex-col gap-1.5">
          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-blue-600 text-white text-[11px] font-semibold">
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-3 h-3" />
              {primaryLabel}
            </span>
            <ArrowRight className="w-3 h-3" />
          </div>
          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-[11px] font-medium">
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-3 h-3" />
              {secondaryLabel}
            </span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientMsg({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-emerald-100 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[82%] shadow-sm">
        <p className="text-xs text-slate-800 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function AIMsg({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[82%] shadow-sm border border-slate-100">
        <p className="text-xs text-slate-800 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

const companySteps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Registrás tu Negocio de Car Wash",
    description: "Datos del negocio, contacto y zona en la que operás. Nuestro equipo revisa y aprueba tu cuenta rápido.",
  },
  {
    number: "2",
    icon: Settings2,
    title: "Activás servicios, paquetes y horarios",
    description: "Elegís qué tipos de lavado ofrecés, qué paquetes trabajás y en qué días y horas estás disponible.",
  },
  {
    number: "3",
    icon: Bell,
    title: "Recibís citas automáticamente",
    description: "Cada cliente en tu zona te llega al panel con dirección, tipo de auto, servicio y hora.",
  },
  {
    number: "4",
    icon: CheckCircle2,
    title: "Aceptás o rechazás con un tap",
    description: "Si no podés, el sistema busca otro Negocio de Car Wash de la red sin trabarte.",
  },
  {
    number: "5",
    icon: Wallet,
    title: "Hacés la lavada y cobrás",
    description: "Marcás la cita como completada. Nosotros cobramos al cliente y te transferimos tu parte según tu plan.",
  },
];

function CompanySteps() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-5">
            Del lado del Negocio de Car Wash
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Tu operación en 5 pasos
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Desde registrarte hasta recibir tu primer pago. Sin llamadas, sin capacitación, sin app aparte.
          </p>
        </div>

        <ol className="relative space-y-4 max-w-3xl mx-auto">
          <div
            aria-hidden
            className="hidden sm:block absolute left-[35px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-200 via-blue-200 to-transparent"
          />
          {companySteps.map((s) => (
            <li key={s.number} className="relative flex gap-5 items-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="relative z-10 w-[70px] h-[70px] shrink-0 rounded-2xl bg-blue-600 text-white flex flex-col items-center justify-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-100">Paso</span>
                <span className="text-2xl font-extrabold leading-none">{s.number}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <s.icon className="w-4 h-4 text-blue-600 shrink-0" strokeWidth={2.2} />
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-9 sm:py-11 px-4">
      <div className="max-w-3xl mx-auto text-center rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-balance">
          ¿Listo para recibir tu primera cita?
        </h2>
        <p className="mt-3 text-blue-100 text-sm sm:text-base max-w-lg mx-auto">
          Empezás con el plan Inicial: $0 para siempre. Subís de plan sólo si querés más lavadas al mes y menos comisión.
        </p>
        <a
          href={REGISTER_URL}
          className="mt-6 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm"
        >
          Registrar mi Negocio de Car Wash
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
