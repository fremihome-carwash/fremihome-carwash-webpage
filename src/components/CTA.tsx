import { ArrowRight } from "lucide-react";
import { REGISTER_URL } from "../lib/links";

export default function CTA() {
  return (
    <section className="py-10 sm:py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 px-8 py-9 sm:py-11 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance max-w-2xl mx-auto">
              Sumate a la red de Negocios de Car Wash que crece en Jalisco.
            </h2>
            <p className="mt-5 text-blue-100 text-lg max-w-lg mx-auto leading-relaxed">
              Empezá con el plan Inicial. Escalá a Estándar o Ilimitado cuando crezcas.
            </p>
            <p className="mt-2 text-blue-200 text-sm">
              Estamos activando Negocios de Car Wash en Villa California, Casa Fuerte y Adamar esta semana.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={REGISTER_URL}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Registrar mi Negocio de Car Wash
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
