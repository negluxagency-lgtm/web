export function About() {
    const team = [
        { name: "Alex", image: "/Alex.png", role: "Desarrollador Frontend" },
        { name: "Joel", image: "/Joel.jpg", role: "Desarrollador Backend" },
        { name: "Pablo", image: "/Pablo.jpg", role: "Diseño & UX" },
    ];

    return (
        <section id="nosotros" className="py-20 md:py-32 px-6 relative overflow-hidden">
            {/* Glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(254,154,0,0.05) 0%, transparent 70%)", filter: "blur(80px)" }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: foto equipo + texto */}
                    <div className="reveal flex flex-col gap-6">
                        {/* Foto del equipo */}
                        <div className="relative rounded-2xl overflow-hidden border border-zinc-800/60 aspect-[16/9]">
                            <img
                                src="/equipo.png"
                                alt="El equipo de Nelux Webs"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <span
                                    className="px-3 py-1 text-xs font-bold rounded-full"
                                    style={{ background: "rgba(254,154,0,0.15)", color: "#fe9a00", border: "1px solid rgba(254,154,0,0.3)" }}
                                >
                                    Alex · Joel · Pablo
                                </span>
                            </div>
                        </div>

                        <div>
                            <div
                                className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase rounded-full border"
                                style={{ color: "#fe9a00", borderColor: "rgba(254,154,0,0.3)", background: "rgba(254,154,0,0.06)" }}
                            >
                                Quiénes somos
                            </div>
                            <h2
                                className="text-3xl md:text-4xl font-black text-white leading-tight mb-4"
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                Jóvenes, cercanos
                                <br />
                                <span style={{ color: "#fe9a00" }}>y sin intermediarios</span>
                            </h2>
                            <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
                                <p>
                                    Si alguna vez has sentido que tu negocio parece menos serio online de lo que es en realidad,{" "}
                                    <strong className="text-white">no es tu culpa</strong>. La mayoría de agencias cobran demasiado o complican algo que debería ser simple.
                                </p>
                                <p>
                                    Somos Alex, Joel y Pablo, tres estudiantes de <strong className="text-white">Ingeniería Informática en Zaragoza</strong>. Hacemos webs para negocios locales porque conocemos la ciudad, somos cercanos y{" "}
                                    <strong style={{ color: "#fe9a00" }}>cobramos lo justo</strong>.
                                </p>
                                <p>
                                    Sin comerciales, sin intermediarios. Hablas directamente con quien va a hacerte la web.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right: 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center text-center p-6 bg-zinc-900/50 border border-zinc-800/60 rounded-2xl hover:border-[#fe9a00]/40 transition-all duration-500 group hover:-translate-y-1"
                            >
                                <div
                                    className="w-24 h-24 md:w-28 md:h-28 rounded-2xl mb-4 border overflow-hidden transition-all duration-300 group-hover:scale-105"
                                    style={{ borderColor: "rgba(254,154,0,0.2)" }}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-500"
                                    />
                                </div>
                                <h3 className="text-base md:text-lg font-black text-white group-hover:text-[#fe9a00] transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>
                                    {member.name}
                                </h3>
                                <p className="text-[10px] md:text-xs text-zinc-500 mt-1 leading-snug">
                                    {member.role}
                                </p>
                            </div>
                        ))}

                        {/* 4th Box: Key Stats */}
                        <div className="flex flex-col justify-center gap-4 p-6 bg-zinc-900/50 border border-zinc-800/60 rounded-2xl hover:border-[#fe9a00]/40 transition-all duration-500">
                            {[
                                { num: "7 días", label: "Entrega" },
                                { num: "200€", label: "Desde" },
                                { num: "100%", label: "Profesional" },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center justify-between gap-2">
                                    <div className="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                                        {stat.label}
                                    </div>
                                    <div className="text-xs md:text-sm font-black" style={{ color: "#fe9a00", fontFamily: "var(--font-manrope)" }}>
                                        {stat.num}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
