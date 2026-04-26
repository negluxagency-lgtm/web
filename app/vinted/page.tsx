import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Star, ShieldCheck, Zap, ArrowRight, CheckCircle2, TrendingUp, Gem } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guía Vinted Luxury - Aprende a Revender Lujo',
  description: 'Domina el mercado de reventa de lujo en Vinted. Guía completa paso a paso por solo 9,99€.',
  robots: {
    index: false,
    follow: false,
  }
};

const VintedPage = () => {
  const stripeLink = "https://buy.stripe.com/6oUcN4cxl3pqez507v28805";

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
          <a
            href={stripeLink}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 px-6 py-2.5 rounded-full font-black transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          >
            Comprar Guía
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={stripeLink}
            className="flex sm:hidden items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 px-4 py-1.5 rounded-full font-black text-xs shadow-[0_0_15px_rgba(245,158,11,0.4)]"
          >
            COMPRAR
          </a>
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
            <span className="uppercase tracking-widest">Actualizado Mayo 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6 md:mb-10 leading-[1.15] md:leading-[1.1] tracking-tight">
            <span className="block font-script text-4xl sm:text-5xl md:text-7xl text-amber-500 font-normal mb-2 md:mb-0 transform -rotate-2 opacity-90 drop-shadow-lg">El Secreto para</span>
            Convertir Vinted en una <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">Máquina de hacer Dinero</span>
            <br /> <span className="text-2xl sm:text-3xl md:text-6xl text-zinc-100">con la Reventa</span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed px-2 md:px-0 font-light">
            La hoja de ruta definitiva para encontrar proveedores, hacer pedidos desde China y revender falsificaciones con <strong className="text-zinc-200 font-semibold">márgenes por encima de 1000€</strong> por artículo.
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
              href={stripeLink}
              className="relative w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-b from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 px-8 md:px-10 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-lg md:text-xl transition-all duration-300 shadow-[0_15px_40px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(245,158,11,0.7)] transform hover:-translate-y-2 active:translate-y-0"
            >
              ACCESO INSTANTÁNEO POR 9,99€
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-zinc-500 text-[10px] md:text-sm uppercase tracking-widest font-bold">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 shrink-0 text-zinc-400" /> Pago 100% Seguro por Stripe</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 shrink-0 text-zinc-400" /> Entrega Inmediata</span>
          </div>
        </div>
      </header>

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
              <h3 className="text-xl font-bold mb-3 text-zinc-200">La Verificación de 10€</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Cada vez más compradores activan el servicio de autenticación de Vinted. Si no sabes cómo desactivar esta opción o cómo sortearla, tu artículo será bloqueado y perderás la venta.
              </p>
            </div>

            <div className="bg-zinc-900/30 border border-red-500/10 p-6 md:p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors" />
              <h3 className="text-xl font-bold mb-3 text-zinc-200">Márgenes Mediocres</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Mientras tú te matas por conseguir un x2 o x3 de beneficio comprando en outlets locales, los verdaderos profesionales están haciendo un <strong className="text-amber-500">x10</strong> importando réplicas 1:1 indetectables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features / Content --- */}
      <section className="py-16 md:py-32 relative border-y border-white/5">
        <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">

            <div className="group space-y-5 md:space-y-6 bg-zinc-900/50 hover:bg-zinc-800/80 p-6 md:p-10 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-950/80 rounded-2xl flex items-center justify-center border border-zinc-800/80 group-hover:border-amber-500/50 transition-colors duration-500 relative z-10 shadow-inner">
                <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-amber-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold relative z-10">Escala tu Negocio</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-300">
                Aprende el algoritmo de Vinted para posicionar tus artículos en las primeras búsquedas sin gastar un céntimo en "destacados".
              </p>
            </div>

            <div className="group space-y-5 md:space-y-6 bg-zinc-900/50 hover:bg-zinc-800/80 p-6 md:p-10 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-950/80 rounded-2xl flex items-center justify-center border border-zinc-800/80 group-hover:border-amber-500/50 transition-colors duration-500 relative z-10 shadow-inner">
                <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-amber-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold relative z-10">Réplicas <span className="font-script text-amber-500 font-normal">1:1</span></h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-300">
                Todos los articulos de la guía son los únicos que son falsificaciones 1:1 indetectables para los expertos en autenticación de Vinted.
              </p>
            </div>

            <div className="group space-y-5 md:space-y-6 bg-zinc-900/50 hover:bg-zinc-800/80 p-6 md:p-10 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-950/80 rounded-2xl flex items-center justify-center border border-zinc-800/80 group-hover:border-amber-500/50 transition-colors duration-500 relative z-10 shadow-inner">
                <Star className="w-7 h-7 md:w-8 md:h-8 text-amber-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold relative z-10">Sourcing Directo</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-300">
                Cuáles son los mejores proveedores de réplicas de lujo que envían directamente desde China y cuáles son los que tienen la mejor calidad.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- How it Works Section --- */}
      <section className="py-16 md:py-32 relative overflow-hidden bg-zinc-950/50">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              ¿Cómo funciona el <span className="font-script text-amber-500 font-normal text-5xl md:text-7xl align-middle ml-2 drop-shadow-md">Sistema?</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto font-light">Un proceso comprobado de 4 pasos para generar ingresos recurrentes con márgenes extremos.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8 relative">
            {/* Línea conectora (Solo Desktop) */}
            <div className="hidden md:block absolute top-[4.5rem] left-10 w-[calc(100%-5rem)] h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 z-0" />

            {[
              { num: "01", title: "Acceso Inmediato", desc: "Descargas la guía y obtienes acceso instantáneo a la lista de proveedores privados chinos de réplicas 1:1." },
              { num: "02", title: "Sourcing", desc: "Haces un pedido directamente a las fabricas y recibes el paquete en tu casa en menos de dos semanas." },
              { num: "03", title: "Publicación Segura", desc: "Aplicas nuestros métodos anti-baneo para crear un anuncio totalmente indetectable para el algoritmo." },
              { num: "04", title: "Beneficio Puro", desc: "Vendes el artículo por 300€ - 800€. El cliente alucina con la calidad y tú te quedas todo el margen." }
            ].map((step, i) => (
              <div key={i} className="group relative z-10 flex flex-col items-center text-center bg-zinc-900/60 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/5 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-950 rounded-full flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all duration-500 shadow-[0_0_15px_rgba(245,158,11,0.1)] mb-6">
                  <span className="font-script text-3xl md:text-4xl text-amber-500">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 md:mb-4 text-zinc-100">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Bullet Points Section --- */}
      <section className="py-16 md:py-40 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-6xl font-extrabold mb-8 md:mb-20 text-center tracking-tight">
            ¿Qué encontrarás <span className="font-script text-amber-500 font-normal text-5xl md:text-8xl align-middle ml-2 drop-shadow-md">dentro?</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Lista de Beneficios */}
            <div className="relative space-y-4 md:space-y-5 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-amber-500/5 opacity-50 rounded-[2.5rem] pointer-events-none" />

              {[
                "Cómo saltarse el Servicio de Verificación de Autenticidad de Vinted.",
                "Creación de facturas creíbles para dar 100% de confianza al comprador.",
                "Cómo crear títulos y descripciones indetectables para el algoritmo.",
                "Cómo posicionar tu anuncio en las primeras posiciones orgánicas.",
                "Los 5 mejores proveedores privados de réplicas 1:1 de China.",
                "Cómo hacer pedidos directos y negociar como un local.",
                "Estrategia para blindar tu cuenta y evitar baneos permanentes.",
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-4 md:gap-6 p-4 md:p-5 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300 shadow-inner">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                  </div>
                  <p className="text-base md:text-lg text-zinc-300 font-medium leading-snug group-hover:text-white transition-colors duration-300">{item}</p>
                </div>
              ))}
            </div>

            {/* Visual Social Proof (Paquetes) */}
            <div className="relative group w-full max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full animate-pulse" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] aspect-[4/5] lg:aspect-auto lg:h-[700px]">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10 opacity-90" />
                <Image 
                  src="/Paquetes.jpg" 
                  alt="Paquetes listos para enviar" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 z-20">
                  <div className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-4">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-300">Stock Constante</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Resultados Reales</h3>
                  <p className="text-zinc-400 text-sm md:text-base">Aplica el sistema y convierte tu habitación en un centro logístico.</p>
                </div>
              </div>
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

      {/* --- Guarantee / Insurance Section --- */}
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
              Confiamos tanto en nuestro sistema que te ofrecemos una garantía blindada. Si compras la guía, sigues los pasos al pie de la letra y <strong className="text-zinc-200">no has ganado dinero en un mes</strong> tras la compra, <span className="text-emerald-400 font-bold">te devolvemos el 100% de tu dinero</span>. Riesgo cero para ti.
            </p>
          </div>
        </div>
      </section>

      {/* --- Price & Final CTA --- */}
      <section className="py-16 md:py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-6xl font-script text-amber-500 mb-6 drop-shadow-lg">Oferta de Lanzamiento</h2>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
            <ShieldCheck className="w-4 h-4" />
            Rentable desde tu 1ª venta
          </div>
          <div className="flex items-baseline justify-center gap-3 mb-10">
            <span className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 tracking-tighter drop-shadow-xl">9,99€</span>
            <span className="text-2xl md:text-3xl text-zinc-600 line-through font-bold">49,00€</span>
          </div>

          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-600 blur-xl opacity-50 rounded-full animate-pulse" />
            <a
              href={stripeLink}
              className="relative group w-full flex flex-col items-center gap-2 bg-gradient-to-b from-amber-400 to-orange-600 hover:from-amber-300 hover:to-orange-500 text-zinc-950 px-6 md:px-10 py-6 md:py-8 rounded-[2rem] font-black text-2xl md:text-3xl transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(245,158,11,0.5)] hover:shadow-[0_25px_60px_-10px_rgba(245,158,11,0.7)] transform hover:-translate-y-2 active:translate-y-0 border border-white/20"
            >
              <span>QUIERO LA GUÍA AHORA</span>
              <span className="text-[10px] md:text-sm opacity-80 font-bold uppercase tracking-[0.1em] group-hover:tracking-[0.2em] transition-all duration-500">Acceso instantáneo tras el pago</span>
            </a>
          </div>

          <p className="mt-12 md:mt-16 text-zinc-500 text-sm md:text-base font-medium">
            Un solo pago. Acceso de por vida. <br className="md:hidden" />
            No es una suscripción. <span className="text-zinc-400">Es una inversión en tu futuro negocio.</span>
          </p>
        </div>
      </section>

      {/* --- Floating Sticky CTA (Mobile Only) --- */}
      <div className="fixed bottom-6 left-4 right-4 z-[100] md:hidden pointer-events-none">
        <a
          href={stripeLink}
          className="flex items-center justify-between bg-gradient-to-r from-amber-400 to-orange-600 text-zinc-950 px-6 py-4 rounded-2xl font-black shadow-[0_15px_30px_rgba(245,158,11,0.5)] active:scale-95 transition-transform pointer-events-auto border border-white/20 backdrop-blur-md"
        >
          <div className="flex flex-col">
            <span className="text-[10px] uppercase opacity-90 leading-none tracking-widest mb-1">Acceso Inmediato</span>
            <span className="text-xl leading-none">SOLO 9,99€</span>
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
