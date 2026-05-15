"use client";

import { useState, useEffect } from "react";
import { Check, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const checklist = [
    "Web profesional 100% a medida",
    "Lista en 7 días o menos",
    "Optimizada para Google (SEO)",
    "Perfecta en móvil y ordenador",
    "Cambios gratis incluidos",
];

const stats = [
    { num: "+30", label: "Webs entregadas" },
    { num: "6 días", label: "Plazo de entrega promedio" },
    { num: "4.8 ★", label: "Reseñas Google" },
    { num: "2 años", label: "De experiencia" },
];

export function Hero() {
    const [form, setForm] = useState({ name: "", email: "", business: "", type: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    // Contador de urgencia (comienza en 18h 36m 21s)
    const [timeLeft, setTimeLeft] = useState({ h: 18, m: 36, s: 21 });
    useEffect(() => {
        const t = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.s > 0) return { ...prev, s: prev.s - 1 };
                if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
                if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(t);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setSent(true);
            } else {
                const data = await res.json();
                setError(data.error || "Error al enviar. Inténtalo de nuevo.");
            }
        } catch {
            setError("Error de conexión. Inténtalo de nuevo.");
        }
        setLoading(false);
    };

    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-28 pb-16 md:pt-32 overflow-hidden bg-zinc-950">
            {/* Fondo sutil */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(254,154,0,0.05) 0%, transparent 70%)" }} />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* ── Columna izquierda ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-zinc-400 bg-zinc-900 border border-zinc-800">
                            <MapPin className="w-3 h-3" style={{ color: "#fe9a00" }} />
                            Solo para negocios locales de Zaragoza
                        </span>
                    </div>

                    <h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-5"
                        style={{ fontFamily: "var(--font-manrope)" }}
                    >
                        Tu negocio,{" "}
                        <span className="block">
                            visible en{" "}
                            <span style={{ fontFamily: "var(--font-great-vibes)", color: "#fe9a00", fontSize: "1.2em", fontWeight: 400 }}>internet</span>
                        </span>
                    </h1>

                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                        Cada día hay gente en Zaragoza buscando lo que tú ofreces.{" "}
                        <strong className="text-white">Si no te encuentran, se van con tu competencia.</strong>{" "}
                        Lo solucionamos en 7 días desde{" "}
                        <strong style={{ color: "#fe9a00" }}>200€</strong>.
                    </p>

                    {/* Precio + Contador */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60">
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Desde</span>
                            <span className="line-through text-zinc-600 text-base">300€</span>
                            <span className="text-2xl font-black" style={{ color: "#fe9a00", fontFamily: "var(--font-manrope)" }}>200€</span>
                            <span className="text-xs text-zinc-500">IVA incl.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold hidden sm:block">Oferta termina en</span>
                            {[{ v: timeLeft.h, l: "h" }, { v: timeLeft.m, l: "min" }, { v: timeLeft.s, l: "seg" }].map((u, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <span className="w-10 h-10 flex items-center justify-center rounded-lg text-base font-black text-white bg-zinc-800 border border-zinc-700" style={{ fontFamily: "var(--font-manrope)" }}>
                                        {String(u.v).padStart(2, "0")}
                                    </span>
                                    <span className="text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5">{u.l}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <ul className="space-y-3 mb-10">
                        {checklist.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                                <span
                                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ background: "rgba(254,154,0,0.15)", color: "#fe9a00" }}
                                >
                                    <Check className="w-3 h-3" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 pt-8 border-t border-zinc-800/60">
                        {stats.map((s, i) => (
                            <div key={i}>
                                <div className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-manrope)" }}>{s.num}</div>
                                <div className="text-xs text-zinc-500 mt-0.5 leading-tight">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Columna derecha: Formulario ── */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8"
                >
                    {sent ? (
                        <div className="text-center py-10">
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                                style={{ background: "rgba(254,154,0,0.15)" }}
                            >
                                <Check className="w-7 h-7" style={{ color: "#fe9a00" }} />
                            </div>
                            <h3 className="text-white font-black text-xl mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
                                ¡Mensaje enviado!
                            </h3>
                            <p className="text-zinc-400 text-sm">Te respondemos en menos de 24 horas.</p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-6">
                                <span
                                    className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-3"
                                    style={{ background: "rgba(254,154,0,0.12)", color: "#fe9a00" }}
                                >
                                    Presupuesto sin compromiso
                                </span>
                                <h2 className="text-xl font-black text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                                    Pide tu presupuesto gratis
                                </h2>
                                <p className="text-zinc-400 text-sm mt-1">Te respondemos en menos de 24h.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Tu nombre</label>
                                        <input
                                            type="text"
                                            placeholder="Alex García"
                                            required
                                            value={form.name}
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#fe9a00] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Tu negocio</label>
                                        <input
                                            type="text"
                                            placeholder="Peluquería Sol"
                                            value={form.business}
                                            onChange={e => setForm({ ...form, business: e.target.value })}
                                            className="w-full px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#fe9a00] transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Email</label>
                                    <input
                                        type="email"
                                        placeholder="tu@email.com"
                                        required
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#fe9a00] transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Tipo de negocio</label>
                                    <select
                                        value={form.type}
                                        onChange={e => setForm({ ...form, type: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#fe9a00] transition-colors"
                                    >
                                        <option value="">Selecciona tu sector</option>
                                        <option value="hosteleria">Hostelería / Bar / Restaurante</option>
                                        <option value="comercio">Comercio / Tienda</option>
                                        <option value="salud">Salud / Belleza</option>
                                        <option value="servicios">Servicios profesionales</option>
                                        <option value="obra">Construcción / Reformas</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Cuéntanos algo <span className="text-zinc-600">(opcional)</span></label>
                                    <textarea
                                        placeholder="¿Qué necesitas? ¿Tienes web ahora mismo?..."
                                        rows={3}
                                        value={form.message}
                                        onChange={e => setForm({ ...form, message: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#fe9a00] transition-colors resize-none"
                                    />
                                </div>

                                {error && <p className="text-red-400 text-xs">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 rounded-xl font-bold text-sm text-zinc-950 transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
                                    style={{ background: "#fe9a00", fontFamily: "var(--font-manrope)" }}
                                >
                                    {loading ? "Enviando..." : "Recibir presupuesto gratis →"}
                                </button>

                                <p className="text-center text-xs text-zinc-600">Sin compromiso · Respuesta en menos de 24h</p>
                            </form>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
