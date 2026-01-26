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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nelux.es'),
  title: {
    template: '%s | Nelux AI',
    default: 'Nelux AI - Ingeniería de Software e Inteligencia Artificial'
  },
  description: 'Desarrollo de Software a medida e Inteligencia Artificial. Transformamos ideas en productos digitales premium con tecnología de vanguardia.',
  keywords: ['desarrollo software', 'inteligencia artificial', 'nextjs', 'supabase', 'agencia digital', 'desarrollo web', 'aplicaciones móviles'],
  authors: [{ name: 'Nelux AI', url: 'https://nelux.es' }],
  creator: 'Nelux AI',
  publisher: 'Nelux AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Nelux AI',
    title: 'Nelux AI - Ingeniería de Software e Inteligencia Artificial',
    description: 'Desarrollo de Software a medida e Inteligencia Artificial. Transformamos ideas en productos digitales premium.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nelux AI - Ingeniería de Software e Inteligencia Artificial',
    description: 'Desarrollo de Software a medida e Inteligencia Artificial.',
  },
  verification: {
    google: 'PENDIENTE_CONFIGURAR', // Añadir código de Google Search Console
  },
  alternates: {
    canonical: 'https://nelux.es',
  },
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
