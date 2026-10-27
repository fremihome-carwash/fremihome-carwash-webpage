type Audience = "cliente" | "negocio";

interface Testimonial {
  audience: Audience;
  quote: string;
  name: string;
  role: string;
  business: string;
  city: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    audience: "cliente",
    quote: "Le escribí a la IA a las 11 de la noche, agendé para las 8 am y a las 8:15 ya me estaban lavando el auto en la puerta.",
    name: "María F.",
    role: "Cliente",
    business: "Suscripción Completo",
    city: "Zapopan",
    initials: "MF",
  },
  {
    audience: "cliente",
    quote: "Compré el paquete Premium y me olvidé del tema. Todas las semanas viene el mismo equipo y me deja la camioneta impecable.",
    name: "Alejandro R.",
    role: "Cliente",
    business: "Paquete Premium",
    city: "Villa California",
    initials: "AR",
  },
  {
    audience: "cliente",
    quote: "Antes tenía que estacionar 40 minutos en un autolavado. Ahora reservo por WhatsApp y sigo trabajando desde la casa.",
    name: "Paula M.",
    role: "Cliente",
    business: "Cliente por lavada",
    city: "Guadalajara",
    initials: "PM",
  },
  {
    audience: "cliente",
    quote: "Me gusta que el precio queda claro antes de reservar. Sé lo que voy a pagar, sin sorpresas de última hora.",
    name: "Rodrigo L.",
    role: "Cliente",
    business: "Cliente por lavada",
    city: "Tlajomulco",
    initials: "RL",
  },
  {
    audience: "cliente",
    quote: "Reagenda desde la app en dos taps. La primera vez cambié la hora tres veces y ni me hicieron problema.",
    name: "Fernanda S.",
    role: "Cliente",
    business: "Suscripción Básico",
    city: "Casa Fuerte",
    initials: "FS",
  },
  {
    audience: "cliente",
    quote: "El detalle de rines quedó como cuando compré el auto. Los chicos que vinieron sabían lo que hacían.",
    name: "Ernesto C.",
    role: "Cliente",
    business: "Cliente por lavada",
    city: "Adamar",
    initials: "EC",
  },
  {
    audience: "cliente",
    quote: "Mi esposo me regaló la suscripción y no la cambio. Es lo mejor que hemos contratado este año.",
    name: "Valentina O.",
    role: "Cliente",
    business: "Paquete Completo",
    city: "Guadalajara",
    initials: "VO",
  },
  {
    audience: "cliente",
    quote: "Paso mucho tiempo entre juntas. Que me laven el auto sin moverlo del edificio me da 2 horas de vida.",
    name: "Ignacio B.",
    role: "Cliente",
    business: "Cliente por lavada",
    city: "Zapopan",
    initials: "IB",
  },

  {
    audience: "negocio",
    quote: "Antes andaba repartiendo volantes. Ahora los clientes me llegan en la app.",
    name: "Ricardo M.",
    role: "Dueño",
    business: "Lavadero El Rocío",
    city: "Tlajomulco",
    initials: "RM",
  },
  {
    audience: "negocio",
    quote: "Los paquetes me cambiaron el mes. Ya sé qué días voy a estar ocupado antes de arrancar la semana.",
    name: "Laura G.",
    role: "Dueña",
    business: "AutoSpa Fremi Norte",
    city: "Zapopan",
    initials: "LG",
  },
  {
    audience: "negocio",
    quote: "Empecé hace 3 meses y ya tengo clientes fijos por zona. La plataforma se encarga del resto.",
    name: "Jorge P.",
    role: "Dueño",
    business: "Detalles y Lavado Guadalupe",
    city: "Guadalajara",
    initials: "JP",
  },
  {
    audience: "negocio",
    quote: "El WhatsApp con IA me sacó de responder mensajes a las 11 de la noche. Solo lavo y cobro.",
    name: "Diego A.",
    role: "Encargado",
    business: "Car Wash Villa Cal",
    city: "Villa California",
    initials: "DA",
  },
  {
    audience: "negocio",
    quote: "En dos semanas cerré 18 lavadas con clientes que ni conocía. Todo por la app.",
    name: "Sofía R.",
    role: "Dueña",
    business: "Brillo Total",
    city: "Casa Fuerte",
    initials: "SR",
  },
  {
    audience: "negocio",
    quote: "Lo mejor: los pagos me caen en la cuenta sin tener que perseguir a nadie. Cero facturas.",
    name: "Andrés V.",
    role: "Dueño",
    business: "Lavado Express Adamar",
    city: "Adamar",
    initials: "AV",
  },
  {
    audience: "negocio",
    quote: "Me pasé al plan Estándar y la comisión bajó. Estoy ganando más por la misma cantidad de lavadas.",
    name: "Miguel T.",
    role: "Dueño",
    business: "AutoLimpio Fremi",
    city: "Guadalajara",
    initials: "MT",
  },
  {
    audience: "negocio",
    quote: "Rechazo una cita, aparece otra en 10 minutos. No me quedo sin trabajo aunque no pueda con todas.",
    name: "Fernando L.",
    role: "Dueño",
    business: "Lavado Rápido Tlajo",
    city: "Tlajomulco",
    initials: "FL",
  },
];

// Cada audiencia tiene su propia página, así que el bloque ya no lleva tabs:
// la landing del Negocio muestra sólo testimonios de Negocios, y la del
// Cliente sólo de clientes.
const copy: Record<Audience, { title: string; hint: string }> = {
  cliente: {
    title: "Lo que dicen los que ya dejaron de ir al autolavado",
    hint: "Personas reales que hoy tienen su auto limpio todas las semanas — sin salir de la casa, sin filas y sin regatear el precio. Escuchá cómo cambió su rutina.",
  },
  negocio: {
    title: "Lo que dicen nuestros Negocios socios",
    hint: "Negocios socios que dejaron de perseguir clientes: la plataforma les manda las citas, la IA responde por WhatsApp y los pagos les caen automáticos. Escuchá cómo les cambió el mes.",
  },
};

export default function Testimonials({ audience }: { audience: Audience }) {
  const list = testimonials.filter((t) => t.audience === audience);
  const active = copy[audience];

  return (
    <section className="py-10 sm:py-14 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            La red que ya está funcionando
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            {active.title}
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
            {active.hint}
          </p>
        </div>

      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="marquee-row py-3">
          <div key={audience} className="marquee-track marquee-left">
            {[...list, ...list].map((t, i) => (
              <TestimonialCard key={`${audience}-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const isClient = testimonial.audience === "cliente";
  return (
    <div className="shrink-0 w-[320px] sm:w-[360px] bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4 shadow-sm">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-sm text-slate-600 leading-relaxed flex-1">"{testimonial.quote}"</p>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
            isClient ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
          }`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {testimonial.name}, {testimonial.role}
          </p>
          <p className="text-xs text-slate-400">
            {testimonial.business} · {testimonial.city}
          </p>
        </div>
      </div>
    </div>
  );
}
