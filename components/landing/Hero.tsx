import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-start md:justify-center min-h-[auto] md:min-h-screen px-8 md:px-4 pt-28 pb-12 md:pt-20 md:pb-0 text-center overflow-hidden">
            {/* Background Glow Premium Re-integrado */}
            <div className="hidden md:block absolute top-0 transform -translate-x-1/2 left-1/2 w-full max-w-[1000px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="max-w-4xl text-4xl xs:text-5xl font-extrabold tracking-tight md:text-8xl text-white leading-[1.1]">
                    Ingeniería de Software. <br />
                    <span className="text-amber-500">Inteligencia Nativa.</span>
                </h1>
            </div>

            <p className="relative z-10 max-w-2xl mt-8 md:mt-12 text-sm text-zinc-300 sm:text-lg md:text-xl leading-relaxed">
                No somos otra agencia de automatización. Diseñamos y programamos software a medida que integra <strong className="text-zinc-50">Inteligencia Artificial</strong> en el núcleo de tu negocio. Deja de adaptar tu empresa a las herramientas; creamos las herramientas que tu empresa necesita.
            </p>

            <div className="relative z-10 flex flex-col gap-4 mt-10 md:mt-14 sm:flex-row">
                <Link
                    href="#contact"
                    className="px-8 py-4 text-sm md:text-base font-bold text-zinc-950 bg-amber-500 rounded-full hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]"
                >
                    Hablemos de tu Proyecto
                </Link>
            </div>
        </section>
    );
}
