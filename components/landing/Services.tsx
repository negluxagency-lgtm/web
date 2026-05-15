"use client";

import { Palette, Code2, Globe, LifeBuoy } from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Primera impresión que convence",
        description: "Cuando alguien te busca en Google, lo primero que ve es tu web. Si parece antigua o no existe, la mayoría pasa de largo. Te damos una presencia que transmite confianza desde el primer segundo.",
        price: "desde 200€"
    },
    {
        icon: Palette,
        title: "Refleja tu negocio, no el de otro",
        description: "Nada de plantillas que parecen iguales. Tus colores, tu logo, tus fotos. Que quien entre sepa inmediatamente que es tu negocio y no el del de al lado.",
        price: "única"
    },
    {
        icon: Code2,
        title: "Te encuentran en Google",
        description: "Que cuando alguien en Zaragoza busque lo que tú ofreces, aparezcas tú. Tu web se verá perfecta en el móvil y cargará rápido, porque así es como funciona Google hoy.",
        price: "visible"
    },
    {
        icon: LifeBuoy,
        title: "Siempre al día, sin esperas",
        description: "¿Cambias el horario? ¿Añades un servicio nuevo? ¿Quieres una foto diferente? Lo gestionamos en el día, sin coste. Tu web siempre estará como debe estar.",
        price: "cambios gratis"
    }
];

export function Services() {
    return (
        <section id="servicios" className="pt-10 pb-20 md:pt-16 md:pb-32 px-6 relative overflow-hidden">
            {/* Glow */}
            <div
                className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(254,154,0,0.05) 0%, transparent 70%)", filter: "blur(80px)" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 reveal">
                    <div
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider uppercase rounded-full border"
                        style={{ color: "#fe9a00", borderColor: "rgba(254,154,0,0.3)", background: "rgba(254,154,0,0.06)" }}
                    >
                        Qué incluye
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                        Una web que trabaja por ti{" "}
                        <br className="hidden sm:block" />
                        <span style={{ color: "#fe9a00" }}>mientras tú atiendes tu negocio</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
                        Sin tecnicismos, sin reuniones interminables. Tú nos das la información y nosotros nos encargamos del resto.
                    </p>

                    {/* Zaragoza Ciudad Logo (Ubicación Primaria) */}
                    <div className="mt-8 flex justify-center">
                        <img 
                            src="/Zaragozaciudad.png" 
                            alt="Zaragoza Ciudad" 
                            className="h-32 md:h-44 w-auto object-contain opacity-70 transition-all duration-500 hover:scale-105 hover:opacity-100" 
                        />
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#fe9a00]/40 backdrop-blur-sm overflow-hidden ${index === 2 ? 'hidden md:block' : 'flex flex-col'}`}
                            style={{ boxShadow: "0 0 0 0 rgba(254,154,0,0)" }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(254,154,0,0.08)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 0 rgba(254,154,0,0)";
                            }}
                        >
                            {/* Icon */}
                            <div
                                className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl border transition-all duration-500 group-hover:border-[#fe9a00]/50"
                                style={{ background: "rgba(254,154,0,0.08)", borderColor: "rgba(254,154,0,0.2)" }}
                            >
                                <service.icon className="w-6 h-6" style={{ color: "#fe9a00" }} />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#fe9a00] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                                {service.description}
                            </p>

                            {/* Tag de precio */}
                            <span
                                className="inline-block text-xs font-bold px-3 py-1 rounded-full"
                                style={{ color: "#fe9a00", background: "rgba(254,154,0,0.1)" }}
                            >
                                {service.price}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
