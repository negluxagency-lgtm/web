import type { Metadata } from "next";
import { Outfit, Great_Vibes } from "next/font/google";
import "./globals.css";

// Configuración de Outfit (Fuente Principal - Tech)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Configuración de Great Vibes (Fuente Script - Elegante)
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nelux AI | Ingeniería de Software",
  description: "Desarrollo de Software a medida e Inteligencia Artificial.",
};

import { ScrollReveal } from "@/components/landing/ScrollReveal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${greatVibes.variable}`}>
      <body className="font-sans antialiased bg-zinc-950 text-zinc-50 selection:bg-amber-500 selection:text-zinc-950 relative">
        <ScrollReveal />

        {/* Global Floated Gradients */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-[20%] right-[-5%] w-[30%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }} />
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
        </div>

        {children}
      </body>
    </html>
  );
}
