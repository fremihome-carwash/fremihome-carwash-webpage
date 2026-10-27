import { useLocation } from "wouter";
import { ArrowRight, Construction, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Rutas que el footer ya enlaza pero que todavía no tienen página propia.
// Cuando alguna se construya, se le agrega su <Route> en App.tsx y sale de acá.
const titulos: Record<string, string> = {
  "/nosotros": "Nosotros",
  "/trabaja-con-nosotros": "Trabajá con nosotros",
  "/terminos": "Términos y condiciones",
  "/privacidad": "Aviso de privacidad",
  "/cookies": "Política de cookies",
  "/creditos": "Créditos de fotos",
};

/**
 * Catch-all. Sin esto, una ruta sin match en el <Switch> de wouter renderiza
 * una pantalla en blanco — peor que un link roto, porque parece que se cayó
 * el sitio.
 */
export default function ProximamentePage() {
  const [location] = useLocation();
  const titulo = titulos[location] ?? "Página no encontrada";
  const conocida = location in titulos;

  return (
    <div className="min-h-screen bg-white text-slate-950 flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-lg text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 mb-6">
            <Construction className="w-6 h-6 text-amber-600" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            {titulo}
          </h1>
          <p className="mt-4 text-slate-500 leading-relaxed">
            {conocida
              ? "Esta página todavía está en construcción. Mientras tanto, escribinos y te contestamos."
              : "No encontramos la página que buscabas. Puede que haya cambiado de dirección."}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:hola@carwashfremi.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              hola@carwashfremi.com
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-slate-700 font-medium rounded-xl border border-slate-300 hover:bg-slate-50 transition-colors text-sm"
            >
              Volver al inicio
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
