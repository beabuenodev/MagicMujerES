import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magic MujerES — Comunidad de Mujeres en Magic",
  description:
    "Comunidad acogedora de Magic: The Gathering para mujeres. Eventos, calendario y foro.",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-10 w-full backdrop-blur">
          <div className="brand-gradient h-1 w-full" />
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-3 text-lg font-semibold">
              <img src="/logo.jpg" alt="Magic MujerES" className="h-7 w-7 rounded" />
              <span className="brand-text">Magic MujerES</span>
            </a>
            <div className="flex items-center gap-2">
              <a href="/" className="rounded-md px-3 py-2 text-sm hover:underline">Inicio</a>
              <a href="/calendar" className="rounded-md px-3 py-2 text-sm hover:underline">Calendario</a>
              <a href="/forum" className="rounded-md px-3 py-2 text-sm hover:underline">Foro</a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-400">
          © {new Date().getFullYear()} Magic MujerES
        </footer>
      </body>
    </html>
  );
}
