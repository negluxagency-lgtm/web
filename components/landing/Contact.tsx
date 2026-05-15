"use client";

import { Check, MessageCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contacto" className="py-20 md:py-28 px-6 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
            {/* Degradado naranja decorativo de fondo */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(254,154,0,0.08) 0%, transparent 70%)" }} />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-8 md:p-14 shadow-2xl relative overflow-hidden"
                >
                    {/* Resplandor interno sutil */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: "radial-gradient(circle at top left, rgba(254,154,0,0.05) 0%, transparent 40%)" }} />

                    <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center relative z-10">
                        
                        {/* Columna Izquierda */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-2 h-2 rounded-full" style={{ background: "#fe9a00" }} />
                                <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                                    Tu negocio en piloto automático
                                </span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
                                ¿Hablamos de tu{" "}
                                <span style={{ fontFamily: "var(--font-great-vibes)", color: "#fe9a00", fontSize: "1.2em", fontWeight: 400 }}>
                                    nueva web?
                                </span>
                            </h2>
                            
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
                                <strong className="text-white">Presupuesto sin compromiso.</strong> Diseño web profesional desde 200€ con SEO, hosting y dominio gratis el 1er año. Lista en 7 días.
                            </p>
                        </div>

                        {/* Columna Derecha */}
                        <div className="flex flex-col gap-4">
                            <button 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-zinc-950 transition-all hover:opacity-90 active:scale-[0.98] shadow-[0_0_20px_rgba(254,154,0,0.3)]"
                                style={{ background: "#fe9a00", fontFamily: "var(--font-manrope)" }}
                            >
                                Pedir mi propuesta gratis
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            <Link 
                                href="https://wa.me/34623064127"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-zinc-950 transition-all hover:opacity-90 active:scale-[0.98]"
                                style={{ background: "#fe9a00", fontFamily: "var(--font-manrope)" }}
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp · 623 064 127
                            </Link>

                            <a 
                                href="tel:+34623064127"
                                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 transition-all active:scale-[0.98]"
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                <Phone className="w-4 h-4 text-zinc-400" />
                                Llamar al 623 064 127
                            </a>

                            <div className="mt-4 space-y-2">
                                <div className="flex items-center gap-2 text-xs text-zinc-500">
                                    <Check className="w-3.5 h-3.5 text-zinc-600" />
                                    Sin compromiso ni letra pequeña
                                </div>
                                <div className="flex items-center gap-2 text-xs text-zinc-500">
                                    <Check className="w-3.5 h-3.5 text-zinc-600" />
                                    Presupuesto cerrado en 24h
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
