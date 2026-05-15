"use client";

import { Palette, Code2, Globe, LifeBuoy } from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Web Corporativa",
        description: "Presencia digital profesional para tu negocio. Diseño único, tus colores, tu logo y tus fotos. Completamente personalizada para que destaque entre la competencia.",
        price: "desde 200€"
    },
    {
        icon: Palette,
        title: "100% Personalizada",
        description: "Programamos todo desde cero, nada de plantillas. Tú eliges los colores, el estilo, las secciones. Tu web, a tu imagen.",
        price: "tu imagen"
    },
    {
        icon: Code2,
        title: "Hecha para crecer",
        description: "Webs optimizadas para móvil, rápidas y con buen SEO para que Google te encuentre fácilmente. Modernas y funcionales.",
        price: "SEO incluido"
    },
    {
        icon: LifeBuoy,
        title: "Soporte continuo",
        description: "¿Quieres cambiar algo? Te lo hacemos gratis y rápido. Siempre disponibles para que tu web esté perfecta.",
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
                        Nuestros Servicios
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                        Todo lo que necesita{" "}
                        <br className="hidden sm:block" />
                        <span style={{ color: "#fe9a00" }}>tu negocio en internet</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
                        Webs modernas, rápidas y profesionales a un precio que un negocio local puede permitirse.
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
