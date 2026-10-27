import { useState } from "react";
import { Check, Car, MessageCircle, Sparkles, Calendar, Info, Zap, Percent, X, RotateCcw, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { REGISTER_URL } from "../lib/links";

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <WhatIsAService />
        <DetailedPlans />
        <PlansFAQ />
      </main>
      <Footer />
    </div>
  );
}

function WhatIsAService() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
            Planes para Negocios de Car Wash
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            Antes de elegir plan: entendé las tres dimensiones
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Los planes de Car Wash Fremi definen cuánta capacidad tenés para atender clientes cada mes. Se miden en <strong className="text-slate-900">tres dimensiones</strong>: cuántas <strong className="text-slate-900">lavadas</strong> hacés, cuántos <strong className="text-slate-900">servicios extras</strong> vendés arriba del kit básico y cuántas <strong className="text-slate-900">conversaciones con la IA por WhatsApp</strong> generás. Entender estos tres conceptos antes de elegir tu plan te ayuda a saber qué nivel te alcanza — sin pagar de más ni quedarte corto.
          </p>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            Cada plan también controla la <strong className="text-slate-700">velocidad de tus pagos</strong> (cada 15 días, semanal, diario o inmediato) y la <strong className="text-slate-700">comisión por lavada</strong> que te cobra la plataforma. Cuanto más grande el plan, más baja la comisión.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <DefinitionCard
            icon={<Car className="w-6 h-6 text-blue-600" />}
            iconBg="bg-blue-50"
            title="Lavada"
            definition="Una lavada es una cita completa para un cliente. Cuenta desde que aceptás la reserva hasta que la marcás como completada."
            note="Cada lavada puede incluir uno o varios servicios (ej: lavado exterior + interior + rines)."
          />
          <DefinitionCard
            icon={<Sparkles className="w-6 h-6 text-violet-600" />}
            iconBg="bg-violet-50"
            title="Servicio extra"
            definition="Un servicio es cada tarea EXTRA que se agrega a una lavada, más allá del kit básico. Son extras como: interior completo, detallado de rines, lavado de motor, encerado premium, limpieza de tapicería."
            note="El kit básico (lavado exterior + aspirado) NO consume servicios de tu plan. Solo cuentan los extras que suma el cliente."
          />
          <DefinitionCard
            icon={<MessageCircle className="w-6 h-6 text-emerald-600" />}
            iconBg="bg-emerald-50"
            title="Conversación IA"
            definition="Una conversación es cada hilo de chat entre un cliente y la IA por WhatsApp. Un mismo cliente dentro de una ventana de 3 horas cuenta como una sola conversación."
            note="Después de 3 horas sin actividad, si ese mismo cliente vuelve a escribir, se abre una conversación nueva."
          />
        </div>
      </div>
    </section>
  );
}

interface DefinitionCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  definition: string;
  note: string;
}

function DefinitionCard({ icon, iconBg, title, definition, note }: DefinitionCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${iconBg} mb-4`}>
        {icon}
      </div>
      <h3 className="text-base font-bold text-slate-950 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{definition}</p>
      <div className="flex items-start gap-2 bg-slate-50 rounded-xl px-4 py-3">
        <Info className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
        <p className="text-xs text-slate-500 leading-relaxed">{note}</p>
      </div>
    </div>
  );
}


const detailedPlans = [
  {
    name: "Inicial",
    tagline: "para arrancar y probar",
    price: "$0",
    priceNote: "para siempre",
    recommended: false,
    features: [
      "5 lavadas / mes",
      "20 servicios extras / mes",
      "Sin WhatsApp+IA — los clientes reservan por el app del cliente",
      "Panel completo de gestión de reservas",
      "Calificaciones y reseñas de clientes",
      "Configuración de horarios y días de trabajo",
      "Activación y desactivación de servicios",
      "Comisión: 15% del costo + $15 MXN por lavada",
    ],
    payout: "Cada 15 días a tu cuenta",
    payoutBoost: "Podés acelerar a pagos diarios con una comisión extra",
    renewal: "Sin renovación automática. Cuando termina el mes, reactivás manualmente si querés seguir.",
    buttonLabel: "Empezar gratis",
    buttonVariant: "outline" as const,
  },
  {
    name: "Estándar",
    tagline: "facturado mensual",
    price: "$499",
    priceNote: "MXN / mes",
    recommended: true,
    features: [
      "20 lavadas / mes",
      "80 servicios extras / mes",
      "100 conversaciones WhatsApp+IA / mes",
      "Panel completo de gestión e ingresos",
      "Calificaciones y reseñas de clientes",
      "Configuración de horarios y días de trabajo",
      "Activación de paquetes de cliente",
      "Comisión: 10% del costo + $10 MXN por lavada",
    ],
    payout: "Pagos semanales a tu cuenta",
    payoutBoost: "Podés acelerar a pagos diarios con una comisión extra",
    renewal: "Renovación automática mensual. Cancelás cuando quieras y aplica al fin del ciclo.",
    buttonLabel: "Empezar con Estándar",
    buttonVariant: "primary" as const,
  },
  {
    name: "Ilimitado",
    tagline: "facturado mensual",
    price: "$1,499",
    priceNote: "MXN / mes",
    recommended: false,
    features: [
      "Lavadas ilimitadas",
      "Servicios extras ilimitados",
      "Conversaciones WhatsApp+IA ilimitadas",
      "Panel completo de gestión e ingresos",
      "Calificaciones y reseñas de clientes",
      "Configuración de horarios y días de trabajo",
      "Activación de paquetes de cliente",
      "Comisión: 5% del costo + $5 MXN por lavada",
    ],
    payout: "Pagos diarios a tu cuenta",
    payoutBoost: "Retiros inmediatos (cada hora) con una comisión extra",
    renewal: "Renovación automática con opción de pedir confirmación unos días antes. Vos elegís cómo renovar.",
    buttonLabel: "Empezar con Ilimitado",
    buttonVariant: "outline" as const,
  },
];

const comparisonRows = [
  { label: "Lavadas / mes", values: ["5", "5", "20", "Ilimitadas"], inviteIdx: 1 },
  { label: "Servicios extras / mes", values: ["20", "20", "80", "Ilimitados"], inviteIdx: 1 },
  { label: "Conversaciones WhatsApp+IA / mes", values: ["No incluido", "25", "100", "Ilimitadas"], inviteIdx: 1 },
  { label: "Frecuencia de pago", values: ["Cada 15 días", "Semanal", "Semanal", "Diario"], inviteIdx: 1 },
  { label: "Retiro acelerado (comisión extra)", values: ["Diario", "Diario + inmediato", "Diario", "Inmediato (cada hora)"], inviteIdx: 1 },
  { label: "Comisión por lavada completada", values: ["15% + $15 MXN", "15% + $15 MXN", "10% + $10 MXN", "5% + $5 MXN"], inviteIdx: 1 },
  { label: "Renovación", values: ["Manual", "Máx. 2 ciclos / 2 meses", "Automática", "Automática (con confirmación opcional)"], inviteIdx: 1 },
  { label: "Panel de gestión", values: ["Sí", "Sí", "Sí", "Sí"], inviteIdx: 1 },
  { label: "Precio", values: ["$0", "Sin costo (por invitación)", "$499 MXN/mes", "$1,499 MXN/mes"], inviteIdx: 1 },
];

function DetailedPlans() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Planes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Para poder operar en Car Wash Fremi y recibir clientes asignados por la plataforma, tu Negocio de Car Wash tiene que estar suscrito a uno de estos planes. El plan <strong className="text-slate-900">Inicial</strong> es sin costo y te sirve para arrancar; los pagados desbloquean más lavadas, WhatsApp+IA y pagos más rápidos.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Sin permanencia. Cambiás en cualquier momento — el cambio aplica al fin del ciclo actual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start mb-10">
          {detailedPlans.map((plan) => (
            <DetailedPlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <InvitationDetailCard />

        <div className="mt-14">
          <ComparisonTable />
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            Precios preliminares — pueden ajustarse durante la fase beta.
          </p>
        </div>
      </div>
    </section>
  );
}

function DetailedPlanCard({ plan }: { plan: typeof detailedPlans[0] }) {
  const isRecommended = plan.recommended;
  return (
    <div
      className={`relative rounded-2xl border bg-white p-6 flex flex-col ${
        isRecommended ? "border-2 border-blue-600 shadow-lg" : "border border-slate-200"
      }`}
    >
      {isRecommended && (
        <>
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
            Recomendado
          </span>
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-blue-600" />
        </>
      )}

      <div className="mb-5">
        <h3 className="text-lg font-bold text-slate-950">{plan.name}</h3>
        <p className="text-xs text-slate-400 mt-0.5">{plan.tagline}</p>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-slate-950 leading-none">{plan.price}</span>
          {plan.priceNote && <span className="text-sm text-slate-400 ml-1">{plan.priceNote}</span>}
        </div>
      </div>

      <div className="mb-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Incluye:</p>
        <ul className="space-y-2">
          {plan.features.map((f) => {
            const isNegative = f.startsWith("Sin ");
            return (
              <li key={f} className="flex items-start gap-2 text-sm">
                {isNegative ? (
                  <X className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" />
                ) : (
                  <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                )}
                <span className={isNegative ? "text-slate-400" : "text-slate-700"}>{f}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mb-5 pt-4 border-t border-slate-100">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Pagos:</p>
        <div className="flex items-center gap-2 text-sm font-medium text-blue-700">
          <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{plan.payout}</span>
        </div>
        {plan.payoutBoost && (
          <div className="mt-2 flex items-start gap-2 text-xs text-slate-500 leading-snug">
            <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
            <span>{plan.payoutBoost}</span>
          </div>
        )}
        <div className="mt-2 flex items-start gap-2 text-xs leading-snug">
          {plan.name === "Ilimitado" ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">Retiros inmediatos (cada hora) con comisión extra</span>
            </>
          ) : (
            <>
              <X className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
              <span className="text-slate-400 line-through">Retiros inmediatos (cada hora)</span>
            </>
          )}
        </div>
        {plan.renewal && (
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500 leading-snug">
            <RotateCcw className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
            <span>{plan.renewal}</span>
          </div>
        )}
      </div>

      <a
        href={REGISTER_URL}
        className={`mt-auto inline-flex justify-center items-center px-5 py-3 rounded-xl text-sm font-semibold transition-colors ${
          plan.buttonVariant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
        }`}
      >
        {plan.buttonLabel}
      </a>
    </div>
  );
}

function InvitationDetailCard() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 p-6 sm:p-8">
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold">
              Solo por invitación
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold">
              Gratis — sin costo
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-950">
            Plan Por invitación <span className="text-green-700 font-extrabold">· $0</span>
          </h3>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Plan beta para Negocios de Car Wash invitados a probar el WhatsApp+IA — feature que el plan Inicial no incluye. Te damos 25 conversaciones IA / mes, retiros diarios e inmediatos, y las mismas 5 lavadas del plan Inicial para que testees el flujo completo del cliente. <strong className="text-slate-700">Sin costo mientras dure la invitación.</strong>
          </p>
        </div>

        <div className="shrink-0 flex flex-col gap-2 w-full lg:w-auto lg:min-w-[220px]">
          <a
            href="https://wa.me/523312345678?text=Hola,%20quiero%20solicitar%20el%20plan%20Por%20invitaci%C3%B3n%20de%20Car%20Wash%20Fremi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp: +52 33 1234 5678
          </a>
          <a
            href="mailto:hola@carwashfremi.com?subject=Solicitud plan por invitación"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:border-slate-400 hover:bg-white transition-colors"
          >
            Escribinos por correo
          </a>
          <p className="text-xs text-slate-400 text-center leading-relaxed">
            hola@carwashfremi.com<br />
            o WhatsApp al +52 33 1234 5678
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-2 text-sm text-amber-800 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 leading-relaxed">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <span>
          <strong>Vigencia limitada:</strong> el plan Por invitación se puede usar como máximo <strong>2 veces o durante 2 meses</strong>, lo que pase primero. Después tenés que pasarte a uno de los 3 planes disponibles (Inicial, Estándar o Ilimitado) para seguir operando.
        </span>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <FeatureLine icon={<Car className="w-4 h-4 text-blue-600" />} text="5 lavadas / mes" />
        <FeatureLine icon={<Sparkles className="w-4 h-4 text-violet-600" />} text="20 servicios extras / mes" />
        <FeatureLine icon={<MessageCircle className="w-4 h-4 text-emerald-600" />} text="25 conversaciones IA / mes" />
        <FeatureLine icon={<Calendar className="w-4 h-4 text-blue-600" />} text="Pagos semanales a tu cuenta" />
        <FeatureLine icon={<Zap className="w-4 h-4 text-amber-500" />} text="Retiro diario con comisión extra" />
        <FeatureLine icon={<Zap className="w-4 h-4 text-amber-500" />} text="Retiros inmediatos (cada hora) con comisión extra" />
        <FeatureLine icon={<Check className="w-4 h-4 text-green-600" />} text="Panel completo de gestión" />
        <FeatureLine icon={<Percent className="w-4 h-4 text-slate-500" />} text="Comisión: 15% + $15 MXN por lavada" />
      </div>
    </div>
  );
}

function FeatureLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-700">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[700px] text-sm border-collapse">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left px-5 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[32%]">
              Característica
            </th>
            <th className="px-4 py-4 text-center text-sm font-bold text-slate-700">Inicial</th>
            <th className="px-4 py-4 text-center text-sm font-bold text-amber-700 bg-amber-50/60">Por invitación</th>
            <th className="px-4 py-4 text-center text-sm font-bold text-blue-700 bg-blue-50/60">Estándar</th>
            <th className="px-4 py-4 text-center text-sm font-bold text-slate-700">Ilimitado</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, i) => (
            <tr
              key={row.label}
              className={`border-b border-slate-100 last:border-0 ${i % 2 === 0 ? "" : "bg-slate-50/50"}`}
            >
              <td className="px-5 py-3.5 text-sm text-slate-600 font-medium">{row.label}</td>
              <td className="px-4 py-3.5 text-center text-sm text-slate-700">{row.values[0]}</td>
              <td className="px-4 py-3.5 text-center text-sm font-semibold text-amber-700 bg-amber-50/40">
                {row.values[1]}
              </td>
              <td className="px-4 py-3.5 text-center text-sm font-semibold text-blue-700 bg-blue-50/40">
                {row.values[2]}
              </td>
              <td className="px-4 py-3.5 text-center text-sm text-slate-700">{row.values[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const plansFaqs = [
  {
    q: "¿Cuál es la diferencia entre una lavada y un servicio?",
    a: "Una lavada es la cita completa del cliente e incluye el kit básico (lavado exterior + aspirado) sin costo contra tu plan. Un servicio es cada tarea EXTRA que el cliente agrega a esa lavada: interior completo, rines, encerado, motor, tapicería. Solo los extras cuentan contra el límite de servicios de tu plan — el kit básico nunca consume créditos.",
  },
  {
    q: "¿Cómo se accede al plan Por invitación?",
    a: "Escribinos a hola@carwashfremi.com o por WhatsApp al +52 33 1234 5678. Damos acceso a Negocios de Car Wash que están probando el WhatsApp+IA y necesitan más conversaciones antes de subir a Estándar. El plan no tiene costo mientras dure la invitación, pero tiene un límite de uso: máximo 2 ciclos o 2 meses, lo que pase primero. Después tenés que pasarte a un plan pagado si querés seguir.",
  },
  {
    q: "¿Cómo funciona la renovación de cada plan?",
    a: "Depende del plan: (1) Inicial no se renueva automáticamente — cuando se acaba el mes tenés que reactivarlo manualmente si querés seguir. (2) Por invitación tiene vigencia limitada a 2 ciclos o 2 meses y no renueva más allá de eso. (3) Estándar se renueva automáticamente cada mes; podés cancelar cuando quieras y la baja aplica al fin del ciclo. (4) Ilimitado se renueva automáticamente por defecto, pero podés activar la opción de pedir confirmación unos días antes de cada renovación.",
  },
  {
    q: "¿Puedo cobrar más rápido? ¿Cómo funciona el retiro acelerado?",
    a: "Sí. Todos los planes tienen una opción de retiro acelerado con una comisión extra por transferencia. En Inicial y Estándar podés pasar de la frecuencia estándar (15 días / semanal) a pagos diarios. En Ilimitado podés pasar de diario a retiros inmediatos, cada hora. Configurás la aceleración desde tu panel y aplica a los próximos cobros — no cambia la comisión de tu plan (15% + $15 en Inicial, 10% + $10 en Estándar, 5% + $5 en Ilimitado).",
  },
  {
    q: "¿Cuánto dura un plan?",
    a: "Un plan dura hasta que pase lo primero de dos cosas: (a) se termine el mes, o (b) se te acaben las lavadas incluidas. Lo que ocurra primero cierra el plan. Si se agotan las lavadas antes del mes, el plan ya se consumió aunque queden días en el calendario. Si termina el mes y todavía te quedaban lavadas, se pierden — no se acumulan al siguiente.",
  },
  {
    q: "¿Qué pasa si supero mi límite de lavadas o servicios?",
    a: "Si se te acaban las lavadas o los servicios, tu plan se cierra aunque queden días del mes. Para seguir aceptando reservas asignadas tenés que pagar un nuevo plan (podés elegir el mismo o subir a uno más grande). El nuevo plan se activa al momento del pago y arranca su propio ciclo.",
  },
  {
    q: "¿Qué pasa si supero mi límite de conversaciones IA?",
    a: "Los clientes nuevos siguen pudiendo reservar, pero la IA no responderá automáticamente hasta que pagues un nuevo plan o termine el ciclo actual. Podés pagar un plan nuevo al instante para desbloquear más conversaciones.",
  },
  {
    q: "¿Puedo cambiar de plan a mitad de mes?",
    a: "No. Los cambios de plan aplican al finalizar el ciclo que estás usando. Si decidís no renovar o pasarte a otro plan, el cambio arranca cuando termina el mes actual — no se prorratea ni se corta a la mitad.",
  },
  {
    q: "¿Puedo tener varios planes activos al mismo tiempo?",
    a: "Sí. Podés acumular más de un plan al mismo tiempo (por ejemplo un Estándar y un Ilimitado en simultáneo). El sistema descuenta tus lavadas y servicios del plan que activaste primero; cuando se agotan sus créditos, empieza a consumir del siguiente plan activo. Es útil para reforzar meses de mucho trabajo sin comprometerte a subir de nivel permanentemente.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí, sin permanencia ni penalizaciones. Cancelás desde tu panel y tu cuenta pasa al plan Inicial al vencimiento del ciclo actual.",
  },
];

function PlansFAQ() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-slate-50 border-t border-slate-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-center mb-3">
          Preguntas frecuentes sobre los planes
        </h2>
        <p className="text-center text-sm text-slate-500 mb-10">
          Tocá cada pregunta para ver la respuesta.
        </p>
        <div className="space-y-3">
          {plansFaqs.map((item) => (
            <PlansAccordionItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlansAccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-slate-900">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-5 pb-4 border-t border-slate-100">
          <p className="text-sm text-slate-500 leading-relaxed pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}
