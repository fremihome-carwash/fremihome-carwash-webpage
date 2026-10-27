import { Calendar, BarChart3, Star, Clock, Package, Car } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Reservas del día",
    description:
      "Ves qué reservas tenés hoy, cuáles están por aceptar, en curso y completadas.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Panel de ingresos",
    description:
      "Facturación del día, semana o mes con gráfico. Diferenciá cobros directos y por membresía.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Calificaciones de clientes",
    description:
      "Cada cliente califica tu trabajo. Ves tu rating promedio y las últimas reseñas.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Horarios flexibles",
    description:
      "Configurás qué días y horas operás. Bloqueás fechas específicas cuando no querés recibir citas.",
  },
  {
    icon: <Package className="w-5 h-5" />,
    title: "Paquetes y servicios activables",
    description:
      "Activás o desactivás qué paquetes y add-ons trabajás desde tu panel.",
  },
  {
    icon: <Car className="w-5 h-5" />,
    title: "Reservas segmentadas",
    description:
      "Filtrás por status, fecha, cliente, dirección o placas de vehículo.",
  },
];

export default function Features() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Todo lo que necesitás para operar
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            El mismo panel que usan Negocios de Car Wash activos en Jalisco.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md hover:shadow-slate-100 hover:border-slate-300 transition-all">
      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
