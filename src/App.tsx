import { Route, Switch } from "wouter";
import ScrollToHash from "./components/ScrollToHash";
import LandingPage from "./pages/LandingPage";
import PlansPage from "./pages/PlansPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ClientesPage from "./pages/ClientesPage";
import ClientePage from "./pages/ClientePage";
import PaquetesPage from "./pages/PaquetesPage";
import ContactoPage from "./pages/ContactoPage";
import ProximamentePage from "./pages/ProximamentePage";
import {
  CLIENTE_HOME,
  CLIENTE_PAQUETES,
  NEGOCIO_CATALOGO,
  NEGOCIO_HOME,
} from "./lib/links";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Switch>
      {/* Lado Negocio de Car Wash */}
      {/* `/` y `/negocio` sirven la misma landing: el dominio pelado tiene
          que funcionar, y la URL con nombre es la que usa el switch. */}
      <Route path="/" component={LandingPage} />
      <Route path={NEGOCIO_HOME} component={LandingPage} />
      <Route path="/planes" component={PlansPage} />
      <Route path="/como-funciona" component={HowItWorksPage} />
      <Route path={NEGOCIO_CATALOGO} component={ClientesPage} />

      {/* Lado Cliente (el que consume el servicio) */}
      <Route path={CLIENTE_HOME} component={ClientePage} />
      <Route path={CLIENTE_PAQUETES} component={PaquetesPage} />

      <Route path="/contacto" component={ContactoPage} />

      {/* Catch-all: sin esto una ruta sin match renderiza pantalla en blanco. */}
      <Route component={ProximamentePage} />
      </Switch>
    </>
  );
}
