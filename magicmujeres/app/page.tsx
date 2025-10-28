"use client";
import { motion } from "framer-motion";

export default function Home() {
  const Button = ({
    href,
    children,
    variant,
  }: {
    href?: string;
    children: React.ReactNode;
    variant?: "outline" | "solid";
  }) => (
    <a
      href={href}
      className={`rounded-md px-5 py-2.5 text-sm font-medium transition duration-200 ${
        variant === "outline"
          ? "border border-white/20 text-white/80 hover:bg-white/10"
          : "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white shadow-md hover:brightness-110"
      }`}
    >
      {children}
    </a>
  );

  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-2xl p-6 bg-gradient-to-b from-zinc-900/70 to-zinc-950/70 border border-white/10 shadow-xl backdrop-blur">
      {children}
    </div>
  );

  return (
    <div className="space-y-24 text-zinc-100">
      {/* Hero */}
      <section className="relative grid items-center gap-10 overflow-hidden pb-20 md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-widest text-zinc-400"
          >
            Magic MujerES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-extrabold leading-tight bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(150,50,255,0.25)]"
          >
            Mujeres en Magic
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-300 max-w-lg"
          >
            Un espacio acogedor para mujeres apasionadas por Magic: The Gathering.
            Organizamos quedadas casuales, commander parties y eventos de
            aprendizaje — en toda España.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-3"
          >
            <Button href="/calendar">Ver calendario</Button>
            <Button href="/forum" variant="outline">
              Visitar foro
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative mx-auto w-full max-w-2xl"
        >
          {/* Ambient glow */}
          <div
            className="absolute -inset-20 -z-10 opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(150,50,255,0.25), transparent 70%)",
            }}
          />
          <img
            src="/front-page-liliana.jpg"
            alt="Liliana"
            className="w-full h-auto rounded-2xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.7)] transform-gpu scale-105"
          />
        </motion.div>
      </section>

      {/* About */}
      <section className="grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Inclusiva",
            text: "Primero mujeres, amigable con el colectivo queer y para principiantes. Ven como eres.",
          },
          {
            title: "Eventos",
            text: "Commander, ligas de sellado, mesas de draft y noches para aprender.",
          },
          {
            title: "Comunidad",
            text: "Comparte deck techs, cambia cartas y encuentra partidas en el foro.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <Card>
              <h3 className="mb-1 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.text}</p>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Highlights */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="mb-2 text-2xl font-semibold">Próximos eventos</h2>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>🌙 Noche de Commander — Viernes 19:00</li>
            <li>🪄 Aprende a jugar — Sábado 14:00</li>
          </ul>
        </Card>

        <Card>
          <h2 className="mb-2 text-2xl font-semibold">Nuevo en el foro</h2>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>💬 ¡Preséntate!</li>
            <li>🧩 Deck tech: Bant Enchantress</li>
          </ul>
        </Card>
      </section>

      {/* Join */}
      <section className="rounded-2xl p-8 bg-gradient-to-br from-fuchsia-900/20 via-purple-950/30 to-zinc-950 border border-fuchsia-800/20 backdrop-blur">
        <h2 className="mb-2 text-3xl font-semibold text-white">Únete a Magic MujerES</h2>
        <p className="mb-5 text-sm text-zinc-300 max-w-2xl">
          Organizamos la mayoría de eventos en Madrid con juego online ocasional.
          Todo el mundo es bienvenido para aprender y jugar, con foco en crear
          espacios seguros y de apoyo para mujeres.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/forum">Crear cuenta</Button>
          <Button href="/calendar" variant="outline">
            Ver eventos
          </Button>
        </div>
      </section>

      {/* Conduct */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Código de conducta</h2>
        <ul className="grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
          {[
            "Sé amable. Tolerancia cero al acoso.",
            "Juega limpio. Sigue reglas y normas de tienda.",
            "Sé inclusiva. Respeta nombres y pronombres.",
            "Ayuda a quien empieza. Todas fuimos nuevas.",
          ].map((rule, i) => (
            <li
              key={i}
              className="rounded-xl p-4 bg-gradient-to-br from-zinc-900/70 to-zinc-950/80 border border-white/10 shadow-inner"
            >
              {rule}
            </li>
          ))}
        </ul>
      </section>

      {/* Newsletter */}
      <section className="rounded-2xl p-6 bg-zinc-950/70 border border-zinc-800 backdrop-blur">
        <h2 className="mb-3 text-2xl font-semibold text-white">Recibe novedades</h2>
        <form className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="tú@ejemplo.com"
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-fuchsia-500 outline-none"
          />
          <Button href="#">Suscribirme</Button>
        </form>
      </section>
    </div>
  );
}
