"use client";

import Image from "next/image";
import {
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_50%,rgba(236,72,153,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.08),transparent_50%)]"></div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <h2 className="text-xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              MagicMujeres
            </h2>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about">Nosotras</a>
            <a href="#events">Eventos</a>
            <a href="#gallery">Galería</a>
            <a href="#join" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold">
              Únete
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Image
              src="/favicon.ico"
              alt="MagicMujeres Logo"
              width={96}
              height={96}
              className="rounded-lg mb-6"
            />
            <h1 className="text-6xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              MagicMujerES
            </h1>
            <p className="text-gray-300 mt-6">
              La comunidad para mujeres jugadoras de Magic: The Gathering en España.
            </p>
          </div>

          <div className="hidden md:flex justify-end">
            <Image
              src="/liliana.png"
              alt="Character"
              width={500}
              height={600}
              className="opacity-70 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Momentos de la Comunidad
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/fotoevento${i}.jpg`}
                  alt={`Momento ${i}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="py-20 text-center">
        <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          ¿Quieres Unirte?
        </h2>

        <div className="flex gap-6 justify-center text-5xl mt-8">
          <a href="https://twitter.com/MagicMujerES"><FaTwitter /></a>
          <a href="https://instagram.com/MagicMujeresp"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@magicmujeres"><FaTiktok /></a>
          <a href="https://www.youtube.com/@MagicMujerES"><FaYoutube /></a>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-400 border-t border-slate-700/50">
        © 2026 MagicMujeres — Comunidad de jugadoras de MTG
      </footer>
    </div>
  );
}
