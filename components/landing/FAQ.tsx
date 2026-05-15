"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
    {
        q: "¿Cuánto me va a costar?",
        a: "Depende de lo que necesites, pero la mayoría de negocios locales encajan entre 200 y 300€. Pago en dos partes: la mitad al empezar y la otra cuando estés conforme con el resultado. Sin letra pequeña ni costes ocultos. El dominio (.es o .com) son 30€ al año aparte."
    },
    {
        q: "¿Esto es complicado para mí?",
        a: "Para nada. Tú solo tienes que contarnos qué haces y qué te gusta. Nosotros nos encargamos de todo lo demás: el diseño, la programación y la publicación. No necesitas saber nada de tecnología ni tomar ningún tipo de decisión técnica."
    },
    {
        q: "¿Qué pasa si luego quiero cambiar algo?",
        a: "Lo hacemos sin coste. Si quieres actualizar el horario, cambiar una foto, añadir un servicio o corregir algo, te lo gestionamos en el día. Tu web siempre estará como la quieres."
    },
    {
        q: "¿Realmente en 7 días?",
        a: "Sí. Nuestro plazo habitual es 5 días laborables y el máximo 7 días naturales. Nada de esperar semanas o meses como suele pasar con las agencias."
    },
    {
        q: "¿Puedo fiarme de vosotros si sois estudiantes?",
        a: "Entendemos la duda. Por eso trabajamos con contrato, cobramos por fases y no publicamos la web hasta que estés conforme. Puedes ver los proyectos reales que hemos hecho y hablar con nosotros antes de comprometerte a nada."
    },
    {
        q: "¿Y si al final no me convence?",
        a: "Trabajamos hasta que estés conforme antes de publicarla. Pero si en algún momento decides no continuar, te devolvemos el 30% del importe ya que solo cobramos por el tiempo invertido."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 md:py-28 px-6 bg-zinc-950 border-t border-zinc-800 relative overflow-hidden">
            {/* Degradado naranja decorativo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(254,154,0,0.07) 0%, transparent 60%)" }} />
            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span
                        className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full mb-4"
                        style={{ color: "#fe9a00", background: "rgba(254,154,0,0.08)", border: "1px solid rgba(254,154,0,0.2)" }}
                    >
                        Tus dudas
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                        Lo que todo el mundo{" "}
                        <span style={{ fontFamily: "var(--font-great-vibes)", color: "#fe9a00", fontSize: "1.15em", fontWeight: 400 }}>pregunta</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900 transition-all duration-300"
                            style={{ borderColor: openIndex === index ? "rgba(254,154,0,0.4)" : "" }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/20 transition-colors"
                            >
                                <span className="font-bold text-white text-sm md:text-base group-hover:text-[#fe9a00] transition-colors">
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className="shrink-0 ml-4 transition-transform duration-300"
                                    style={{ 
                                        color: openIndex === index ? "#fe9a00" : "#52525b",
                                        transform: openIndex === index ? "rotate(180deg)" : "" 
                                    }}
                                    size={20}
                                />
                            </button>
                            
                            <div
                                className="overflow-hidden transition-all duration-300 ease-in-out"
                                style={{ 
                                    maxHeight: openIndex === index ? "300px" : "0",
                                    opacity: openIndex === index ? 1 : 0
                                }}
                            >
                                <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50">
                                    {faq.a}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
