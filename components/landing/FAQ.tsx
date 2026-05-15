"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "¿Cuánto cuesta hacer una web con vosotros?",
        a: "Nuestros precios son proporcionales a la complejidad. Una web simple cuesta 200€, una estándar 300€ y una más compleja hasta 500€. El pago se realiza en dos partes: 50% al firmar el contrato y el 50% restante cuando estés conforme con el resultado. Además, hay un coste de 30€ al año para el dominio (.com, .es, etc.)."
    },
    {
        q: "¿Qué pasa si quiero cambiar algo en el futuro?",
        a: "Si quieres hacer cualquier cambio en tu página web, te lo haremos totalmente gratis y rápidamente, a no ser que sea un cambio extremadamente complejo o una remodelación completa de la web."
    },
    {
        q: "¿Cómo hacéis las páginas web?",
        a: "Las hacemos completamente desde cero programando nosotros todo el código. No usamos plantillas genéricas. La web será 100% personalizada con tus colores, logos y fotos, adaptándonos totalmente a lo que nos digas."
    },
    {
        q: "¿Es legal? ¿Podéis emitir factura?",
        a: "Sí, es totalmente legal. Somos autónomos y emitimos factura por nuestros servicios. Puedes pagar mediante tarjeta, Bizum o transferencia bancaria."
    },
    {
        q: "¿Cuánto tardáis en tener la web lista?",
        a: "Solemos tardar unos 5 días laborables. En cualquier caso, el plazo máximo de entrega es de 7 días naturales para que tengas tu negocio online lo antes posible."
    },
    {
        q: "¿Qué pasa si me arrepiento después de empezar?",
        a: "Hacemos la web 100% a tu gusto para que eso no pase, pero si finalmente decides no continuar, te devolveríamos el 30% del dinero, ya que solo cobramos por el tiempo que nos cuesta realizar el trabajo."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 md:py-32 px-6 relative overflow-hidden border-t border-zinc-900/50">
            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-16 reveal">
                    <div
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider uppercase rounded-full border"
                        style={{ color: "#fe9a00", borderColor: "rgba(254,154,0,0.3)", background: "rgba(254,154,0,0.06)" }}
                    >
                        FAQ
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                        Preguntas <span style={{ color: "#fe9a00" }}>Frecuentes</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group border border-zinc-800/60 rounded-2xl overflow-hidden bg-zinc-900/30 backdrop-blur-sm transition-all duration-300"
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
