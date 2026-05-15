"use client";

import { MessageSquare, FileSignature, Laptop, Rocket } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        step: "01",
        title: "Nos cuentas qué tienes",
        description: "Nos escribes por WhatsApp o rellenas el formulario. Nos explicas tu negocio: qué haces, qué te gusta, qué necesitas. Sin tecnicismos, sin reuniones."
    },
    {
        icon: FileSignature,
        step: "02",
        title: "Precio claro en 24h",
        description: "Recibes un presupuesto concreto, sin letra pequeña. Si te encaja, firmamos y empezamos. Si no, no le debes nada a nadie."
    },
    {
        icon: Laptop,
        step: "03",
        title: "Nos encargamos de todo",
        description: "Tú no tienes que hacer nada más. En menos de 7 días diseñamos, programamos y te enseñamos el resultado para que lo veas antes de publicarlo."
    },
    {
        icon: Rocket,
        step: "04",
        title: "Tu negocio, en marcha",
        description: "Revisas, nos dices si quieres cambiar algo (gratis) y la publicamos. A partir de ese momento ya te pueden encontrar en Google."
    }
];

export function TechStack() {
    return (
        <section className="py-20 md:py-32 px-6 relative overflow-hidden border-y border-zinc-900/50">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none opacity-50"
                style={{ background: "radial-gradient(ellipse, rgba(254,154,0,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider uppercase rounded-full border"
                        style={{ color: "#fe9a00", borderColor: "rgba(254,154,0,0.3)", background: "rgba(254,154,0,0.06)" }}
                    >
                        Cómo funciona
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                        Más fácil de lo que crees
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-lg mx-auto text-sm md:text-base">
                        Sin reuniones eternas ni tecnicismos. Cuatro pasos y tu negocio ya tiene la imagen que merece.
                    </p>
                </div>

                {/* Imagen visual */}
                <div className="relative mb-16 rounded-2xl overflow-hidden border border-zinc-800/60 max-w-3xl mx-auto" style={{ height: "220px" }}>
                    <img
                        src="/programador.png"
                        alt="Desarrollo web en Nelux"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/70 via-transparent to-zinc-950/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
                    {/* Línea conectora desktop */}
                    <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">
                            {/* Número y icono */}
                            <div className="relative z-10 mb-6">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 bg-zinc-950"
                                    style={{
                                        borderColor: "rgba(254,154,0,0.25)",
                                        boxShadow: "0 0 0 rgba(254,154,0,0)"
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 20px rgba(254,154,0,0.2)";
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 rgba(254,154,0,0)";
                                    }}
                                >
                                    <step.icon className="w-7 h-7" style={{ color: "#fe9a00" }} />
                                </div>
                                <span
                                    className="absolute -top-2 -right-2 text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full text-zinc-950"
                                    style={{ background: "#fe9a00" }}
                                >
                                    {step.step.slice(-1)}
                                </span>
                            </div>

                            <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#fe9a00] transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
