const shots = [
  {
    src: "/wash-driveway.jpg",
    alt: "Lavado con hidrolavadora en la entrada de una casa",
    service: "Lavado Completo",
    place: "Villa California",
    note: "A domicilio, sin que el cliente mueva el auto.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/wash-foam-glove.jpg",
    alt: "Espuma sobre el cofre de un auto negro",
    service: "Lavado Premium",
    place: "Casa Fuerte",
    note: "Espuma activa y secado a mano.",
    span: "",
  },
  {
    src: "/wash-detail.jpg",
    alt: "Detallado de carrocería con guante y microfibra",
    service: "Detallado",
    place: "Zapopan",
    note: "Encerado y pulido de carrocería.",
    span: "",
  },
  {
    src: "/wash-sponge-blue.jpg",
    alt: "Esponja con espuma sobre el cofre de un auto azul",
    service: "Lavado Básico",
    place: "Adamar",
    note: "El servicio de entrada, listo en 30 min.",
    span: "",
  },
  {
    src: "/wash-sponge-foam.jpg",
    alt: "Lavado a mano del parabrisas con esponja",
    service: "Full Detail",
    place: "Guadalajara",
    // impar: en 2 columnas quedaría sola, así llena la fila
    span: "col-span-2 lg:col-span-1",
    note: "Interior, exterior, rines y cristales.",
  },
];

export default function WorkGallery() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-slate-300 text-xs font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Trabajos de la red
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Esto es lo que lavan los Negocios que ya están adentro.
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Servicios reales agendados por la plataforma en Jalisco — cada uno
            asignado a un Negocio de Car Wash de la zona.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[210px] gap-3 sm:gap-4">
          {shots.map((s) => (
            <figure
              key={s.src}
              className={`group relative overflow-hidden rounded-2xl ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-300">
                  {s.place}
                </p>
                <p className="text-sm sm:text-base font-bold text-white leading-tight mt-0.5">
                  {s.service}
                </p>
                <p className="hidden sm:block text-xs text-slate-300 mt-1 leading-snug">
                  {s.note}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
