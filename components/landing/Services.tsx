"use client";

import { Globe, Palette, Code2, LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: Globe,
        title: "Primera impresión que convence",
        description: "Cuando alguien te busca en Google, lo primero que ve es tu web. Si parece antigua o no existe, la mayoría pasa de largo. Te damos una presencia que transmite confianza desde el primer segundo.",
        tag: "desde 200€",
    },
    {
        icon: Palette,
        title: "Refleja tu negocio, no el de otro",
        description: "Nada de plantillas iguales. Tus colores, tu logo, tus fotos. Que quien entre sepa inmediatamente que es tu negocio.",
        tag: "100% única",
    },
    {
        icon: Code2,
        title: "Te encuentran en Google",
        description: "Tu web cargará rápido y se verá perfecta en el móvil, porque así es como funciona Google hoy. Aparecer en búsquedas locales de Zaragoza incluido.",
        tag: "SEO incluido",
    },
    {
        icon: LifeBuoy,
        title: "Siempre al día, sin esperas",
        description: "¿Cambias el horario? ¿Añades un servicio? Lo gestionamos en el día, sin coste. Tu web siempre estará como debe estar.",
        tag: "cambios gratis",
    },
];

export function Services() {
    return (
        <section id="servicios" className="py-20 md:py-28 bg-zinc-950 border-y border-zinc-800 relative overflow-hidden">
            {/* Degradado naranja decorativo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(254,154,0,0.06) 0%, transparent 60%)" }} />
            <div className="max-w-6xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span
                        className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full mb-4"
                        style={{ color: "#fe9a00", background: "rgba(254,154,0,0.08)", border: "1px solid rgba(254,154,0,0.2)" }}
                    >
                        Qué incluye
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                        Una web que{" "}
                        <span style={{ fontFamily: "var(--font-great-vibes)", color: "#fe9a00", fontSize: "1.15em", fontWeight: 400 }}>trabaja</span>
                        {" "}por ti
                    </h2>
                    <p className="mt-3 text-zinc-400 max-w-md mx-auto text-sm">
                        Sin tecnicismos ni reuniones interminables. Tú nos das la información, nosotros nos encargamos del resto.
                    </p>
                </motion.div>

                {/* Mockups */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-full md:max-w-5xl mx-auto px-2 sm:px-6 mb-20 md:mb-28"
                >
                    <div className="flex flex-row gap-2 md:gap-8 items-center justify-center">
                        <img src="/mockup.png" alt="Diseño web mockup 1" className="w-[55%] md:w-7/12 object-contain scale-[1.02]" />
                        <img src="/mockup1.png" alt="Diseño web mockup 2" className="w-[45%] md:w-5/12 object-contain -ml-4 md:-ml-8" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {services.map((s, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: "rgba(254,154,0,0.1)" }}
                                >
                                    <s.icon className="w-5 h-5" style={{ color: "#fe9a00" }} />
                                </div>
                                <span
                                    className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                                    style={{ color: "#fe9a00", background: "rgba(254,154,0,0.08)", border: "1px solid rgba(254,154,0,0.15)" }}
                                >
                                    {s.tag}
                                </span>
                            </div>
                            <h3 className="text-white font-bold text-sm mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
                                {s.title}
                            </h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">{s.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
