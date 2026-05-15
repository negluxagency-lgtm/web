import { Euro, Clock, RefreshCw, Shield, Smartphone, Star } from "lucide-react";

const benefits = [
    {
        icon: Euro,
        title: "Precio que tiene sentido",
        description: "Desde 200€. La mitad al empezar y la otra mitad cuando estés conforme con el resultado. Sin sorpresas, sin costes ocultos."
    },
    {
        icon: Clock,
        title: "En una semana",
        description: "No esperarás meses. En 7 días tienes tu web publicada y lista para que tus clientes te encuentren."
    },
    {
        icon: RefreshCw,
        title: "Cambios incluidos",
        description: "¿Cambias el horario? ¿Añades un servicio? Te lo actualizamos sin coste adicional. Tu web siempre estará al día."
    },
    {
        icon: Smartphone,
        title: "Se ve bien en el móvil",
        description: "Más del 70% de tus clientes te van a ver desde el teléfono. Tu web se verá perfecta en cualquier pantalla, siempre."
    },
    {
        icon: Shield,
        title: "Todo en regla",
        description: "Somos autónomos. Emitimos factura. Puedes pagarnos con tarjeta, Bizum o transferencia. Sin complicaciones legales."
    },
    {
        icon: Star,
        title: "Solo para tu negocio",
        description: "Nada de plantillas genéricas que parecen iguales. Programamos tu web desde cero para que refleje exactamente tu negocio."
    }
];

export function Benefits() {
    return (
        <section id="precios" className="py-20 md:py-32 px-6 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(254,154,0,0.03) 0%, transparent 70%)", filter: "blur(120px)" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 reveal">
                    <div
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider uppercase rounded-full border"
                        style={{ color: "#fe9a00", borderColor: "rgba(254,154,0,0.3)", background: "rgba(254,154,0,0.06)" }}
                    >
                        Sin excusas
                    </div>
                    <h2
                        className="text-3xl md:text-5xl font-black text-white"
                        style={{ fontFamily: "var(--font-manrope)" }}
                    >
                        Todo claro,
                        <br />
                        <span style={{ color: "#fe9a00" }}>sin letra pequeña</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-lg mx-auto text-sm md:text-base">
                        Lo que ves es lo que hay. Sin costes inesperados, sin procesos complicados, sin esperas.
                    </p>
                </div>

                {/* Grid de beneficios */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="group flex gap-5 p-7 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl hover:border-[#fe9a00]/40 transition-all duration-400 hover:bg-zinc-900/60"
                        >
                            <div
                                className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300"
                                style={{ background: "rgba(254,154,0,0.08)", borderColor: "rgba(254,154,0,0.2)" }}
                            >
                                <item.icon className="w-5 h-5" style={{ color: "#fe9a00" }} />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#fe9a00] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
