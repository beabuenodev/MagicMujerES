type Thread = {
  id: string;
  title: string;
  author: string;
  replies: number;
  updatedAt: string;
};

const demoThreads: Thread[] = [
  {
    id: "1",
    title: "¡Preséntate!",
    author: "Admin",
    replies: 12,
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Deck tech: Bant Enchantress",
    author: "Sofia",
    replies: 5,
    updatedAt: new Date().toISOString(),
  },
];

export default function ForumPage() {
  return (
    <section>
      <div className="mb-6 flex items-end justify-between gap-3">
        <div>
          <h1 className="brand-text text-3xl font-semibold">Foro</h1>
          <p className="text-zinc-300">
            Conecta, comparte ideas de mazos, pregunta y planifica partidas.
          </p>
        </div>
        <button className="brand-gradient rounded-md px-4 py-2 text-sm text-white">
          Nuevo hilo
        </button>
      </div>
      <div className="card overflow-hidden rounded-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-black/20 text-zinc-200">
            <tr>
              <th className="px-4 py-3">Tema</th>
              <th className="px-4 py-3">Autora</th>
              <th className="px-4 py-3">Respuestas</th>
              <th className="px-4 py-3">Actualizado</th>
            </tr>
          </thead>
          <tbody>
            {demoThreads.map((t) => (
              <tr key={t.id} className="border-t border-white/10">
                <td className="px-4 py-3 font-medium">
                  <a className="hover:underline" href={`/forum/${t.id}`}>
                    {t.title}
                  </a>
                </td>
                <td className="px-4 py-3">{t.author}</td>
                <td className="px-4 py-3">{t.replies}</td>
                <td className="px-4 py-3">
                  {new Date(t.updatedAt).toLocaleString("es-ES")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


