export function About() {
    return (
        <section id="enfoque" className="py-16 md:py-32 text-center relative overflow-hidden">
            {/* Glows de fondo para profundidad */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-zinc-800/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-8 md:gap-16 mt-8 md:mt-12 relative z-10 max-w-5xl mx-auto px-4">
                {[
                    { number: "3+", label: "Años de\nExperiencia" },
                    { number: "50+", label: "Sistemas\nDesplegados" },
                    { number: "20+", label: "Sectores\nTransformados" },
                    { number: "100%", label: "Código\nPropietario" },
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center min-w-[120px]">
                        <span className="text-4xl xs:text-5xl font-extrabold text-amber-500 sm:text-6xl drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                            {stat.number}
                        </span>
                        <span className="mt-2 md:mt-4 text-[10px] xs:text-xs font-bold uppercase tracking-widest text-zinc-400 whitespace-pre-line leading-relaxed">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-16 md:mt-32 px-6 relative z-10">
                <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 text-xs md:text-sm font-semibold tracking-wider text-amber-500 uppercase border border-amber-500/30 rounded-full bg-amber-500/5">
                    Más allá de la Automatización Convencional
                </div>

                <p className="max-w-4xl mx-auto mt-4 md:mt-6 text-sm md:text-lg text-zinc-300 leading-relaxed text-justify sm:text-center">
                    Las soluciones &apos;no-code&apos; tienen un límite. Tu crecimiento no debería tenerlo. En Nelux AI, fusionamos la robustez del desarrollo de software tradicional con la potencia de los Modelos de Lenguaje (LLMs). Ya no se trata solo de conectar aplicaciones; construimos ecosistemas digitales propios. Desde CRMs personalizados hasta plataformas SaaS completas, desarrollamos la infraestructura tecnológica que te diferencia de tu competencia, con la IA trabajando en cada línea de código.
                </p>

                <a
                    href="#contact"
                    className="inline-block px-8 py-4 mt-8 md:mt-12 text-base font-bold text-zinc-950 bg-amber-500 rounded-full hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]"
                >
                    Hablemos de tu Proyecto
                </a>
            </div>
        </section>
    );
}
