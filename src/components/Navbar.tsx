import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Building2, ChevronDown, Menu, User, X } from "lucide-react";
import {
  CLIENTE_HOME,
  CLIENTE_PAQUETES,
  CLIENT_REGISTER_URL,
  NEGOCIO_HOME,
  REGISTER_URL,
} from "../lib/links";

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-2 shrink-0">
      <img src="/logo-mark.png" alt="Car Wash Fremi" className="h-8 w-8 rounded-lg object-cover" />
      <span className={`font-bold text-lg leading-none ${dark ? "text-white" : "text-slate-950"}`}>
        Car Wash Fremi
      </span>
    </a>
  );
}

export { Logo };

type PlainLink = { label: string; href: string; route?: undefined; submenu?: undefined };
type RouteLink = { label: string; route: string; href?: undefined; submenu?: undefined };
type DropdownLink = {
  label: string;
  submenu: { label: string; route?: string; href?: string; description?: string }[];
  href?: undefined;
  route?: undefined;
};
type NavItem = PlainLink | RouteLink | DropdownLink;

// El menú de Negocio quedó vacío: "Cómo funciona" ahora tiene su propia
// sección en la home que manda a `/como-funciona`, así que el item del
// toolbar era redundante.
// Los dos menús van vacíos a propósito: el sitio funciona como landing page.
// Cada sección de la home empuja a su página con un CTA propio, así que el
// toolbar sólo lleva logo, "Iniciar sesión" y el switch de audiencia.
//   - "Cómo funciona" → sección propia en la home (`HowItWorks`)
//   - "Paquetes"      → botón "Ver paquetes en detalle" en `/clientes`
//   - "Planes"        → `PlansTeaser` en la home
// Todo lo demás vive en el footer.
const NEGOCIO_ITEMS: NavItem[] = [];
const CLIENTE_ITEMS: NavItem[] = [];

// Rutas que pertenecen al Cliente. Todo lo demás cae en Negocio.
// Al agregar una ruta nueva del Cliente hay que sumarla acá, si no el navbar
// muestra la audiencia equivocada.
const CLIENTE_ROUTES = [CLIENTE_HOME, CLIENTE_PAQUETES];

const ITEMS_POR_AUDIENCIA: Record<Audience, NavItem[]> = {
  negocio: NEGOCIO_ITEMS,
  cliente: CLIENTE_ITEMS,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  // Toda la webpage es del lado Negocio salvo las rutas del Cliente.
  const audience: Audience = CLIENTE_ROUTES.some((r) => location.startsWith(r))
    ? "cliente"
    : "negocio";
  const items = ITEMS_POR_AUDIENCIA[audience];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Logo />

        {items.length > 0 && (
        <nav className="hidden md:flex items-center gap-6">
          {items.map((item) => {
            if (item.submenu) {
              return (
                <Dropdown
                  key={item.label}
                  label={item.label}
                  submenu={item.submenu}
                  isOpen={openDropdown === item.label}
                  onOpen={() => setOpenDropdown(item.label)}
                  onClose={() => setOpenDropdown(null)}
                />
              );
            }
            if (item.route) {
              return (
                <Link
                  key={item.route}
                  href={item.route}
                  className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        )}

        <div className="hidden md:flex items-center gap-3">
          <a
            href={audience === "cliente" ? CLIENT_REGISTER_URL : REGISTER_URL}
            className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
          >
            Registrarse
          </a>
          <AudienceSwitch audience={audience} />
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 flex flex-col gap-4">
          {items.map((item) => {
            if (item.submenu) {
              return (
                <div key={item.label} className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>
                  {item.submenu.map((sub) =>
                    sub.route ? (
                      <Link
                        key={sub.label}
                        href={sub.route}
                        onClick={() => setOpen(false)}
                        className="text-sm font-medium text-slate-700 hover:text-slate-950 py-1"
                      >
                        {sub.label}
                      </Link>
                    ) : (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className="text-sm font-medium text-slate-700 hover:text-slate-950 py-1"
                      >
                        {sub.label}
                      </a>
                    )
                  )}
                </div>
              );
            }
            if (item.route) {
              return (
                <Link
                  key={item.route}
                  href={item.route}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-slate-950 py-1"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-slate-950 py-1"
              >
                {item.label}
              </a>
            );
          })}
          {items.length > 0 && <hr className="border-slate-100" />}
          <AudienceSwitch
            audience={audience}
            full
            onNavigate={() => setOpen(false)}
          />
          <a
            href={audience === "cliente" ? CLIENT_REGISTER_URL : REGISTER_URL}
            className="text-sm font-medium text-slate-600"
          >
            Registrarse
          </a>
        </div>
      )}
    </header>
  );
}

type DropdownProps = {
  label: string;
  submenu: DropdownLink["submenu"];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function Dropdown({ label, submenu, isOpen, onOpen, onClose }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => (isOpen ? onClose() : onOpen())}
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white border border-slate-200 rounded-2xl shadow-lg shadow-slate-200/60 overflow-hidden"
        >
          <div className="p-2">
            {submenu.map((sub) =>
              sub.route ? (
                <Link
                  key={sub.label}
                  href={sub.route}
                  onClick={onClose}
                  className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <p className="text-sm font-semibold text-slate-900">{sub.label}</p>
                  {sub.description && (
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {sub.description}
                    </p>
                  )}
                </Link>
              ) : (
                <a
                  key={sub.label}
                  href={sub.href}
                  onClick={onClose}
                  className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <p className="text-sm font-semibold text-slate-900">{sub.label}</p>
                  {sub.description && (
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {sub.description}
                    </p>
                  )}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

type Audience = "negocio" | "cliente";

/**
 * Switch de audiencia. La webpage cuenta dos historias distintas —
 * la del Negocio de Car Wash (home) y la del Cliente que consume el
 * servicio — y este control dice en cuál estás parado.
 * Por ahora sólo cambia de página: el menú es el mismo para las dos.
 */
function AudienceSwitch({
  audience,
  full = false,
  onNavigate,
}: {
  audience: Audience;
  full?: boolean;
  onNavigate?: () => void;
}) {
  const options: { key: Audience; label: string; route: string; icon: typeof Building2 }[] = [
    { key: "negocio", label: "Negocio", route: NEGOCIO_HOME, icon: Building2 },
    { key: "cliente", label: "Cliente", route: CLIENTE_HOME, icon: User },
  ];

  return (
    <div
      role="tablist"
      aria-label="Elegí tu perfil"
      className={`inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 ${
        full ? "w-full" : ""
      }`}
    >
      {options.map((opt) => {
        const active = audience === opt.key;
        const Icon = opt.icon;
        return (
          <Link
            key={opt.key}
            href={opt.route}
            role="tab"
            aria-selected={active}
            onClick={onNavigate}
            className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              full ? "flex-1" : ""
            } ${
              active
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-950 hover:bg-white"
            }`}
          >
            <Icon className="w-4 h-4" />
            {opt.label}
          </Link>
        );
      })}
    </div>
  );
}
