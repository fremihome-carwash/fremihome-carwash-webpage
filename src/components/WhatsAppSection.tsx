import { MessageCircle, Sparkles, LayoutDashboard, Check, ArrowDown } from "lucide-react";

const bullets = [
  { icon: MessageCircle, label: "El cliente habla en WhatsApp — natural, sin formularios" },
  { icon: Sparkles, label: "La IA extrae auto, servicio, zona y horario" },
  { icon: LayoutDashboard, label: "La cita aparece en tu app, lista para aceptar" },
  { icon: Check, label: "Vos usás la app; nunca tenés que atender WhatsApp" },
];

export default function WhatsAppSection() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <SplitMockup />

          <div className="lg:pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold mb-5">
              WhatsApp + IA
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
              Tus clientes reservan por WhatsApp. Vos las ves en tu app.
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Nuestra IA lee lo que el cliente escribe, crea la cita, y la deja lista para vos en el panel. No tenés que atender WhatsApp — solo aceptás desde la app.
            </p>

            <ul className="mt-8 space-y-4">
              {bullets.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed">{label}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-slate-400 border-t border-slate-100 pt-4">
              La IA solo habla con el cliente. Vos manejás tu operación desde el panel de la app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SplitMockup() {
  return (
    <div className="flex flex-col items-center gap-3 mx-auto w-full max-w-sm lg:max-w-none">
      <WhatsAppChat />
      <div className="flex flex-col items-center gap-1">
        <ArrowDown className="w-6 h-6 text-blue-600" />
        <span className="text-xs text-slate-400 font-medium">La IA traduce la conversación en una reserva</span>
      </div>
      <BookingCard />
    </div>
  );
}

function WhatsAppChat() {
  return (
    <div className="w-full shadow-lg shadow-slate-200/60 rounded-2xl overflow-hidden border border-slate-100">
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

function BookingCard() {
  return (
    <div className="w-full rounded-2xl border-2 border-blue-100 bg-white shadow-lg shadow-blue-50/80 p-4">
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
