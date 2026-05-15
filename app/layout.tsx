import type { Metadata } from "next";
import { Outfit, Great_Vibes, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "@/components/landing/ScrollReveal";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { PwaRegistrar } from '@/components/PwaRegistrar';


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

  // 1. Identidad Principal
  title: {
    template: '%s | Nelux Webs',
    default: 'Nelux Webs - Páginas web para negocios locales de Zaragoza',
  },
  description: 'Hacemos webs modernas y profesionales para negocios locales de Zaragoza desde 200€. Entrega en 7 días, diseño personalizado y soporte incluido. Estudiantes de Ingeniería Informática de la UNIZAR.',
  keywords: ['páginas web zaragoza', 'diseño web zaragoza', 'web barata zaragoza', 'web negocio local zaragoza', 'crear página web zaragoza', 'desarrollo web estudiantes', 'web profesional zaragoza', 'nelux webs'],

  // 2. Autoría
  authors: [{ name: 'Nelux Webs', url: BASE_URL }],
  creator: 'Nelux Webs',
  publisher: 'Nelux Webs',

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
    title: 'Nelux Webs - Páginas web para negocios locales de Zaragoza',
    description: 'Webs modernas desde 200€ para negocios locales de Zaragoza. Diseño personalizado, entrega en 7 días y soporte continuo.',
    url: BASE_URL,
    siteName: 'Nelux Webs',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/default-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Nelux Webs - Páginas web para negocios locales de Zaragoza',
      },
    ],
  },

  // 6. Twitter / X Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Nelux Webs',
    description: 'Webs profesionales para negocios locales de Zaragoza desde 200€.',
    images: ['/default-blog.jpg'],
    creator: '@neluxwebs',
  },

  // 7. Verificación (Google Search Console)
  verification: {
    google: 'PENDIENTE_CONFIGURAR', // <--- Pega aquí tu código cuando lo tengas
  },

  // 8. Favicon e Iconos
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "shortcut icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },

  // 9. PWA Manifest
  manifest: '/site.webmanifest',

  // 10. Apple meta para PWA
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Nelux Webs',
    startupImage: '/Logo_ios.png',
  },

  // 11. Icono para pantalla de inicio iOS (apple-touch-icon)
  icons: {
    apple: [
      { url: '/Logo_ios.png', sizes: '180x180', type: 'image/png' },
    ],
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
