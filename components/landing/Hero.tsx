import Link from "next/link";
import { MapPin } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 pt-52 md:pt-56 pb-6 text-center overflow-hidden">
            {/* Mapa nocturno de Zaragoza (Fondo atmosférico) */}
            <div
                className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-[400px] md:w-full md:max-w-[800px] aspect-square pointer-events-none select-none animate-float-b opacity-80 md:opacity-30 mix-blend-screen"
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
                        <span className="animate-shimmer">internet</span>
                    </span>
                </h1>

                {/* Subheadline */}
                <p
                    className="animate-fade-in-up max-w-2xl mt-4 text-sm sm:text-lg md:text-xl text-zinc-300 leading-relaxed"
                    style={{ animationDelay: "200ms" }}
                >
                    Cada día hay gente en Zaragoza buscando lo que tú ofreces.{" "}
                    <strong className="text-white">Si no te encuentran online, se van con tu competencia.</strong>{" "}
                    Lo solucionamos en{" "}
                    <strong style={{ color: "#fe9a00" }}>7 días</strong>.
                </p>

                {/* Chips */}
                <div
                    className="animate-fade-in-up flex flex-wrap justify-center gap-3 mt-8"
                    style={{ animationDelay: "320ms" }}
                >
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-zinc-300 bg-zinc-900/70 border border-zinc-800 transition-all duration-300 hover:border-[#fe9a00]/40 hover:text-white">
                        <MapPin size={13} style={{ color: "#fe9a00" }} />
                        Solo para negocios locales de Zaragoza
                    </span>
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
                        Hablamos sin compromiso →
                    </Link>
                    <Link
                        href="#portfolio"
                        className="px-8 py-4 text-xs md:text-base font-semibold text-white rounded-full border border-zinc-700 hover:border-zinc-500 transition-all duration-300 bg-zinc-900/50 hover:scale-105 active:scale-95"
                    >
                        Ver ejemplos reales
                    </Link>
                </div>

                {/* Social proof */}
                <p
                    className="animate-fade-in-up mt-10 text-xs text-zinc-500"
                    style={{ animationDelay: "560ms" }}
                >
                    Sin reuniones eternas · sin tecnicismos · sin sorpresas en el precio
                </p>

                {/* Mockups */}
                <div
                    className="animate-fade-in-up mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-4xl"
                    style={{ animationDelay: "640ms" }}
                >
                    <div className="w-full max-w-[70%] sm:w-auto sm:max-w-none mx-auto">
                        <img
                            src="/mockup1.png"
                            alt="Web en MacBook"
                            className="w-full sm:w-72 md:w-96 h-auto object-contain"
                        />
                    </div>
                    <div className="w-full sm:w-auto">
                        <img
                            src="/mockup.png"
                            alt="Webs en iPhone"
                            className="w-full sm:w-72 md:w-[480px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
