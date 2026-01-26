import React from "react";

const techIcons = [
    { name: "Next.js", src: "/landing/nextjs-icon.webp" },
    { name: "Supabase", src: "/landing/supabase.webp" },
    { name: "OpenAI", src: "/landing/openai_v2.png" },
    { name: "React", src: "/landing/React-icon.svg.png" }
];

export function TechStack() {
    return (
        <section className="py-12 md:py-24 overflow-hidden border-y border-zinc-900/50 relative">
            {/* Sutil glow de fondo */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-zinc-800/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <p className="text-center text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-6 md:mb-12">
                    Construimos con tecnología de vanguardia:
                </p>

                <div className="grid grid-cols-2 md:flex md:flex-wrap justify-items-center justify-center gap-y-8 gap-x-4 md:gap-24 items-center py-4 md:py-0 px-4 md:px-0">
                    {techIcons.map((tech, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-3 md:gap-4 group">
                            <img
                                src={tech.src}
                                alt={tech.name}
                                className="h-8 md:h-12 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            />
                            <span className="text-sm md:text-2xl font-bold text-zinc-400 group-hover:text-white transition-colors cursor-default">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
