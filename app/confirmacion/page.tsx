import React from 'react';
import { CheckCircle2, ArrowRight, Gem } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pago Completado | Nelux Vinted Luxury',
  robots: {
    index: false,
    follow: false,
  }
};

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-zinc-950 relative overflow-hidden">

      {/* Animated Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full animate-pulse mix-blend-screen pointer-events-none" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full animate-pulse mix-blend-screen pointer-events-none" style={{ animationDuration: '6s' }} />

      {/* Navegación Minimalista (Solo Logo) */}
      <div className="absolute top-0 w-full p-6 flex justify-center opacity-80">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center shrink-0 font-manrope italic font-extrabold text-2xl tracking-tighter pr-1">
            <span className="text-white">N</span>
            <span className="text-amber-500">R</span>
          </div>
          <span className="font-manrope italic font-extrabold text-xl tracking-tight whitespace-nowrap pr-1">
            <span className="text-white">Nelux</span><span className="text-amber-500">Resell</span>
          </span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 text-center animate-in fade-in zoom-in-95 duration-1000 slide-in-from-bottom-8">

        {/* Main Card */}
        <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Icon Container */}
          <div className="relative mx-auto w-24 h-24 mb-8">
            <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse" />
            <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)] relative z-10">
              <CheckCircle2 className="w-12 h-12 text-emerald-400" />
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            ¡Pago <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Exitoso</span>!
          </h1>

          <h2 className="font-script text-3xl text-amber-500 mb-8 opacity-90 drop-shadow-sm">Tu imperio comienza aquí</h2>

          <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-8 text-center flex flex-col items-center gap-6 mt-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-50" />

            <div className="relative z-10">
              <h3 className="font-bold text-zinc-100 mb-3 text-xl">Tu guía está lista</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mx-auto">
                Haz clic en el siguiente enlace para acceder inmediatamente a todo el contenido y la lista de proveedores. También te la hemos enviado a tu correo electrónico.
              </p>
            </div>

            <a
              href="https://nelux.es/guia_vinted.pdf"
              className="relative z-10 group flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 px-8 py-4 rounded-xl font-black transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(245,158,11,0.6)] border border-amber-300/20"
            >
              ACCEDER A LA GUÍA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
