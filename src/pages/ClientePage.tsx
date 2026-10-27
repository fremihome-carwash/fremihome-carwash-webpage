import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Car,
  Check,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock,
  CloudRain,
  Droplets,
  Gift,
  Info,
  MapPin,
  MessageCircle,
  Repeat,
  Percent,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Star,
  Tag,
  Wallet,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import PhotoCarousel, { type Slide } from "../components/PhotoCarousel";
import { CLIENT_REGISTER_URL, CLIENTE_PAQUETES } from "../lib/links";

/**
 * Landing del CLIENTE — la persona que consume el servicio.
 *
 * Es una página de VENTA, no un catálogo. El gancho es el mismo en todas las
 * secciones: escribís por WhatsApp y la IA te consigue un Negocio de Car Wash
 * disponible. El cliente nunca busca, compara ni llama.
 *
 * Contraparte de la home (`/`), que le habla al Negocio.
 * Ojo con `/clientes`: esa otra página le habla al Negocio sobre lo que le
 * ofrece a *sus* clientes. No es esta.
 */
export default function ClientePage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <DosFormas />
        <LoQuePodesHacer />
        <SoloLoQueNecesitas />
        <Recurrente />
        <Testimonials audience="cliente" />
        <Precios />
        <Paquetes />
        <Zonas />
        <Preguntas />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------- Hero --- */

// Fotos de fondo del hero — mismo patrón que la home del Negocio.
const slides: Slide[] = [
  {
    src: "/wash-driveway.jpg",
    alt: "Lavado con hidrolavadora en la entrada de una casa",
    caption: "Lavado Completo · Villa California",
  },
  {
    src: "/wash-pressure.jpg",
    alt: "Hidrolavadora enjuagando el frente de un auto negro",
    caption: "Lavado Premium · Casa Fuerte",
  },
  {
    src: "/wash-foam-glove.jpg",
    alt: "Espuma sobre la carrocería de un auto negro",
    caption: "Detallado · Zapopan",
  },
  {
    src: "/wash-sponge-blue.jpg",
    alt: "Esponja con espuma sobre el cofre de un auto azul",
    caption: "Lavado Básico · Adamar",
  },
];

function Hero() {
  return (
    <PhotoCarousel slides={slides}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-9 pb-10 sm:pt-12 sm:pb-13">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          <div>
            {/* El slogan manda. El "cómo" (app o chat) va abajo, de respaldo. */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.03] tracking-tight text-white text-balance drop-shadow-lg">
              Tu auto siempre limpio. Sin moverlo de tu casa.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed max-w-xl">
              Pedí un lavado como pedís un viaje: vos seguís con lo tuyo y un
              Negocio de Car Wash verificado llega a tu casa con todo el equipo.
            </p>

            <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl">
              <span className="text-slate-200 font-medium">
                No quedás atado a un solo negocio:
              </span>{" "}
              cada vez te atiende el que tenga lugar en tu zona, y si uno no
              puede, va otro. Y{" "}
              <span className="text-slate-200 font-medium">
                cada lavado lo armás vos
              </span>
              : elegís qué servicios querés esta vez y el precio se ajusta a
              eso. El lavado se adapta a tu auto y a tu momento, no al revés.{" "}
              <span className="text-slate-200 font-medium">
                Pagás sólo lo que necesitás.
              </span>
            </p>

            <p className="mt-3 text-base text-slate-400 leading-relaxed max-w-xl">
              Y si lavás seguido,{" "}
              <span className="text-slate-200 font-medium">
                con un paquete te llevás descuentos, ofertas y premios que se
                acumulan lavada a lavada
              </span>
              : dejás las del mes agendadas de una o las vas pidiendo cuando te
              haga falta. Y si querés cubrirte,{" "}
              <span className="text-slate-200 font-medium">
                podés adquirir garantía de lavado
              </span>
              .
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={CLIENT_REGISTER_URL}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm shadow-lg shadow-blue-950/40"
              >
                <Smartphone className="w-4 h-4" />
                Abrir la app y pedir mi lavado
              </a>
              <a
                href="#precios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-medium rounded-xl border border-white/25 hover:bg-white/10 transition-colors text-sm backdrop-blur"
              >
                Ver precios
                <ArrowRight className="w-4 h-4 text-white/60" />
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-xl">
              No descargás nada de una tienda ni dejás tu tarjeta para mirar:
              entrás, ves el precio final y recién ahí decidís.
            </p>
          </div>

          {/* Una sola tarjeta cuenta el pitch: la reserva vive en la app,
              aunque la hayas pedido escribiendo por chat. */}
          <div className="hidden lg:block justify-self-end w-full max-w-sm">
            <NextWashCard />
          </div>
        </div>
      </div>
    </PhotoCarousel>
  );
}

function NextWashCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-slate-950/50 p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Próximo lavado
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
          <CheckCircle2 className="w-3 h-3" />
          Confirmado
        </span>
      </div>

      <p className="text-base font-bold text-slate-900 leading-tight">
        Sábado 10:00
      </p>
      <p className="text-sm text-slate-500 mt-0.5">
        Camioneta · Lavado Completo
      </p>
      <p className="text-sm text-slate-500">Villa California · $280 MXN</p>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2">
        <MessageCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
        <p className="text-xs text-slate-500 leading-relaxed">
          Lo pediste por chat. La IA lo agendó acá por vos.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------- Dos formas de agendar --- */

function DosFormas() {
  return (
    <section
      id="como-funciona"
      className="py-10 sm:py-14 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5">
            <Smartphone className="w-3.5 h-3.5" />
            App + chat con IA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            Dos formas de pedirlo. Una sola app.
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Si te gusta hacerlo vos, la app te lo resuelve en tres taps. Si estás
            apurado, escribí y ya — la IA arma la reserva y la deja cargada en tu
            app igual que si la hubieras hecho a mano.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
          <EntryCard
            icon={Smartphone}
            color="text-blue-600"
            bg="bg-blue-50"
            badge="Opción 1"
            title="Lo agendás vos desde la app"
            text="Tu auto y tu dirección quedan guardados. Elegís lavado, servicios adicionales, día y hora, y ves el total antes de confirmar."
          >
            <AppSteps />
          </EntryCard>

          <EntryCard
            icon={MessageCircle}
            color="text-emerald-600"
            bg="bg-emerald-50"
            badge="Opción 2"
            title="Se lo pedís al chat y la IA lo agenda"
            text="Escribís en lenguaje normal. La IA entiende qué auto, qué lavado y cuándo, te busca un Negocio disponible, y carga la reserva en tu app."
          >
            <ChatSteps />
          </EntryCard>
        </div>

        {/* Las dos puertas terminan en el mismo lugar */}
        <div className="rounded-2xl border-2 border-slate-900 bg-slate-900 px-6 py-6 sm:px-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-base font-bold text-white">
              Pidas como pidas, la reserva termina en tu app
            </p>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">
              Ahí seguís el estado, reagendás, ves el historial, cuántas lavadas
              te quedan del paquete y los comprobantes. El chat es una puerta de
              entrada, no un sistema aparte.
            </p>
          </div>
          <a
            href={CLIENT_REGISTER_URL}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors text-sm shrink-0"
          >
            Entrar a la app
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MiniPerk
            icon={Search}
            color="text-blue-600"
            title="La IA busca por vos"
            text="Cruza tu zona, tu horario y qué Negocios tienen lugar. Vos no comparás ni llamás a nadie."
          />
          <MiniPerk
            icon={ShieldCheck}
            color="text-violet-600"
            title="Negocios verificados"
            text="Sólo lavan empresas aprobadas por la plataforma, con historial y calificación."
          />
          <MiniPerk
            icon={Wallet}
            color="text-emerald-600"
            title="Precio cerrado"
            text="El total lo ves antes de confirmar, por chat o por app. Sin cargos sorpresa."
          />
          <MiniPerk
            icon={Star}
            color="text-amber-600"
            title="Calificás al final"
            text="Tu calificación decide a quién te asigna la IA la próxima vez."
          />
        </div>
      </div>
    </section>
  );
}

function EntryCard({
  icon: Icon,
  color,
  bg,
  badge,
  title,
  text,
  children,
}: {
  icon: typeof Smartphone;
  color: string;
  bg: string;
  badge: string;
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${bg}`}
        >
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {badge}
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-950 leading-snug">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mt-2">{text}</p>
      <div className="mt-5 flex-1">{children}</div>
    </div>
  );
}

/** Mock del flujo dentro de la app. */
function AppSteps() {
  const rows = [
    { label: "Auto", value: "Camioneta (SUV)" },
    { label: "Lavado", value: "Completo" },
    { label: "Adicionales", value: "Rines" },
    { label: "Cuándo", value: "Sábado 10:00" },
  ];
  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between gap-2 text-xs"
          >
            <span className="text-slate-400">{r.label}</span>
            <span className="font-semibold text-slate-700">{r.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between">
        <span className="text-xs text-slate-400">Total</span>
        <span className="text-base font-extrabold text-blue-600">$330 MXN</span>
      </div>
      <div className="mt-3 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold text-center">
        Confirmar reserva
      </div>
    </div>
  );
}

/** Mock del chat. La última burbuja es el punto: la IA lo dejó en la app. */
function ChatSteps() {
  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 space-y-2">
      <Msg me text="hola, lavame la camioneta el sábado en la mañana" />
      <Msg text="¡Hola! ¿Lavado Completo ($280) o le sumamos rines (+$50)?" />
      <Msg me text="con rines" />
      <Msg text="Listo ✅ Sábado 10:00 · $330. Ya te lo dejé cargado en tu app." />
    </div>
  );
}

function Msg({ text, me = false }: { text: string; me?: boolean }) {
  return (
    <div className={`flex ${me ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-2xl px-3 py-2 max-w-[85%] shadow-sm ${
          me
            ? "bg-emerald-100 rounded-tr-sm"
            : "bg-white rounded-tl-sm border border-slate-100"
        }`}
      >
        <p className="text-xs text-slate-800 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function MiniPerk({
  icon: Icon,
  color,
  title,
  text,
}: {
  icon: typeof ShieldCheck;
  color: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-2 shadow-sm">
      <Icon className={`w-5 h-5 ${color}`} />
      <h3 className="text-sm font-bold text-slate-950">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{text}</p>
    </div>
  );
}

/* --------------------------------------------------- Lo que podés hacer --- */

const capacidades = [
  {
    icon: BadgeCheck,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Comprá un paquete mensual",
    text: "4 lavadas al mes con hasta 24% de rebaja, ofertas exclusivas en servicios adicionales y premios que vas acumulando lavada a lavada.",
    link: { label: "Ver paquetes", href: "#paquetes" },
  },
  {
    icon: Sparkles,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Agregá servicios adicionales",
    text: "Interior, rines, motor, encerado, tapicería. Los sumás a cualquier lavada desde el mismo chat y el total se recalcula al instante.",
    link: { label: "Ver servicios", href: "#precios" },
  },
  {
    icon: Repeat,
    color: "text-violet-600",
    bg: "bg-violet-50",
    title: "Agendá periódicamente",
    text: "«Todos los sábados a las 10» y listo. La IA reserva sola cada semana, te lo recuerda un día antes y vos sólo decís que sí.",
    link: { label: "Cómo funciona", href: "#recurrente" },
  },
  {
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-50",
    title: "Seguí todo desde la app",
    text: "Historial de lavadas, lavadas que te quedan del paquete, próximas citas y comprobantes. Todo en un solo lugar.",
    link: { label: "Entrar a la app", href: CLIENT_REGISTER_URL },
  },
];

function LoQuePodesHacer() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            No es sólo pedir un lavado suelto
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Podés armarte una rutina completa: paquete mensual, servicios
            adicionales a medida y agenda automática. Todo se maneja por chat o
            desde la app.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {capacidades.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-3 shadow-sm"
            >
              <div
                className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${c.bg}`}
              >
                <c.icon className={`w-5 h-5 ${c.color}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 leading-snug">
                {c.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">
                {c.text}
              </p>
              <a
                href={c.link.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {c.link.label}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------ Sólo lo que necesitás --- */

const flexibilidades = [
  {
    icon: Droplets,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "¿Sólo por fuera? Sale más barato",
    text: "El Lavado Básico es exterior más aspirado rápido, y es el más económico de todos. Si esta semana no necesitás el interior, no lo pagás.",
  },
  {
    icon: CloudRain,
    color: "text-violet-600",
    bg: "bg-violet-50",
    title: "Garantía de lavado, si la querés",
    text: "La sumás al agendar, como un adicional más. Si llueve y el auto se te vuelve a ensuciar, te lo repetimos sin volver a pagar el lavado.",
  },
  {
    icon: SlidersHorizontal,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Cada lavado lo armás vos",
    text: "Elegís servicio por servicio qué querés esta vez: interior, rines, motor, encerado, tapicería. El total se recalcula al instante. El lavado se ajusta a vos, no vos a un paquete cerrado.",
  },
  {
    icon: Car,
    color: "text-amber-600",
    bg: "bg-amber-50",
    title: "Pagás por tu auto, no una tarifa plana",
    text: "El precio arranca según el tamaño real: chico, camioneta o grande. Un sedán no paga lo mismo que una pickup.",
  },
];

function SoloLoQueNecesitas() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            Pagás sólo lo que tu auto necesita
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            No todas las semanas hace falta lo mismo. Elegís qué tan a fondo
            querés el lavado y pagás por eso, nada más.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {flexibilidades.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-3 shadow-sm"
            >
              <div
                className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${f.bg}`}
              >
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 leading-snug">
                {f.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#precios"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
          >
            Ver qué incluye cada lavado
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Recurrente --- */

const agenda = [
  { day: "Sáb 7", state: "Listo" as const },
  { day: "Sáb 14", state: "Listo" as const },
  { day: "Sáb 21", state: "Agendado" as const },
  { day: "Sáb 28", state: "Agendado" as const },
];

function Recurrente() {
  return (
    <section
      id="recurrente"
      className="py-10 sm:py-14 px-4 bg-slate-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-violet-300 text-xs font-semibold mb-5">
            <Repeat className="w-3.5 h-3.5" />
            Agenda recurrente
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Decilo una vez. Se agenda solo todos los meses.
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Le decís al asistente «lavame la camioneta todos los sábados a las
            10» y se acabó el tema. La IA reserva sola cada semana con un Negocio
            de Car Wash disponible, te lo recuerda un día antes, y si esa semana
            no podés, respondés «esta no» y la saltea.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Elegís frecuencia: semanal, quincenal o mensual",
              "Te recuerda un día antes — confirmás o salteás",
              "Si el Negocio de siempre no puede, la IA te consigue otro",
              "Lo pausás o lo cancelás cuando quieras, sin costo",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  {t}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={CLIENT_REGISTER_URL}
            className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm"
          >
            Armar mi agenda
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="w-full max-w-sm mx-auto lg:max-w-none">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-semibold text-white">Mi agenda</p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-semibold">
                <Repeat className="w-3 h-3" />
                Semanal
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              Camioneta · Lavado Completo · Villa California
            </p>

            <div className="space-y-2.5">
              {agenda.map((a) => {
                const done = a.state === "Listo";
                return (
                  <div
                    key={a.day}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                          done ? "bg-emerald-500/20" : "bg-white/10"
                        }`}
                      >
                        {done ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <CalendarClock className="w-4 h-4 text-slate-300" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white leading-tight">
                          {a.day} · 10:00
                        </p>
                        <p className="text-xs text-slate-400">$280 MXN</p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold shrink-0 ${
                        done ? "text-emerald-400" : "text-slate-400"
                      }`}
                    >
                      {a.state}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-xs text-slate-500 leading-relaxed border-t border-white/10 pt-4">
              Se renueva sola cada mes. No tenés que volver a agendar nada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Precios --- */

const vehiculos = [
  { name: "Chico", precio: 150, img: "/vehicle-small.png", hint: "Sedán, hatchback" },
  { name: "Camioneta (SUV)", precio: 200, img: "/vehicle-suv.png", hint: "SUV, crossover" },
  { name: "Grande", precio: 250, img: "/vehicle-large.png", hint: "Pickup, van" },
];

// `incluye`: lo que trae el lavado, para mostrar en la modal.
// `cubre`: qué servicios adicionales YA vienen adentro. Sirve para no
// cobrarlos dos veces — el adicional se deshabilita y se saca de la selección.
const tiposLavado = [
  {
    name: "Básico",
    precio: 0,
    description: "Exterior con jabón y aspirado rápido. Para mantener el auto presentable.",
    incluye: [
      "Lavado exterior con jabón",
      "Enjuague y secado a mano",
      "Aspirado rápido del interior",
    ],
    cubre: [] as string[],
  },
  {
    name: "Completo",
    precio: 80,
    description: "Exterior completo, aspirado profundo, cristales, salpicaderas y plásticos.",
    incluye: [
      "Todo lo del Básico",
      "Aspirado profundo de alfombras y asientos",
      "Cristales por dentro y por fuera",
      "Salpicaderas y plásticos interiores",
    ],
    cubre: ["Interior"],
  },
  {
    name: "Premium",
    precio: 150,
    description: "Todo el Completo, más encerado exterior y detallado de interiores.",
    incluye: [
      "Todo lo del Completo",
      "Encerado exterior de carrocería",
      "Detallado de interiores",
    ],
    cubre: ["Interior", "Encerado"],
  },
  {
    name: "Detallado",
    precio: 250,
    description: "Trabajo profundo: interior, encerado, rines, plásticos tratados y motor limpio.",
    incluye: [
      "Todo lo del Premium",
      "Detallado de rines con protector",
      "Plásticos tratados y protegidos",
      "Limpieza de motor",
    ],
    cubre: ["Interior", "Encerado", "Rines", "Motor"],
  },
  {
    name: "Full",
    precio: 380,
    description: "Detallado extendido con tapicería, motor detallado y aromatizado premium.",
    incluye: [
      "Todo lo del Detallado",
      "Champú de tapicería",
      "Motor detallado",
      "Aromatizado premium",
    ],
    cubre: ["Interior", "Encerado", "Rines", "Motor", "Tapicería"],
  },
];

const adicionales = [
  { name: "Interior", precio: 100, icon: Car, description: "Aspirado profundo, salpicaderas, plásticos y cristales interiores." },
  { name: "Rines", precio: 50, icon: Circle, description: "Limpiador especial y protector para los rines." },
  { name: "Motor", precio: 70, icon: Sparkles, description: "Limpieza de motor con producto especializado, sin riesgo eléctrico." },
  { name: "Encerado", precio: 80, icon: Droplets, description: "Cera protectora para la carrocería, brillo que dura." },
  { name: "Tapicería", precio: 120, icon: Sparkles, description: "Champú de tapicería: manchas, olores y limpieza profunda." },
];

const money = (n: number) => `$${n.toLocaleString("es-MX")}`;

/**
 * Simulador de precio.
 *
 * Reglas de selección: tamaño y tipo de lavado son excluyentes (uno solo);
 * los adicionales son libres (cero o los que quiera). El resumen de abajo
 * recalcula en vivo, así el visitante ve el total antes de entrar a la app.
 */
function Precios() {
  const [tamano, setTamano] = useState(vehiculos[1].name);
  const [lavado, setLavado] = useState(tiposLavado[0].name);
  const [extras, setExtras] = useState<string[]>([]);
  const [verServicios, setVerServicios] = useState<string | null>(null);

  const vehiculo = vehiculos.find((v) => v.name === tamano)!;
  const tipo = tiposLavado.find((t) => t.name === lavado)!;

  // Si el lavado ya trae el adicional, no se cobra de nuevo.
  const extrasElegidos = adicionales.filter(
    (a) => extras.includes(a.name) && !tipo.cubre.includes(a.name),
  );

  const total =
    vehiculo.precio +
    tipo.precio +
    extrasElegidos.reduce((acc, a) => acc + a.precio, 0);

  const elegirLavado = (name: string) => {
    const nuevo = tiposLavado.find((t) => t.name === name)!;
    setLavado(name);
    setExtras((prev) => prev.filter((e) => !nuevo.cubre.includes(e)));
  };

  const toggleExtra = (name: string) =>
    setExtras((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );

  return (
    <section id="precios" className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-semibold mb-5">
            <Wallet className="w-3.5 h-3.5" />
            Armá tu lavado
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            Probá cuánto te saldría
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Elegí el tamaño de tu auto, el tipo de lavado y los servicios
            adicionales que quieras. El total se calcula solo.
          </p>
        </div>

        {/* 1 · Tamaño — excluyente */}
        <Paso numero="1" titulo="Tamaño de tu auto" nota="Elegí uno">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {vehiculos.map((v) => {
              const activo = v.name === tamano;
              return (
                <button
                  key={v.name}
                  type="button"
                  role="radio"
                  aria-checked={activo}
                  onClick={() => setTamano(v.name)}
                  className={`relative rounded-2xl border-2 p-4 flex flex-col items-center gap-2 text-center transition-colors ${
                    activo
                      ? "border-blue-500 bg-blue-50/50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  {activo && <Tilde />}
                  <img src={v.img} alt="" className="h-14 sm:h-16 object-contain" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 leading-tight">
                      {v.name}
                    </p>
                    <p className="hidden sm:block text-[11px] text-slate-400">
                      {v.hint}
                    </p>
                    <p className="text-base font-extrabold text-blue-600 mt-0.5">
                      {money(v.precio)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </Paso>

        {/* 2 · Tipo de lavado — excluyente, en una sola fila con scroll */}
        <Paso numero="2" titulo="Tipo de lavado" nota="Elegí uno">
          <FilaScroll>
            {tiposLavado.map((t) => {
              const activo = t.name === lavado;
              return (
                <div
                  key={t.name}
                  role="radio"
                  aria-checked={activo}
                  tabIndex={0}
                  onClick={() => elegirLavado(t.name)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      elegirLavado(t.name);
                    }
                  }}
                  className={`relative shrink-0 w-[260px] snap-start rounded-2xl border-2 p-5 text-left cursor-pointer flex flex-col transition-colors ${
                    activo
                      ? "border-violet-500 bg-violet-50/50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  {activo && <Tilde color="bg-violet-600" />}
                  <div className="flex items-center justify-between gap-2 mb-1.5 pr-6">
                    <h4 className="text-base font-bold text-slate-900">{t.name}</h4>
                    <span className="text-sm font-bold text-violet-600 shrink-0">
                      {t.precio === 0 ? "incluido" : `+${money(t.precio)}`}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {t.description}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setVerServicios(t.name);
                    }}
                    className="mt-3 inline-flex items-center gap-1.5 self-start text-xs font-semibold text-violet-700 hover:text-violet-900 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Servicios que incluye
                  </button>
                </div>
              );
            })}
          </FilaScroll>
        </Paso>

        {/* 3 · Adicionales — libres, en una sola fila con scroll */}
        <Paso
          numero="3"
          titulo="Servicios adicionales"
          nota="Sumá los que quieras, o ninguno"
        >
          <FilaScroll>
            {adicionales.map((a) => {
              const yaIncluido = tipo.cubre.includes(a.name);
              const activo = !yaIncluido && extras.includes(a.name);
              return (
                <button
                  key={a.name}
                  type="button"
                  aria-pressed={activo}
                  disabled={yaIncluido}
                  onClick={() => toggleExtra(a.name)}
                  className={`relative shrink-0 w-[260px] snap-start rounded-2xl border-2 p-5 text-left transition-colors ${
                    yaIncluido
                      ? "border-slate-200 bg-slate-50 cursor-not-allowed"
                      : activo
                        ? "border-emerald-500 bg-emerald-50/50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  {activo && <Tilde color="bg-emerald-600" />}
                  {yaIncluido && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 text-[10px] font-bold">
                      Ya incluido
                    </span>
                  )}
                  <div className="flex items-center justify-between gap-2 mb-2 pr-6">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                        <a.icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 truncate">
                        {a.name}
                      </h4>
                    </div>
                    {!yaIncluido && (
                      <span className="text-sm font-bold text-emerald-700 shrink-0">
                        +{money(a.precio)}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {yaIncluido
                      ? `Ya viene en el Lavado ${tipo.name}. No lo pagás aparte.`
                      : a.description}
                  </p>
                </button>
              );
            })}
          </FilaScroll>
        </Paso>

        {/* Resumen en vivo */}
        <div className="mt-10 rounded-3xl border-2 border-slate-900 bg-slate-900 p-6 sm:p-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Tu lavado
              </p>

              <ul className="space-y-2.5">
                <LineaResumen label={vehiculo.name} valor={vehiculo.precio} />
                <LineaResumen
                  label={`Lavado ${tipo.name}`}
                  valor={tipo.precio}
                />
                {extrasElegidos.map((a) => (
                  <LineaResumen
                    key={a.name}
                    label={a.name}
                    valor={a.precio}
                    quitable
                    onQuitar={() => toggleExtra(a.name)}
                  />
                ))}
              </ul>

              {extrasElegidos.length === 0 && (
                <p className="mt-3 text-xs text-slate-500">
                  Sin servicios adicionales. Sumá los que quieras arriba.
                </p>
              )}
            </div>

            <div className="lg:text-right border-t lg:border-t-0 lg:border-l border-white/10 pt-5 lg:pt-0 lg:pl-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Total estimado
              </p>
              <p className="mt-1 text-4xl font-extrabold text-white tabular-nums">
                {money(total)}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">MXN</p>

              <a
                href={CLIENT_REGISTER_URL}
                className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm w-full lg:w-auto"
              >
                Agendar este lavado
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          Precio estimado en MXN. El final lo confirmás en la app según tu zona y
          la disponibilidad del Negocio de Car Wash que te toque.
        </p>
      </div>

      <ServiciosModal
        lavado={tiposLavado.find((t) => t.name === verServicios) ?? null}
        onClose={() => setVerServicios(null)}
      />
    </section>
  );
}

/**
 * Detalle de lo que incluye un tipo de lavado.
 *
 * Sube desde abajo en mobile y queda centrada en desktop — la webpage no vive
 * dentro del MobileFrame como las apps, así que el bottom sheet puro se vería
 * raro en pantalla grande.
 */
function ServiciosModal({
  lavado,
  onClose,
}: {
  lavado: (typeof tiposLavado)[number] | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!lavado) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    // Sin esto la página de atrás scrollea con la modal abierta.
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previo;
    };
  }, [lavado, onClose]);

  if (!lavado) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Servicios del Lavado ${lavado.name}`}
    >
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[85vh] flex flex-col">
        <div className="flex items-start justify-between gap-4 p-6 pb-4 border-b border-slate-100">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
              Lavado {lavado.name}
            </p>
            <h3 className="text-xl font-bold text-slate-950 mt-1">
              Qué incluye
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {lavado.precio === 0
                ? "Incluido en el precio base"
                : `+${money(lavado.precio)} sobre el precio base`}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="p-2 -m-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto p-6 space-y-3">
          {lavado.incluye.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-700 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {lavado.cubre.length > 0 && (
          <div className="px-6 pb-4">
            <p className="text-xs text-slate-500 leading-relaxed bg-violet-50 border border-violet-100 rounded-xl px-4 py-3">
              Con este lavado ya no necesitás pagar aparte{" "}
              <strong className="text-violet-800">
                {lavado.cubre.join(", ")}
              </strong>
              .
            </p>
          </div>
        )}

        <div className="p-4 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}

function Paso({
  numero,
  titulo,
  nota,
  children,
}: {
  numero: string;
  titulo: string;
  nota: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-baseline gap-2.5 mb-4">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-bold shrink-0">
          {numero}
        </span>
        <h3 className="text-base font-semibold text-slate-900">{titulo}</h3>
        <span className="text-xs text-slate-400">· {nota}</span>
      </div>
      {children}
    </div>
  );
}

/** Fila horizontal scrolleable, con los bordes sangrados para que no corte. */
function FilaScroll({ children }: { children: React.ReactNode }) {
  return (
    <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory [scrollbar-width:thin]">
        {children}
        <span aria-hidden className="shrink-0 w-1 sm:hidden" />
      </div>
    </div>
  );
}

function Tilde({ color = "bg-blue-600" }: { color?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute top-3 right-3 w-5 h-5 rounded-full ${color} flex items-center justify-center`}
    >
      <Check className="w-3 h-3 text-white" strokeWidth={3} />
    </span>
  );
}

function LineaResumen({
  label,
  valor,
  quitable = false,
  onQuitar,
}: {
  label: string;
  valor: number;
  quitable?: boolean;
  onQuitar?: () => void;
}) {
  return (
    <li className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-2 min-w-0">
        <span className="text-sm text-slate-300 truncate">{label}</span>
        {quitable && (
          <button
            type="button"
            onClick={onQuitar}
            aria-label={`Quitar ${label}`}
            className="text-slate-500 hover:text-white transition-colors shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </span>
      <span className="text-sm font-semibold text-white tabular-nums shrink-0">
        {valor === 0 ? "incluido" : money(valor)}
      </span>
    </li>
  );
}

/* -------------------------------------------------------------- Paquetes --- */

const paquetes = [
  {
    name: "Básico",
    color: "#3B82F6",
    bar: "bg-blue-500",
    price: "≈ $800 / mes",
    suelto: "≈ $1,000 suelto",
    ahorro: "Ahorrás $200",
    tagline: "Un lavado por semana para que el auto nunca se vea sucio.",
    perks: [
      "4 lavadas exteriores al mes",
      "Tamaño SUV incluido",
      "Van a tu domicilio",
      "Reagendás o cancelás sin costo",
    ],
    popular: false,
  },
  {
    name: "Completo",
    color: "#8B5CF6",
    bar: "bg-violet-500",
    price: "≈ $1,200 / mes",
    suelto: "≈ $1,520 suelto",
    ahorro: "Ahorrás $320",
    tagline: "Exterior siempre limpio, más interior aspirado dos veces al mes.",
    perks: [
      "4 lavadas completas exteriores",
      "Interior en 2 de las 4 visitas",
      "Tamaño SUV incluido",
      "Se descuenta por lavada usada",
    ],
    popular: true,
  },
  {
    name: "Premium",
    color: "#F59E0B",
    bar: "bg-amber-500",
    price: "≈ $1,700 / mes",
    suelto: "≈ $2,240 suelto",
    ahorro: "Ahorrás $540",
    tagline: "El más completo: interior, rines y encerado incluidos.",
    perks: [
      "4 lavadas completas al mes",
      "Interior las 4 veces",
      "Rines las 4 veces",
      "Encerado 2 veces al mes",
    ],
    popular: false,
  },
];

function Paquetes() {
  return (
    <section
      id="paquetes"
      className="py-10 sm:py-14 px-4 bg-slate-50 border-y border-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5">
            <BadgeCheck className="w-3.5 h-3.5" />
            Paquetes mensuales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            El paquete no sólo te sale más barato
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Pagás una vez al mes y tenés{" "}
            <strong className="text-slate-900">4 lavadas incluidas</strong> a
            precio rebajado. Y por tener paquete activo entrás a{" "}
            <strong className="text-slate-900">ofertas exclusivas</strong> y
            acumulás <strong className="text-slate-900">premios</strong>.
          </p>
        </div>

        <div className="mb-12 rounded-3xl border-2 border-blue-200 bg-white shadow-sm overflow-hidden">
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
                <h3 className="text-lg font-bold text-slate-950">{pkg.name}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  {pkg.tagline}
                </p>

                <p
                  className="mt-4 text-xl font-extrabold"
                  style={{ color: pkg.color }}
                >
                  {pkg.price}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-slate-400 line-through decoration-slate-300">
                    {pkg.suelto}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                    <Percent className="w-3 h-3" />
                    {pkg.ahorro}
                  </span>
                </div>

                <ul className="mt-5 space-y-2 flex-1">
                  {pkg.perks.map((p) => (
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

        <PremiosBanda />

        <div className="mt-10 flex justify-center">
          <a
            href={CLIENTE_PAQUETES}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm shadow-lg shadow-blue-600/20"
          >
            Ver paquetes en detalle
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Precios estimados en MXN — el final depende del tamaño de tu auto y tu
          zona. Podés pausar el paquete cuando quieras.
        </p>
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

/**
 * Barra de progreso de premios. Hace tangible el "acumulás y desbloqueás":
 * un número abstracto no vende, una barra a punto de llenarse sí.
 */
function PremiosBanda() {
  const hechas = 7;
  const meta = 10;
  const pct = (hechas / meta) * 100;

  return (
    <div className="mt-10 rounded-3xl bg-slate-900 px-6 py-7 sm:px-9 sm:py-8">
      <div className="grid lg:grid-cols-[1fr_auto] gap-7 lg:gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-emerald-300 text-xs font-semibold mb-4">
            <Gift className="w-3.5 h-3.5" />
            Premios por lavada
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight text-balance">
            Cada lavada te acerca a una gratis
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-lg">
            Con paquete activo sumás una lavada al contador cada vez que te
            lavan. Al llegar a {meta} desbloqueás el premio: lavada gratis,
            upgrade de tipo de lavado o un servicio adicional sin costo — elegís
            vos.
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
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-3 text-xs text-emerald-300 font-semibold">
            Te faltan {meta - hechas} para tu próxima lavada gratis
          </p>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- Zonas --- */

const zonas = ["Villa California", "Casa Fuerte", "Adamar"];

function Zonas() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-10 sm:px-10 sm:py-12 text-center shadow-sm">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-semibold mb-5">
            <MapPin className="w-3.5 h-3.5" />
            Zonas de cobertura
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-balance">
            Ahora mismo lavamos en Tlajomulco de Zúñiga
          </h2>
          <p className="mt-3 text-slate-500 leading-relaxed max-w-lg mx-auto">
            Estamos arrancando por estos fraccionamientos. Si no ves el tuyo,
            escribinos igual — te avisamos apenas haya un Negocio de Car Wash
            cubriendo tu zona.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {zonas.map((z) => (
              <span
                key={z}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                {z}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Preguntas --- */

const preguntas = [
  {
    q: "¿Tengo que descargar una app?",
    a: "No para agendar: con WhatsApp alcanza. La app es opcional y sirve para ver tu historial, cuántas lavadas te quedan del paquete y tus próximas citas.",
  },
  {
    q: "¿Cómo elige la IA quién me lava el auto?",
    a: "Cruza tu zona, el horario que pediste y qué Negocios de Car Wash verificados tienen disponibilidad. Prioriza los de mejor calificación. Siempre te dice quién es antes de confirmar.",
  },
  {
    q: "¿Necesito tener agua o luz disponible?",
    a: "No. El Negocio de Car Wash llega con su propio equipo, agua y producto. Vos sólo dejás el auto accesible.",
  },
  {
    q: "¿Cómo pago?",
    a: "Al confirmar la reserva, desde el link que te pasa la IA o desde la app. Ves el total exacto antes de pagar — tamaño, tipo de lavado y servicios adicionales ya sumados.",
  },
  {
    q: "¿Qué pasa si llueve o no estoy?",
    a: "Reagendás por el mismo chat sin costo. Si el Negocio de Car Wash no puede ir, la IA te consigue otro o te devolvemos el importe.",
  },
  {
    q: "¿Cómo funciona la garantía de lavado?",
    a: "Es un adicional opcional que sumás al agendar, igual que el interior o los rines. Si llueve después de tu lavado y el auto se vuelve a ensuciar, te lo repetimos sin volver a pagarlo: lo pedís por el chat o desde la app y agendamos el nuevo turno.",
  },
  {
    q: "¿Puedo pedir sólo el lavado exterior?",
    a: "Sí, y es la opción más barata. El Lavado Básico es exterior más aspirado rápido, sin interior. Después le sumás adicionales sólo si los querés.",
  },
  {
    q: "¿Puedo pedir sólo el interior?",
    a: "Sí. Los servicios adicionales se agregan sueltos a cualquier lavado, y el Interior es uno de ellos.",
  },
  {
    q: "¿Cuánto tarda un lavado?",
    a: "Un Básico ronda los 30–40 minutos. Un Detallado o Full puede llevar 2 horas o más según el estado del auto.",
  },
  {
    q: "¿Cómo funcionan los premios?",
    a: "Con paquete activo sumás una lavada al contador cada vez que te lavan. Al llegar a 10 desbloqueás el premio y elegís vos: una lavada gratis, un upgrade de tipo de lavado o un servicio adicional sin costo. El contador y las ofertas vigentes los ves en la app.",
  },
  {
    q: "¿Puedo cancelar el paquete o la agenda recurrente?",
    a: "Cuando quieras y sin costo. Lo pausás o lo cancelás por WhatsApp o desde la app.",
  },
];

function Preguntas() {
  return (
    <section
      id="preguntas"
      className="py-10 sm:py-14 px-4 bg-slate-50 border-y border-slate-100"
    >
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
