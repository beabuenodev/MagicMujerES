export default function CalendarPage() {
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();

  return (
    <section>
      <h1 className="brand-text mb-2 text-3xl font-semibold">Calendario</h1>
      <p className="mb-6 text-zinc-300">
        Quedadas, ligas, presentaciones y eventos de la comunidad.
      </p>
      <div className="card mb-4 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium">
            {month} {year}
          </h2>
          <div className="text-sm text-zinc-400">Vista previa estática — interactivo más adelante</div>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="font-medium">
              {new Date(2021, 7, i + 1).toLocaleDateString(undefined, { weekday: "short" })}
            </div>
          ))}
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-md border border-white/10 p-2 text-left text-xs"
            >
              <div className="font-medium">{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Próximos</h3>
        <ul className="space-y-2 text-sm">
          <li className="card rounded-md p-3">
            Noche de Commander — Viernes 19:00 @ Tienda local
          </li>
          <li className="card rounded-md p-3">
            Aprende a jugar — Sábado 14:00 @ Centro comunitario
          </li>
        </ul>
      </div>
    </section>
  );
}


