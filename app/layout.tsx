import type { Metadata } from "next";
import { Outfit, Great_Vibes, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "@/components/landing/ScrollReveal";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { PwaRegistrar } from '@/components/PwaRegistrar';
import { localBusinessSchema, faqSchema, websiteSchema } from "@/components/landing/StructuredData";


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

// Fuente Manrope (Para NeluxResell)
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// --- Configuración SEO (Metaetiquetas) ---

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nelux.es';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // 1. Identidad Principal — título con keyword principal + marca
  title: {
    template: '%s | Nelux Webs — Diseño Web Zaragoza',
    default: 'Diseño Web Zaragoza desde 200€ | Nelux Webs — Entrega en 7 días',
  },
  description:
    'Creamos tu página web profesional en Zaragoza desde 200€. Diseño único, SEO local incluido, dominio y hosting gratis el 1º año. Entregamos en 7 días o menos. Sin tecnicismos ni letra pequeña.',
  keywords: [
    // Geolócales primarias
    'diseño web zaragoza',
    'páginas web zaragoza',
    'web para negocios zaragoza',
    'crear web zaragoza',
    'agencia web zaragoza',
    'desarrollador web zaragoza',
    // Long-tail de intención comercial
    'web barata zaragoza',
    'página web desde 200 euros zaragoza',
    'web profesional para autononmos zaragoza',
    'web para peluquería zaragoza',
    'web para bar restaurante zaragoza',
    'web para comercio local zaragoza',
    // Generales de servicio
    'hacer web profesional',
    'web con seo incluido',
    'web móvil rápida profesional',
    'landing page negocio local',
    // Marca
    'nelux webs',
    'nelux',
  ],

  // 2. Autoría
  authors: [{ name: 'Nelux Webs', url: BASE_URL }],
  creator: 'Nelux Webs',
  publisher: 'Nelux Webs',

  // 3. Control de Robots
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

  // 4. URL Canónica
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
    },
  },

  // 5. Open Graph
  openGraph: {
    title: 'Diseño Web en Zaragoza desde 200€ — Entregamos en 7 días | Nelux Webs',
    description:
      'Tu negocio necesita una web que genere clientes. Diseño único, SEO local, dominio y hosting incluidos el 1º año. Hablamos directamente contigo, sin intermediarios.',
    url: BASE_URL,
    siteName: 'Nelux Webs',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-nelux.jpg',
        width: 1200,
        height: 630,
        alt: 'Nelux Webs — Diseño Web Profesional en Zaragoza desde 200€',
      },
    ],
  },

  // 6. Twitter / X Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Web profesional en Zaragoza desde 200€ | Nelux Webs',
    description:
      'Diseñamos tu página web en 7 días. SEO local, diseño a medida, soporte incluido. Sin letra pequeña.',
    images: ['/og-nelux.jpg'],
    creator: '@neluxwebs',
    site: '@neluxwebs',
  },

  // 7. Verificación Google Search Console
  verification: {
    google: 'PENDIENTE_CONFIGURAR',
  },

  // 8. Favicon e Iconos
  icons: {
    icon: [
      { url: '/favicon.ico', rel: 'shortcut icon' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
      { url: '/Logo_ios.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // 9. PWA Manifest
  manifest: '/site.webmanifest',

  // 10. Apple PWA
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Nelux Webs',
    startupImage: '/Logo_ios.png',
  },
};

// --- Layout Principal (UI) ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${greatVibes.variable} ${manrope.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-black text-zinc-50 overflow-x-hidden">

        {/* ScrollReveal */}
        <ScrollReveal />

        {children}

        {/* Google Analytics 4 (Optimizado para Core Web Vitals) */}
        <GoogleAnalytics gaId="G-JPTSPNH3EW" />

        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "270252c5c5b04d86b2f8e002727f27b6"}'
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}
