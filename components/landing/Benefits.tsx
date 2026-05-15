"use client";

import { Euro, Clock, RefreshCw, Shield, Smartphone, Star } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    {
        icon: Euro,
        title: "Precio que tiene sentido",
        description: "Desde 200€. La mitad al empezar, la otra cuando estés conforme. Sin sorpresas.",
    },
    {
        icon: Clock,
        title: "En una semana",
        description: "En 7 días tienes tu web publicada y lista para que tus clientes te encuentren.",
    },
    {
        icon: RefreshCw,
        title: "Cambios incluidos",
        description: "¿Cambias el horario o añades un servicio? Lo actualizamos sin coste adicional.",
    },
    {
        icon: Smartphone,
        title: "Se ve bien en el móvil",
        description: "Más del 70% de tus clientes te verán desde el teléfono. Tu web será perfecta en cualquier pantalla.",
    },

    {
        icon: Star,
        title: "Solo para tu negocio",
        description: "Nada de plantillas genéricas. Programamos desde cero para que refleje exactamente tu negocio.",
    },
];

export function Benefits() {
    return (
        <section id="precios" className="py-20 md:py-28 px-6 bg-zinc-900 relative overflow-hidden border-y border-zinc-800">
            {/* Degradado naranja decorativo */}
            <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(254,154,0,0.06) 0%, transparent 65%)" }} />
            <div className="max-w-6xl mx-auto relative z-10">
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
                        Sin letra pequeña
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                        Todo claro{" "}
                        <span style={{ fontFamily: "var(--font-great-vibes)", color: "#fe9a00", fontSize: "1.15em", fontWeight: 400 }}>desde el principio</span>
                    </h2>
                    <p className="mt-3 text-zinc-400 max-w-md mx-auto text-sm">
                        Lo que ves es lo que hay. Sin costes inesperados ni procesos complicados.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-5">
                    {benefits.map((b, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex gap-4 bg-zinc-950 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors"
                        >
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ background: "rgba(254,154,0,0.1)" }}
                            >
                                <b.icon className="w-5 h-5" style={{ color: "#fe9a00" }} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: "var(--font-manrope)" }}>
                                    {b.title}
                                </h3>
                                <p className="text-zinc-500 text-xs leading-relaxed">{b.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
