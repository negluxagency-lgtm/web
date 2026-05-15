"use client";

import { MessageSquare, FileSignature, Laptop, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        icon: MessageSquare,
        num: "01",
        title: "Nos cuentas qué tienes",
        description: "Nos escribes por WhatsApp o rellenas el formulario. Sin tecnicismos, sin reuniones.",
    },
    {
        icon: FileSignature,
        num: "02",
        title: "Precio claro en 24h",
        description: "Recibes un presupuesto concreto. Si te encaja, firmamos y empezamos.",
    },
    {
        icon: Laptop,
        num: "03",
        title: "Nos encargamos de todo",
        description: "En menos de 7 días diseñamos, programamos y te enseñamos el resultado.",
    },
    {
        icon: Rocket,
        num: "04",
        title: "Tu negocio, en marcha",
        description: "Revisas, cambias lo que quieras (gratis) y la publicamos. Ya te encuentran en Google.",
    },
];

export function TechStack() {
    return (
        <section id="proceso" className="py-20 md:py-28 px-6 bg-zinc-900 border-y border-zinc-800 relative overflow-hidden">
            {/* Degradado naranja decorativo */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(254,154,0,0.07) 0%, transparent 70%)" }} />

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
                        Cómo funciona
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                        Más fácil de{" "}
                        <span style={{ fontFamily: "var(--font-great-vibes)", color: "#fe9a00", fontSize: "1.15em", fontWeight: 400 }}>lo que crees</span>
                    </h2>
                    <p className="mt-3 text-zinc-400 max-w-md mx-auto text-sm">
                        Cuatro pasos y tu negocio ya tiene la imagen que merece.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
                        >
                            {/* Número */}
                            <span
                                className="text-5xl font-black leading-none block mb-4"
                                style={{ color: "rgba(254,154,0,0.15)", fontFamily: "var(--font-manrope)" }}
                            >
                                {step.num}
                            </span>
                            {/* Icono */}
                            <step.icon className="w-6 h-6 mb-3" style={{ color: "#fe9a00" }} />
                            {/* Texto */}
                            <h3 className="text-white font-bold text-sm mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
                                {step.title}
                            </h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
