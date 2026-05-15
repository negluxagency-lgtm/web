import { ExternalLink } from "lucide-react";

const projects = [
    {
        name: "Valians",
        image: "/valians.png",
        category: "Consultoría · Zaragoza",
        description: "Plataforma corporativa para una firma de consultoría estratégica. Enfoque en limpieza visual, profesionalidad y conversión B2B.",
        tags: ["Corporativo", "B2B", "Zaragoza"],
        url: "https://www.valians.es/",
    },
    {
        name: "La Goyosa",
        image: "/goyosa.png",
        category: "Gastronomía · Zaragoza",
        description: "Web para un restaurante y finca de eventos de alto nivel. Experiencia visual inmersiva con gestión de reservas y menús digitales.",
        tags: ["Restauración", "Reservas", "Gourmet"],
        url: "https://lagoyosa.com/",
    },
    {
        name: "Elena Cervera",
        image: "/elena.png",
        category: "Salud · Zaragoza",
        description: "Espacio digital para psicología sanitaria. Diseño empático y sereno que facilita la conexión con el paciente y la gestión de citas.",
        tags: ["Salud", "Psicología", "Citas"],
        url: "https://elenacerverapsicologa.es/",
    },
];

export function BarberShowcase() {
    return (
        <section id="portfolio" className="py-20 md:py-32 px-6 relative overflow-hidden">
            <div
                className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(254,154,0,0.05) 0%, transparent 70%)", filter: "blur(80px)" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 reveal">
                    <div
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider uppercase rounded-full border"
                        style={{ color: "#fe9a00", borderColor: "rgba(254,154,0,0.3)", background: "rgba(254,154,0,0.06)" }}
                    >
                        Nuestro Portfolio
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                        Proyectos que{" "}
                        <span style={{ color: "#fe9a00" }}>ya funcionan</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
                        Webs reales para negocios locales de Zaragoza. Así es como trabajamos.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-8 bg-zinc-900/50 border border-zinc-800/60 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#fe9a00]/40 backdrop-blur-sm block"
                        >
                            {/* Glow en hover */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: "radial-gradient(ellipse at top left, rgba(254,154,0,0.06) 0%, transparent 60%)" }}
                            />

                            <div className="relative z-10">
                                {/* Thumbnail */}
                                <div className="mb-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-video relative group-hover:border-[#fe9a00]/30 transition-colors">
                                    <img 
                                        src={project.image} 
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-[#fe9a00] transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-xs text-zinc-500 mt-1 font-medium">{project.category}</p>
                                    </div>
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        style={{ background: "rgba(254,154,0,0.15)" }}
                                    >
                                        <ExternalLink size={14} style={{ color: "#fe9a00" }} />
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 rounded-full font-medium text-zinc-300 bg-zinc-800/80 border border-zinc-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-zinc-500 text-sm mb-6">¿Tu negocio podría ser el siguiente?</p>
                    <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-zinc-950 rounded-full transition-all duration-300"
                        style={{ background: "#fe9a00", boxShadow: "0 0 25px rgba(254,154,0,0.3)" }}
                    >
                        Empezar ahora →
                    </a>
                </div>
            </div>
        </section>
    );
}
