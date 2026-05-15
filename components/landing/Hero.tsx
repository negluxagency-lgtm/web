import Link from "next/link";
import { MapPin, GraduationCap, Zap } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 pt-24 pb-6 text-center overflow-hidden">
            {/* Mapa nocturno de Zaragoza (Fondo atmosférico) */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square pointer-events-none select-none animate-float-b opacity-80 mix-blend-screen"
                style={{ zIndex: 0 }}
            >
                <img
                    src="/Zaragoza.png"
                    alt="Zaragoza Night Lights"
                    className="w-full h-full object-contain filter blur-[2px]"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-5xl">

                {/* Headline principal */}
                <h1
                    className="animate-fade-in-up text-5xl xs:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6"
                    style={{ fontFamily: "var(--font-manrope)", animationDelay: "80ms" }}
                >
                    Tu negocio,{" "}
                    <span className="block">
                        visible en{" "}
                        <span className="animate-shimmer">internet.</span>
                    </span>
                </h1>

                {/* Subheadline */}
                <p
                    className="animate-fade-in-up max-w-2xl mt-4 text-sm sm:text-lg md:text-xl text-zinc-300 leading-relaxed"
                    style={{ animationDelay: "200ms" }}
                >
                    Hacemos webs{" "}
                    <strong className="text-white">modernas y profesionales</strong>{" "}
                    para negocios locales de{" "}
                    <strong className="text-white">Zaragoza</strong>. Desde{" "}
                    <strong style={{ color: "#fe9a00" }}>200€</strong>, entrega en 7 días.
                </p>

                {/* Chips */}
                <div
                    className="animate-fade-in-up flex flex-wrap justify-center gap-3 mt-8"
                    style={{ animationDelay: "320ms" }}
                >
                    {[
                        { icon: MapPin, text: "Solo Zaragoza" },
                        { icon: Zap, text: "Entrega en 7 días" },
                        { icon: GraduationCap, text: "Precio de estudiante" },
                    ].map(({ icon: Icon, text }) => (
                        <span
                            key={text}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-zinc-300 bg-zinc-900/70 border border-zinc-800 transition-all duration-300 hover:border-[#fe9a00]/40 hover:text-white"
                        >
                            <Icon size={13} style={{ color: "#fe9a00" }} />
                            {text}
                        </span>
                    ))}
                </div>

                {/* CTAs */}
                <div
                    className="animate-fade-in-up flex flex-col sm:flex-row gap-4 mt-12"
                    style={{ animationDelay: "440ms" }}
                >
                    <Link
                        href="#contacto"
                        className="px-8 py-4 text-xs md:text-base font-bold text-zinc-950 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95"
                        style={{ background: "#fe9a00", boxShadow: "0 0 30px rgba(254,154,0,0.35)" }}
                    >
                        Quiero mi web →
                    </Link>
                    <Link
                        href="#portfolio"
                        className="px-8 py-4 text-xs md:text-base font-semibold text-white rounded-full border border-zinc-700 hover:border-zinc-500 transition-all duration-300 bg-zinc-900/50 hover:scale-105 active:scale-95"
                    >
                        Ver proyectos
                    </Link>
                </div>

                {/* Social proof */}
                <p
                    className="animate-fade-in-up mt-10 text-xs text-zinc-500"
                    style={{ animationDelay: "560ms" }}
                >
                    ✓ Todo legal · autónomos · factura incluida · pago a mitades
                </p>
            </div>
        </section>
    );
}
