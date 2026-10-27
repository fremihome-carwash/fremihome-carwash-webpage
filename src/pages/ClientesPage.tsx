import { ArrowRight, Check, Sparkles, Droplets, Car, Circle, CalendarCheck, Repeat, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { REGISTER_URL } from "../lib/links";

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <SectionNav />
        <Paquetes />
        <TiposLavado />
        <Servicios />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-10 pb-8 sm:pt-14 sm:pb-10 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
          Para clientes
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 text-balance leading-[1.05]">
          Todo lo que ofrecemos a tus clientes
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Paquetes de suscripción, tipos de lavado y servicios extras. Pensado para retener clientes fijos y aumentar el ticket promedio de cada visita.
        </p>
      </div>
    </section>
  );
}

function SectionNav() {
  const items = [
    { href: "#paquetes", label: "Paquetes" },
    { href: "#tipos-lavado", label: "Tipos de lavado" },
    { href: "#servicios", label: "Servicios extras" },
  ];
  return (
    <nav className="pb-6 px-4">
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-2">
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:border-blue-300 hover:text-blue-700 transition-colors"
          >
            {it.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

const packages = [
  {
    name: "Básico",
    color: "#3B82F6",
    bar: "bg-blue-500",
    price: "≈ $800 / mes",
    tagline: "Lavado semanal para mantener el auto siempre presentable.",
    perks: [
      "4 lavadas exteriores / mes",
      "Tamaño SUV incluido",
      "Servicio a domicilio",
      "Reagenda o cancela sin costo",
    ],
    popular: false,
  },
  {
    name: "Completo",
    color: "#8B5CF6",
    bar: "bg-violet-500",
    price: "≈ $1,200 / mes",
    tagline: "Exterior siempre limpio, más interior aspirado dos veces al mes.",
    perks: [
      "4 lavadas completas exteriores / mes",
      "Interior en 2 de 4 visitas",
      "Tamaño SUV incluido",
      "Se cobra por lavada aplicada",
    ],
    popular: true,
  },
  {
    name: "Premium",
    color: "#F59E0B",
    bar: "bg-amber-500",
    price: "≈ $1,700 / mes",
    tagline: "El paquete más completo: interior, rines y encerado incluidos.",
    perks: [
      "4 lavadas completas / mes",
      "Interior 4 usos",
      "Rines 4 usos",
      "Encerado 2 usos",
    ],
    popular: false,
  },
];

function Paquetes() {
  return (
    <section id="paquetes" className="py-10 sm:py-14 px-4 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5">
            Paquetes de suscripción
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            El cliente compra el paquete. Vos tenés trabajo constante.
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Cuando un cliente compra un paquete, se compromete con <strong className="text-slate-900">varias lavadas por adelantado</strong> — normalmente 4 al mes con el mismo Negocio de Car Wash. Esas visitas ya están agendadas para vos antes de que arranque el mes.
          </p>
        </div>

        <div className="mb-12 rounded-3xl border-2 border-blue-200 bg-white shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-100">
            <BenefitTile
              icon={<CalendarCheck className="w-6 h-6 text-blue-600" />}
              iconBg="bg-blue-50"
              value="4 lavadas / mes"
              label="Reservadas para vos por cada cliente con paquete."
            />
            <BenefitTile
              icon={<Repeat className="w-6 h-6 text-violet-600" />}
              iconBg="bg-violet-50"
              value="El mismo cliente"
              label="Vuelve semana a semana. Ruta fija, sin salir a buscarlo."
            />
            <BenefitTile
              icon={<TrendingUp className="w-6 h-6 text-emerald-600" />}
              iconBg="bg-emerald-50"
              value="Ingresos previsibles"
              label="Sabés cuánto vas a facturar antes de que empiece el mes."
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-sm"
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex px-2.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                    Popular
                  </span>
                </div>
              )}
              <div className={`h-1.5 w-full ${pkg.bar}`} />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-950">{pkg.name}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{pkg.tagline}</p>

                <p className="mt-4 text-xl font-extrabold" style={{ color: pkg.color }}>
                  {pkg.price}
                </p>
                <p className="text-xs text-slate-400 -mt-0.5">Estimado MXN según tamaño y zona</p>

                <ul className="mt-5 space-y-2 flex-1">
                  {pkg.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: pkg.color }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl px-6 py-5 max-w-3xl mx-auto">
          <p className="text-sm text-blue-900 leading-relaxed">
            <strong>Traducción para tu Negocio de Car Wash:</strong> cada paquete vendido equivale a ≈ 4 lavadas ya comprometidas con el mismo cliente durante todo el mes. Multiplicá por cuántos paquetes activos tenés en tu zona y ya sabés cuánto trabajo fijo tenés antes de arrancar la semana. Se cobra por lavada aplicada — recibís el neto según tu plan (comisión desde 5% + $5).
          </p>
        </div>
      </div>
    </section>
  );
}

function BenefitTile({
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
      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${iconBg}`}>
        {icon}
      </div>
      <p className="text-lg font-bold text-slate-950 leading-tight">{value}</p>
      <p className="text-sm text-slate-500 leading-relaxed">{label}</p>
    </div>
  );
}

const washTypes = [
  {
    name: "Básico",
    price: "+$0",
    description: "Lavado exterior con jabón y aspirado rápido. Ideal para mantenimiento semanal.",
  },
  {
    name: "Completo",
    price: "+$80",
    description: "Exterior completo, aspirado profundo, cristales, salpicaderas y plásticos.",
  },
  {
    name: "Premium",
    price: "+$150",
    description: "Todo el Completo, más encerado exterior y limpieza detallada de interiores.",
  },
  {
    name: "Detallado",
    price: "+$250",
    description: "Trabajo profundo: interior, encerado, rines, plásticos tratados y motor limpio.",
  },
  {
    name: "Full",
    price: "+$380",
    description: "Detallado extendido con tapicería, motor detallado y aromatizado premium.",
  },
];

const vehicles = [
  { name: "Chico", price: "$150", img: "/vehicle-small.png" },
  { name: "Camioneta (SUV)", price: "$200", img: "/vehicle-suv.png" },
  { name: "Grande", price: "$250", img: "/vehicle-large.png" },
];

function TiposLavado() {
  return (
    <section id="tipos-lavado" className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-semibold mb-5">
            <Droplets className="w-3.5 h-3.5" />
            Tipos de lavado
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Cinco niveles de lavado
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            El precio final se arma sumando el tamaño del auto + el tipo de lavado elegido + servicios extras. Transparente para el cliente.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-base font-semibold text-slate-700 mb-4">Precio base según tamaño del vehículo</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {vehicles.map((v) => (
              <div
                key={v.name}
                className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col items-center gap-3 shadow-sm"
              >
                <img src={v.img} alt={v.name} className="h-20 object-contain" />
                <div className="text-center">
                  <p className="font-semibold text-slate-900">{v.name}</p>
                  <p className="text-2xl font-extrabold text-blue-600 mt-1">{v.price}</p>
                  <p className="text-xs text-slate-400">MXN base</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-700 mb-4">Tipos de lavado (arriba del precio base)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {washTypes.map((w) => (
              <div key={w.name} className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-slate-900">{w.name}</h4>
                  <span className="text-sm font-bold text-violet-600">{w.price}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-violet-50 border border-violet-100 rounded-2xl px-6 py-5 max-w-3xl mx-auto text-center">
          <p className="text-sm text-violet-900 leading-relaxed">
            <strong>Ejemplo:</strong> Camioneta ($200) + Completo (+$80) = <strong>$280 al cliente</strong>. Tu ganancia en plan Estándar (10% + $10) queda alrededor de <strong>$242</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

const addons = [
  { name: "Interior", price: "$100", icon: Car, description: "Aspirado profundo, salpicaderas, plásticos y cristales interiores." },
  { name: "Rines", price: "$50", icon: Circle, description: "Detallado de rines: limpiador especial y protector." },
  { name: "Motor", price: "$70", icon: Sparkles, description: "Limpieza de motor con producto especializado (sin riesgo eléctrico)." },
  { name: "Encerado", price: "$80", icon: Droplets, description: "Cera protectora para carrocería, brillo prolongado." },
  { name: "Tapicería", price: "$120", icon: Sparkles, description: "Champú de tapicería: manchas, olores y limpieza profunda." },
];

function Servicios() {
  return (
    <section id="servicios" className="py-10 sm:py-14 px-4 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Servicios extras
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Servicios adicionales
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Extras que el cliente puede agregar a cualquier lavada. Suben el ticket promedio y hacen que tu Negocio de Car Wash gane más por visita.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {addons.map((a) => (
            <div key={a.name} className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <a.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{a.name}</h4>
                </div>
                <span className="text-sm font-bold text-emerald-700">{a.price}</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-9 sm:py-11 px-4">
      <div className="max-w-3xl mx-auto text-center rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-balance">
          Todo esto llega a tu panel automáticamente.
        </h2>
        <p className="mt-3 text-blue-100 text-sm sm:text-base max-w-lg mx-auto">
          Registrás tu Negocio de Car Wash y activás los paquetes, tipos de lavado y servicios que ofrecés.
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
