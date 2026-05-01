import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Star, ShieldCheck, Zap, ArrowRight, CheckCircle2, TrendingUp, Crown, Check, AlertTriangle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guía Vinted Luxury - Aprende a Revender Lujo',
  description: 'Domina el mercado de reventa de lujo en Vinted. Guías completas paso a paso para todos los niveles.',
  robots: {
    index: false,
    follow: false,
  }
};

const VintedPage = () => {
  const stripeLinkBasic = "https://buy.stripe.com/6oUcN4cxl3pqez507v28805";
  const stripeLinkPremium = "https://buy.stripe.com/7sYcN42WL8JK9eLdYl28806";



  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-zinc-950">

      {/* --- Navegación Minimalista --- */}
      <nav className="border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center shrink-0 font-manrope italic font-extrabold text-2xl md:text-3xl tracking-tighter pr-1">
              <span className="text-white">N</span>
              <span className="text-amber-500">R</span>
            </div>
            <span className="font-manrope italic font-extrabold text-xl md:text-2xl tracking-tight whitespace-nowrap pr-1">
              <span className="text-white">Nelux</span><span className="text-amber-500">Resell</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/tickets"
              className="hidden sm:flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border border-white/10"
            >
              🎫 Tickets
            </Link>
            <a
              href="#pricing"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 px-6 py-2.5 rounded-full font-black transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
            >
              Ver Opciones
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="flex sm:hidden items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 px-4 py-1.5 rounded-full font-black text-xs shadow-[0_0_15px_rgba(245,158,11,0.4)]"
            >
              OPCIONES
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative pt-16 md:pt-28 pb-16 md:pb-40 overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[10%] w-72 h-72 bg-amber-500/20 blur-[100px] rounded-full animate-pulse pointer-events-none mix-blend-screen" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-orange-600/15 blur-[120px] rounded-full animate-pulse pointer-events-none mix-blend-screen" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 md:h-96 bg-amber-400/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-zinc-900/80 border border-amber-500/30 text-amber-400 text-[10px] md:text-sm font-bold mb-8 md:mb-12 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-500 cursor-default">
            <Star className="w-3 h-3 md:w-4 md:h-4 fill-amber-400 animate-pulse" />
            <span className="uppercase tracking-widest">NUEVA GUÍA PREMIUM DISPONIBLE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 md:mb-10 leading-[1.1] tracking-tight">
            <span className="block font-script text-5xl sm:text-6xl md:text-7xl text-amber-500 font-normal mb-1 md:mb-0 transform -rotate-2 opacity-90 drop-shadow-lg">El Secreto para</span>
            Convertir Vinted en una <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">Máquina de hacer Dinero</span>
            <br /> <span className="text-3xl sm:text-4xl md:text-6xl text-zinc-100 mt-2 block">con la Reventa</span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed px-2 md:px-0 font-light">
            Descubre las estrategias reales para construir un perfil sólido o <strong className="text-amber-400 font-semibold">facturar +10.000€/mes</strong> revendiendo artículos de lujo con márgenes extremos.
          </p>

          {/* Mockup del Producto */}
          <div className="relative max-w-md md:max-w-xl mx-auto mb-12 md:mb-16">
            <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full animate-pulse" />
            <Image
              src="/Neluxresell.png"
              alt="Guía Oficial NeluxResell"
              width={800}
              height={800}
              className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(245,158,11,0.3)] hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 md:px-0 relative">
            <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full scale-150 animate-pulse" />
            <a
              href="#pricing"
              className="relative w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-b from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-3xl font-black text-base md:text-xl transition-all duration-300 shadow-[0_15px_40px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(245,158,11,0.7)] transform hover:-translate-y-2 active:translate-y-0"
            >
              Descargar Guía
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-zinc-500 text-[10px] md:text-sm uppercase tracking-widest font-bold">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 shrink-0 text-zinc-400" /> Pago 100% Seguro por Stripe</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 shrink-0 text-zinc-400" /> Entrega Inmediata</span>
          </div>

          {/* Telegram Community Section */}
          <div className="mt-12 md:mt-16 w-full max-w-2xl mx-auto px-4 md:px-0">
            <div className="relative bg-gradient-to-br from-sky-950/60 to-zinc-950/80 border border-sky-500/30 rounded-[2rem] p-6 md:p-10 text-center overflow-hidden backdrop-blur-xl shadow-[0_0_60px_-10px_rgba(14,165,233,0.25)]">
              {/* Glow orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-sky-500/15 blur-[80px] rounded-full pointer-events-none" />

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-500/30 text-sky-300 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold mb-5 md:mb-6 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                100% Gratuito
              </div>

              {/* Icon */}
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto flex items-center justify-center bg-sky-500/15 border-2 border-sky-500/30 rounded-full mb-5 md:mb-6 shadow-[0_0_40px_rgba(14,165,233,0.3)]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-sky-400 md:w-11 md:h-11">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.13 13.4l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.831.958z" />
                </svg>
              </div>

              {/* Headline */}
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight relative z-10 leading-tight">
                Únete a la{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">
                  Comunidad de Nelux Resell Gratis
                </span>
              </h3>
              <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto mb-6 md:mb-8 leading-relaxed relative z-10">
                El grupo gratuito de Telegram donde encontrarás <strong className="text-zinc-200">productos ganadores gratis</strong>, resolvemos tus dudas y conectas con otros revendedores españoles.
              </p>

              {/* Perks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 md:mb-8 relative z-10">
                {[
                  { icon: '🏆', text: 'Productos ganadores gratis' },
                  { icon: '💬', text: 'Dudas resueltas al momento' },
                  { icon: '🇪🇸', text: 'Solo revendedores españoles' },
                  { icon: '🔒', text: 'Grupo privado exclusivo' },
                ].map((perk) => (
                  <div key={perk.text} className="flex items-center gap-2.5 bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-left">
                    <span className="text-xl shrink-0">{perk.icon}</span>
                    <span className="text-zinc-300 text-xs md:text-sm font-medium leading-snug">{perk.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-sky-500/30 blur-2xl rounded-full animate-pulse scale-75" />
                <a
                  id="telegram-join-btn"
                  href="https://t.me/+36b1qS5wRWpjNDg0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-b from-sky-400 to-sky-600 hover:from-sky-300 hover:to-sky-500 text-white px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-xl transition-all duration-300 shadow-[0_15px_40px_-10px_rgba(14,165,233,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(14,165,233,0.7)] transform hover:-translate-y-1 md:hover:-translate-y-2 active:translate-y-0 border border-white/10"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="md:w-6 md:h-6">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.13 13.4l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.831.958z" />
                  </svg>
                  UNIRME AL GRUPO GRATIS
                </a>
                <p className="mt-4 text-zinc-600 text-xs uppercase tracking-widest font-bold">Sin compromisos · Acceso inmediato</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Pricing Section --- */}
      <section id="pricing" className="py-20 md:py-32 relative overflow-hidden scroll-mt-10">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
              Elige tu <span className="font-script text-amber-500 font-normal text-5xl md:text-8xl align-middle ml-2">Nivel</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Desde iniciarte creando una base sólida hasta escalar y profesionalizarte facturando +10k€ al mes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">

            {/* Guía Básica */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm group">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-5 md:mb-6">
                  <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-zinc-800 text-zinc-300 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 border border-white/5">
                    Para Empezar
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Guía Básica</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Los conocimientos suficientes para construir un perfil top en Vinted y empezar a generar ingresos consistentes.
                  </p>
                </div>

                <div className="flex items-baseline gap-2 mb-6 md:mb-8">
                  <span className="text-4xl md:text-5xl font-black text-white">9,99€</span>
                  <span className="text-lg md:text-xl text-zinc-500 line-through font-bold">29€</span>
                </div>

                <div className="space-y-4 mb-8 md:mb-10 flex-1">
                  {[
                    "Cómo empezar a revender en Vinted",
                    "Cómo comprar a precios de fábrica desde China",
                    "Mejores proveedores para cada tipo de producto",
                    "Cómo posicionar tu cuenta en Vinted",
                    "Mejores productos para vender este verano",
                    "Introducción a la reventa de lujo y multicuentas",
                    "Acceso al grupo Privado de Telegram"

                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={stripeLinkBasic}
                  className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 px-5 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all"
                >
                  Comprar Guía Básica
                </a>
              </div>
            </div>

            {/* Guía Premium */}
            <div className="bg-gradient-to-b from-amber-950/40 to-zinc-900 border border-amber-500/30 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(245,158,11,0.2)] transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[50px] rounded-full pointer-events-none" />
              <div className="absolute top-6 right-6">
                <Crown className="w-8 h-8 text-amber-500" />
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-5 md:mb-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <Star className="w-2.5 h-2.5 md:w-3 md:h-3 fill-amber-400" /> Recomendado
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500 mb-2">Guía Premium</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    El sistema profesional para revender lujo, hacer multicuentas y escalar hasta facturar 10k€ al mes.
                  </p>
                </div>

                <div className="flex items-baseline gap-2 mb-6 md:mb-8">
                  <span className="text-4xl md:text-5xl font-black text-white">19,99€</span>
                  <span className="text-lg md:text-xl text-zinc-500 line-through font-bold">39€</span>
                </div>

                <div className="space-y-4 mb-8 md:mb-10 flex-1">

                  {[
                    "Estrategia paso a paso para hacer multicuentas",
                    "Plan de acción exacto si te banean una cuenta",
                    "Cómo vender artículos de lujo (réplicas 1:1)",
                    "Los MEJORES proveedores de lujo ocultos",
                    "Cómo evitar la verificación Vinted",
                    "Escalado profesional: Cómo facturar +10k€/mes",
                    "Acceso al grupo Privado de Telegram"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-amber-400" />
                      </div>
                      <span className="text-zinc-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={stripeLinkPremium}
                  className="relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 px-5 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-base md:text-lg transition-all shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.5)] transform hover:-translate-y-1"
                >
                  OBTENER ACCESO PREMIUM
                  <Zap className="w-4 h-4 md:w-5 md:h-5 fill-zinc-950" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Pain Points Section (El Problema) --- */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Por qué el <span className="text-red-500 font-black">95%</span> de los revendedores <span className="font-script text-zinc-500 font-normal text-4xl sm:text-5xl md:text-6xl align-middle ml-2">fracasa</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto font-light">
              El resell en Vinted ha cambiado. Si sigues usando los métodos tradicionales, estás perdiendo dinero.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-zinc-900/30 border border-red-500/10 p-6 md:p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors" />
              <h3 className="text-xl font-bold mb-3 text-zinc-200">Proveedores Basura</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Encontrar un buen proveedor en China es un infierno: precios altísimos para guiris, calidad pésima que se nota a kilómetros, tiempos de envío absurdos y cero comunicación.
              </p>
            </div>

            <div className="bg-zinc-900/30 border border-red-500/10 p-6 md:p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors" />
              <h3 className="text-xl font-bold mb-3 text-zinc-200">Baneos y Verificaciones</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Si no sabes cómo gestionar múltiples cuentas, evitar el servicio de autenticación o hacer títulos indetectables, tu cuenta caerá y perderás todas tus ventas.
              </p>
            </div>

            <div className="bg-zinc-900/30 border border-red-500/10 p-6 md:p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors" />
              <h3 className="text-xl font-bold mb-3 text-zinc-200">Márgenes Mediocres</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Mientras tú te matas por conseguir un x2 o x3 de beneficio comprando en outlets, los verdaderos profesionales están haciendo un <strong className="text-amber-500">x10</strong> importando lujo indetectable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Validation Proof Section --- */}
      <section className="py-16 md:py-32 relative overflow-hidden bg-zinc-950/40 border-y border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              Evidencia Real
            </div>
            <h2 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Cero Humo. <span className="font-script text-amber-500 font-normal text-5xl md:text-8xl align-middle ml-2">Resultados</span> Reales.
            </h2>
            <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto font-light">
              No te pedimos que nos creas por fe. Aquí tienes los beneficios físicos y la mercancía generada, etiquetado con nuestra marca <strong className="text-zinc-200">NeluxResell</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="group relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] aspect-[4/5] md:aspect-[3/4]">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-80" />
                <Image
                  src={`/${num}.jpeg`}
                  alt={`Prueba de resultados NeluxResell ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="backdrop-blur-xl bg-zinc-950/60 border border-white/10 p-4 rounded-2xl flex items-center justify-between shadow-xl">
                    <span className="font-manrope italic font-extrabold text-white text-sm tracking-tight">Nelux<span className="text-amber-500">Resell</span></span>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Guarantee Section --- */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="bg-zinc-900/60 border border-emerald-500/20 backdrop-blur-xl p-8 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(16,185,129,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-50 pointer-events-none" />

            <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-950 rounded-full mx-auto flex items-center justify-center border-2 border-emerald-500/30 mb-8 shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-emerald-400 group-hover:text-emerald-500 transition-colors" />
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-zinc-100">
              Seguro <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Anti-Fracaso</span>
            </h2>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Confiamos tanto en nuestro sistema que te ofrecemos una garantía blindada. Si compras cualquier guía, sigues los pasos al pie de la letra y <strong className="text-zinc-200">no has ganado dinero en un mes</strong> tras la compra, <span className="text-emerald-400 font-bold">te devolvemos el 100% de tu dinero</span>. Riesgo cero para ti.
            </p>
          </div>
        </div>
      </section>

      {/* --- Floating Sticky CTA (Mobile Only) --- */}
      <div className="fixed bottom-6 left-4 right-4 z-[100] md:hidden pointer-events-none">
        <a
          href="#pricing"
          className="flex items-center justify-between bg-gradient-to-r from-amber-400 to-orange-600 text-zinc-950 px-6 py-4 rounded-2xl font-black shadow-[0_15px_30px_rgba(245,158,11,0.5)] active:scale-95 transition-transform pointer-events-auto border border-white/20 backdrop-blur-md"
        >
          <div className="flex flex-col">
            <span className="text-[10px] uppercase opacity-90 leading-none tracking-widest mb-1">Elige tu Nivel</span>
            <span className="text-xl leading-none">VER GUÍAS</span>
          </div>
          <div className="w-10 h-10 bg-zinc-950/20 rounded-full flex items-center justify-center">
            <ArrowRight className="w-5 h-5" />
          </div>
        </a>
      </div>

      {/* --- Footer --- */}
      <footer className="py-20 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-center shrink-0 font-manrope italic font-bold text-xl tracking-tighter pr-1">
              <span className="text-white">N</span>
              <span className="text-amber-500">R</span>
            </div>
            <span className="font-manrope italic font-bold tracking-tight pr-1">
              <span className="text-white">Nelux</span><span className="text-amber-500">Resell</span>
            </span>
          </div>

          <div className="flex gap-8 text-sm text-zinc-500 font-medium">
            <span>© 2026 NeluxResell</span>
            <a href="#" className="hover:text-amber-500 transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Privacidad</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default VintedPage;
