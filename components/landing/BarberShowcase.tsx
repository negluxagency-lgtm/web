import { ExternalLink } from "lucide-react";

export function BarberShowcase() {
    return (
        <section className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">


            <div className="max-w-5xl mx-auto relative z-10">
                <div className="bg-zinc-900/50 border border-amber-500/20 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-20 backdrop-blur-md shadow-2xl flex flex-col items-center text-center">

                    <span className="px-4 py-1.5 mb-6 md:mb-8 text-[10px] md:text-xs font-mono font-bold tracking-widest text-amber-500 uppercase border border-amber-500/30 rounded-full bg-amber-500/5">
                        Caso de Éxito
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight">
                        Nelux Barber: <span className="block mt-2 md:inline text-amber-500 italic font-medium">El estándar en gestión.</span>
                    </h2>

                    <p className="text-zinc-300 text-base md:text-xl leading-relaxed max-w-3xl mb-8 md:mb-12">
                        Nuestra propia plataforma SaaS que gestiona miles de citas mensuales.
                        El ejemplo perfecto de cómo una arquitectura robusta y una IA bien integrada
                        pueden transformar un sector entero.
                    </p>

                    <a
                        href="https://app.nelux.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold text-zinc-950 bg-zinc-100 rounded-full hover:bg-amber-500 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-amber-500/20 active:scale-95"
                    >
                        Probar la App
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
