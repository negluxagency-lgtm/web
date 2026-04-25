import React from 'react';
import { CheckCircle2, Mail, Gem } from 'lucide-react';
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
          <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Gem className="w-4 h-4 text-zinc-950" />
          </div>
          <span className="font-bold text-lg tracking-tight uppercase">
            Nelux <span className="font-script text-amber-500 text-2xl font-normal lowercase ml-1">Vinted</span> Luxury
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

          <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-6 text-left flex items-start gap-4">
            <Mail className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-zinc-100 mb-2">Revisa tu bandeja de entrada</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                En breves recibirás un correo electrónico en la <strong className="text-zinc-200">dirección que has utilizado para realizar el pago</strong> con el acceso total a la guía.
              </p>
            </div>
          </div>
          
          <p className="text-xs text-zinc-500 mt-8">
            Si no lo encuentras en 5 minutos, recuerda revisar tu carpeta de Spam o Promociones.
          </p>

        </div>

      </div>
    </div>
  );
}
