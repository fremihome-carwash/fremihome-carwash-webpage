import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  User,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { REGISTER_URL, CLIENT_REGISTER_URL } from "../lib/links";

const EMAIL = "hola@carwashfremi.com";

/**
 * Página de Contacto.
 *
 * El form NO postea a ningún lado: no hay endpoint de contacto en `new-server`.
 * Arma un `mailto:` con los datos cargados y abre el cliente de correo, así el
 * formulario sirve hoy sin backend. Cuando exista el endpoint, se reemplaza el
 * `onSubmit` por un fetch a `/api/...`.
 */
export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Contenido />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-10 pb-7 sm:pt-14 sm:pb-9 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
          <Mail className="w-3.5 h-3.5" />
          Contacto
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 text-balance leading-[1.05]">
          Hablemos
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
          ¿Tenés un Negocio de Car Wash y querés sumarte? ¿Sos cliente y algo no
          salió bien? Escribinos y te contestamos.
        </p>
      </div>
    </section>
  );
}

function Contenido() {
  return (
    <section className="pb-20 sm:pb-24 px-4">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-6 lg:gap-8 items-start">
        <Formulario />

        <div className="space-y-4">
          <DatoCard
            icon={<Mail className="w-5 h-5 text-blue-600" />}
            bg="bg-blue-50"
            title="Correo"
            body={
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                {EMAIL}
              </a>
            }
          />
          <DatoCard
            icon={<MapPin className="w-5 h-5 text-amber-600" />}
            bg="bg-amber-50"
            title="Dónde estamos"
            body={
              <p className="text-sm text-slate-600 leading-relaxed">
                Tlajomulco de Zúñiga, Jalisco.
                <br />
                Operamos en Villa California, Casa Fuerte y Adamar.
              </p>
            }
          />
          <DatoCard
            icon={<Clock className="w-5 h-5 text-emerald-600" />}
            bg="bg-emerald-50"
            title="Tiempo de respuesta"
            body={
              <p className="text-sm text-slate-600 leading-relaxed">
                Contestamos dentro de las 24 horas hábiles.
              </p>
            }
          />

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900 mb-3">
              ¿Buscabas otra cosa?
            </p>
            <div className="space-y-2">
              <AtajoLink
                icon={<Building2 className="w-4 h-4 text-blue-600" />}
                href={REGISTER_URL}
                label="Registrar mi Negocio de Car Wash"
              />
              <AtajoLink
                icon={<User className="w-4 h-4 text-emerald-600" />}
                href={CLIENT_REGISTER_URL}
                label="Agendar un lavado"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const motivos = [
  "Quiero registrar mi Negocio de Car Wash",
  "Tengo dudas sobre planes y comisiones",
  "Soy cliente y necesito ayuda con una reserva",
  "Prensa o alianzas",
  "Otro",
];

function Formulario() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    motivo: motivos[0],
    mensaje: "",
  });

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cuerpo = [
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Motivo: ${form.motivo}`,
      "",
      form.mensaje,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `[Web] ${form.motivo}`,
    )}&body=${encodeURIComponent(cuerpo)}`;
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 mb-5">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-950">
          Se abrió tu correo con el mensaje listo
        </h2>
        <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
          Sólo falta que lo envíes desde tu cliente de correo. Si no se abrió,
          escribinos directo a{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            {EMAIL}
          </a>
          .
        </p>
        <button
          onClick={() => setEnviado(false)}
          className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 text-slate-700 font-medium rounded-xl border border-slate-300 hover:bg-slate-50 transition-colors text-sm"
        >
          Escribir otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Campo label="Nombre" htmlFor="nombre">
          <input
            id="nombre"
            required
            value={form.nombre}
            onChange={(e) => set("nombre")(e.target.value)}
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          />
        </Campo>

        <Campo label="Correo" htmlFor="email">
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="vos@correo.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          />
        </Campo>
      </div>

      <Campo label="Motivo" htmlFor="motivo">
        <select
          id="motivo"
          value={form.motivo}
          onChange={(e) => set("motivo")(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
        >
          {motivos.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </Campo>

      <Campo label="Mensaje" htmlFor="mensaje">
        <textarea
          id="mensaje"
          required
          rows={5}
          value={form.mensaje}
          onChange={(e) => set("mensaje")(e.target.value)}
          placeholder="Contanos en qué te podemos ayudar."
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow resize-y"
        />
      </Campo>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm shadow-lg shadow-blue-600/20"
      >
        Enviar mensaje
        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-xs text-slate-400 leading-relaxed">
        Al enviar se abre tu cliente de correo con el mensaje ya escrito.
      </p>
    </form>
  );
}

function Campo({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold text-slate-900 mb-1.5"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function DatoCard({
  icon,
  bg,
  title,
  body,
}: {
  icon: React.ReactNode;
  bg: string;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`inline-flex items-center justify-center w-10 h-10 rounded-2xl ${bg}`}
        >
          {icon}
        </div>
        <h2 className="text-sm font-bold text-slate-950">{title}</h2>
      </div>
      {body}
    </div>
  );
}

function AtajoLink({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-2.5 rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 hover:border-blue-300 transition-colors"
    >
      {icon}
      <span className="text-sm font-medium text-slate-700 flex-1">{label}</span>
      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
    </a>
  );
}
