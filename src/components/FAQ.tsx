import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Necesito local propio para registrarme?",
    answer:
      "No. Los lavados son a domicilio (en la casa u oficina del cliente). Solo necesitás equipo básico y transporte.",
  },
  {
    question: "¿Cómo me pagan?",
    answer:
      "La plataforma cobra al cliente y te transfiere el neto (total menos la comisión de tu plan) de cada lavada completada. La velocidad del pago depende de tu plan: cada 15 días en el plan Inicial, semanal en Estándar, diario en Ilimitado.",
  },
  {
    question: "¿Cuánto se lleva la plataforma?",
    answer:
      "La comisión depende de tu plan: 15% + $15 MXN por lavada en Inicial, 10% + $10 MXN en Estándar, y 5% + $5 MXN en Ilimitado. A mayor plan, menor comisión. El plan Inicial no tiene cuota mensual; Estándar e Ilimitado son suscripciones mensuales.",
  },
  {
    question: "¿Qué diferencia hay entre los planes Inicial, Estándar e Ilimitado?",
    answer:
      "La diferencia está en cuántas lavadas, servicios extras y conversaciones IA podés atender al mes, la velocidad de tus pagos, y la comisión por lavada (menor comisión a mayor plan). También existe un plan Por invitación con capacidad ampliada para conversaciones IA en fase beta. La IA atiende a tus clientes por WhatsApp — vos solo manejás tu panel. Podés empezar con el plan Inicial (sin costo) y subir cuando crezca tu operación. Ver detalle completo en /planes.",
  },
  {
    question: "¿Qué pasa si rechazo una cita?",
    answer:
      "El sistema busca automáticamente otro Negocio de Car Wash disponible en la zona. No hay penalización por rechazar, pero rechazar con frecuencia puede afectar tu prioridad de asignación.",
  },
  {
    question: "¿En qué colonias operan?",
    answer:
      "Actualmente en Villa California, Casa Fuerte y Adamar (Tlajomulco de Zúñiga). Estamos expandiendo por Jalisco.",
  },
  {
    question: "¿Puedo elegir mi horario?",
    answer:
      "Sí. Configurás qué días y horas operás desde tu panel. También podés bloquear fechas específicas cuando no querés recibir citas.",
  },
  {
    question: "¿Los clientes califican mi trabajo?",
    answer:
      "Sí. Al completarse cada lavada el cliente puede dejar una calificación de 1 a 5 estrellas y comentarios. Tu rating promedio es visible en tu panel.",
  },
];

export default function FAQ() {
  return (
    <section id="preguntas" className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-slate-900">{item.question}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-5 pb-4 border-t border-slate-100">
          <p className="text-sm text-slate-500 leading-relaxed pt-3">{item.answer}</p>
        </div>
      )}
    </div>
  );
}
