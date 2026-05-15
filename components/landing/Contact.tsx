"use client";

import { useState } from "react";

export function Contact() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem("contact-name") as HTMLInputElement).value,
            business: (form.elements.namedItem("contact-business") as HTMLInputElement).value,
            email: (form.elements.namedItem("contact-email") as HTMLInputElement).value,
            type: (form.elements.namedItem("contact-type") as HTMLSelectElement).value,
            message: (form.elements.namedItem("contact-message") as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error || "Error al enviar.");
            }

            setSent(true);
        } catch (err: any) {
            setError(err.message || "No se pudo enviar el mensaje. Inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contacto" className="py-20 md:py-32 px-6 border-t border-zinc-900/50 relative overflow-hidden">
            {/* Foto del Pilar como fondo ambiental */}
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="/pilar.jpg"
                    alt=""
                    className="w-full h-full object-cover opacity-[0.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/90" />
            </div>

            {/* Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(254,154,0,0.08) 0%, transparent 70%)", filter: "blur(80px)" }}
            />

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-12 reveal">
                    <div
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider uppercase rounded-full border"
                        style={{ color: "#fe9a00", borderColor: "rgba(254,154,0,0.3)", background: "rgba(254,154,0,0.06)" }}
                    >
                        Sin compromiso
                    </div>
                    <h2
                        className="text-3xl md:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: "var(--font-manrope)" }}
                    >
                        ¿Tu negocio merece
                        <br />
                        <span style={{ color: "#fe9a00" }}>mejor imagen online?</span>
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
                        Cuéntanos qué haces. En menos de 24 horas te decimos si podemos ayudarte y cuánto costaría. Sin reuniones, sin rollos.
                    </p>
                </div>

                {sent ? (
                    <div
                        className="text-center p-12 rounded-3xl border"
                        style={{ background: "rgba(254,154,0,0.06)", borderColor: "rgba(254,154,0,0.3)" }}
                    >
                        <div className="text-5xl mb-4">🎉</div>
                        <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
                            ¡Mensaje recibido!
                        </h3>
                        <p className="text-zinc-400 text-sm">
                            Te responderemos en menos de 24 horas. Mientras tanto, si tienes prisa puedes escribirnos por WhatsApp.
                        </p>
                        <a
                            href="https://wa.me/34623064127"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 px-8 py-3 text-sm font-bold text-zinc-950 rounded-full"
                            style={{ background: "#fe9a00" }}
                        >
                            WhatsApp directo →
                        </a>
                    </div>
                ) : (
                    <div className="bg-zinc-900/60 border border-zinc-800 p-8 md:p-12 rounded-3xl backdrop-blur-md">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="contact-name" className="block mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#fe9a00" }}>
                                        Tu nombre *
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        placeholder="Ej: María García"
                                        className="w-full px-5 py-4 text-sm text-white bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 transition-all placeholder:text-zinc-600"
                                        style={{ "--tw-ring-color": "#fe9a00" } as React.CSSProperties}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-business" className="block mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#fe9a00" }}>
                                        Nombre del negocio *
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-business"
                                        placeholder="Ej: Barbería El Rincón"
                                        className="w-full px-5 py-4 text-sm text-white bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 transition-all placeholder:text-zinc-600"
                                        style={{ "--tw-ring-color": "#fe9a00" } as React.CSSProperties}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#fe9a00" }}>
                                    Email de contacto *
                                </label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    placeholder="tu@email.com"
                                    className="w-full px-5 py-4 text-sm text-white bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 transition-all placeholder:text-zinc-600"
                                    style={{ "--tw-ring-color": "#fe9a00" } as React.CSSProperties}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-type" className="block mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#fe9a00" }}>
                                    Tipo de negocio
                                </label>
                                <div className="relative">
                                    <select
                                        id="contact-type"
                                        className="w-full px-5 py-4 text-sm text-white bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 transition-all appearance-none"
                                        style={{ "--tw-ring-color": "#fe9a00" } as React.CSSProperties}
                                    >
                                        <option value="">Selecciona tu sector...</option>
                                        <option value="restauracion">Restauración (bar, restaurante, cafetería...)</option>
                                        <option value="belleza">Belleza y estética (peluquería, barbería, spa...)</option>
                                        <option value="salud">Salud (clínica, fisio, dentista...)</option>
                                        <option value="comercio">Comercio local (tienda, boutique...)</option>
                                        <option value="servicios">Servicios (fontanero, electricista, abogado...)</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="block mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#fe9a00" }}>
                                    ¿Qué necesitas en tu web?
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows={4}
                                    placeholder="Cuéntanos: ¿tienes ya una web? ¿qué secciones quieres? ¿alguna referencia que te guste?..."
                                    className="w-full px-5 py-4 text-sm text-white bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 transition-all resize-none placeholder:text-zinc-600"
                                    style={{ "--tw-ring-color": "#fe9a00" } as React.CSSProperties}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-10 py-5 text-base font-black text-zinc-950 rounded-full transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                                style={{
                                    background: "#fe9a00",
                                    boxShadow: "0 0 30px rgba(254,154,0,0.35)",
                                    fontFamily: "var(--font-manrope)"
                                }}
                            >
                                {loading ? "Enviando..." : "Enviar consulta →"}
                            </button>

                            {error && (
                                <p className="text-center text-sm text-red-400 mt-2">
                                    ⚠ {error}
                                </p>
                            )}
                        </form>

                        <div className="mt-8 pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
                            <div>
                                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Email</p>
                                <a href="mailto:contacto@nelux.es" className="text-sm font-bold text-white hover:text-[#fe9a00] transition-colors">
                                    contacto@nelux.es
                                </a>
                            </div>
                            <div className="w-px h-8 bg-zinc-800 hidden sm:block" />
                            <div>
                                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
                                <a
                                    href="https://wa.me/34623064127"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-bold text-white hover:text-[#fe9a00] transition-colors"
                                >
                                    +34 623 064 127
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
