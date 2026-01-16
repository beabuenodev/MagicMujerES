"use client";
const basePath = "/MagicMujerES";

import { FaTwitter, FaInstagram, FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated Background Blur */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_50%,rgba(236,72,153,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.08),transparent_50%)]"></div>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={`${basePath}/favicon.ico`} alt="Logo" className="w-8 h-8 rounded-lg" />
            <h2 className="text-xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">MagicMujeres</h2>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-sm hover:text-pink-400 transition-colors">Nosotras</a>
            <a href="#events" className="text-sm hover:text-pink-400 transition-colors">Eventos</a>
            <a href="#gallery" className="text-sm hover:text-pink-400 transition-colors">Galería</a>
            <a href="#join" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-bold hover:shadow-lg transition-all">Únete</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - More Minimal */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <img src={`${basePath}/favicon.ico`} alt="MagicMujeres Logo" className="w-24 h-24 rounded-lg" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 pb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent tracking-wider">
              MagicMujerES
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              La comunidad para mujeres jugadoras de Magic: The Gathering en España. Nos reunimos para jugar, aprender, competir y crecer juntas en un espacio seguro.
            </p>
            <div className="flex gap-4">
              <a href="#join" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105">
                Únete a la Comunidad
              </a>
              <a href="#about" className="px-6 py-3 border-2 border-purple-400 font-bold rounded-lg hover:bg-purple-400/10 transition-all">
                Saber Más
              </a>
            </div>
          </div>
          {/* Right - Character Image - Full height and width */}
          <div className="relative hidden md:flex items-end justify-end -mr-4 sm:-mr-6 lg:-mr-8">
            <img src={`${basePath}/liliana.png`} alt="Character" className="h-full max-h-[600px] w-auto object-contain object-bottom opacity-70" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20 border-y border-slate-700/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-4 pb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent tracking-wide">
            ¿Quiénes Somos?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            MagicMujeres nació para reunir y empoderar a mujeres dentro de la comunidad de Magic: The Gathering. Organizamos encuentros, partidas y eventos —tanto casual como competitivos— para que todas puedan disfrutar sin sentirse juzgadas o excluidas.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Creemos en la fuerza de la comunidad y en el poder transformador del juego. Cada encuentro es una oportunidad para conocer a otras jugadoras, compartir estrategias y construir amistades duraderas.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 pb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent tracking-wide">
            Nuestra Comunidad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-xl bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:border-pink-400/60 transition-all">
              <div className="text-5xl mb-4">🎴</div>
              <h3 className="text-2xl font-bold mb-3">Encuentros Regulares</h3>
              <p className="text-gray-300">Encuentros semanales y mensuales en diferentes ciudades para jugar casualmente y disfrutar del juego.</p>
            </div>
            <div className="backdrop-blur-xl bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:border-pink-400/60 transition-all">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Comunidad Conectada</h3>
              <p className="text-gray-300">Grupos activos en Discord, WhatsApp y redes sociales para conocer a otras chicas, acudir a quedadas y compartir experiencias.</p>
            </div>
            <div className="backdrop-blur-xl bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:border-pink-400/60 transition-all">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3">Torneos y Eventos</h3>
              <p className="text-gray-300">Organizamos eventos competitivos y casuales para que todas puedan demostrar su talento y pasión, con sorteos y premios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20 border-y border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 pb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent tracking-wide">
            Momentos de la Comunidad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg aspect-square">
                <img src={`${basePath}/fotoevento${i}.jpg`} alt={`Momento ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6 pb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent tracking-wide">
            ¿Quieres Unirte?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Síguenos en nuestras redes sociales para enterarte de nuestros próximos eventos, encuentros y novedades de la comunidad.
            Escríbenos a través de cualquiera de nuestras plataformas y estaremos encantadas de darte la bienvenida.
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://twitter.com/MagicMujerES" className="text-5xl hover:text-pink-400 transition-colors"><FaTwitter /></a>
            <a href="https://instagram.com/MagicMujeresp" className="text-5xl hover:text-pink-400 transition-colors"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@magicmujeres" className="text-5xl hover:text-pink-400 transition-colors"><FaTiktok /></a>
            <a href="https://www.youtube.com/@MagicMujerES" className="text-5xl hover:text-pink-400 transition-colors"><FaYoutube /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400 border-t border-slate-700/50">
        <p>© 2026 MagicMujeres — Comunidad de jugadoras de MTG</p>
      </footer>
    </div>
  );
}
