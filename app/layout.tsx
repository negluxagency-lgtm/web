import type { Metadata } from "next";
import { Outfit, Great_Vibes } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "@/components/landing/ScrollReveal";

// --- Configuración de Fuentes ---

// Fuente Principal (Tech / SaaS)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Fuente Script (Toque Elegante / Premium)
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

// --- Configuración SEO (Metaetiquetas) ---

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nelux.es';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // 1. Identidad Principal
  title: {
    template: '%s | Nelux AI',
    default: 'Nelux AI - Ingeniería de Software e Inteligencia Artificial',
  },
  description: 'Desarrollo de Software a medida e Inteligencia Artificial. Transformamos ideas en productos digitales premium con tecnología de vanguardia (Next.js, Supabase, AI).',
  keywords: ['desarrollo software', 'inteligencia artificial', 'nextjs', 'supabase', 'agencia digital', 'desarrollo web', 'consultora tecnológica', 'zaragoza', 'automatización'],

  // 2. Autoría
  authors: [{ name: 'Nelux AI', url: BASE_URL }],
  creator: 'Nelux AI',
  publisher: 'Nelux AI',

  // 3. Control de Robots (Técnico)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 4. URL Canónica (Evita contenido duplicado)
  alternates: {
    canonical: '/',
  },

  // 5. Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: 'Nelux AI - Ingeniería de Software e Inteligencia Artificial',
    description: 'Transformamos empresas mediante software a medida e Inteligencia Artificial.',
    url: BASE_URL,
    siteName: 'Nelux AI',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/default-blog.jpg', // Tu imagen "Glassmorphism" subida a /public
        width: 1200,
        height: 630,
        alt: 'Nelux AI - Consultoría de Software Premium',
      },
    ],
  },

  // 6. Twitter / X Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Nelux AI',
    description: 'Ingeniería de Software e IA de alto nivel.',
    images: ['/default-blog.jpg'], // Misma imagen optimizada
    creator: '@nelux_ai', // (Opcional)
  },

  // 7. Verificación (Google Search Console)
  verification: {
    google: 'PENDIENTE_CONFIGURAR', // <--- Pega aquí tu código cuando lo tengas
  },
};

// --- Layout Principal (UI) ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${greatVibes.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-zinc-950 text-zinc-50 selection:bg-amber-500 selection:text-zinc-950 relative overflow-x-hidden">

        {/* Gestor de scroll suave */}
        <ScrollReveal />

        {/* --- Fondos Ambientales (Gradients Flotantes) --- */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
          {/* Azul Tecnológico (Top Left) */}
          <div
            className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          {/* Ámbar Cálido/Premium (Top Right) */}
          <div
            className="absolute top-[20%] right-[-5%] w-[30%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen animate-pulse"
            style={{ animationDuration: '7s' }}
          />
          {/* Púrpura Profundo (Bottom Left) */}
          <div
            className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen animate-pulse"
            style={{ animationDuration: '10s' }}
          />
        </div>

        {/* Contenido de la página */}
        {children}

      </body>
    </html>
  );
}
