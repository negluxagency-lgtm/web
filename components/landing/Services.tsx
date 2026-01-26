import { Code2, BrainCircuit, Cloud } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Software a Medida",
        description: "Olvida las suscripciones a herramientas que no usas. Desarrollamos paneles de control, CRMs y aplicaciones web diseñadas exclusivamente para tus flujos de trabajo. Tu código, tus reglas."
    },
    {
        icon: BrainCircuit,
        title: "IA Generativa & Agentes",
        description: "No instalamos simples chatbots. Implementamos agentes autónomos capaces de razonar, gestionar bases de datos y ejecutar acciones complejas dentro de tu propio software."
    },
    {
        icon: Cloud,
        title: "Arquitectura Cloud",
        description: "Sistemas seguros, rápidos y escalables. Creamos la base técnica para que tu negocio pueda multiplicar su volumen de operaciones sin romperse."
    }
];

export function Services() {
    return (
        <section id="servicios" className="py-16 md:py-32 px-6 relative overflow-hidden">
            {/* Glow sutil para romper el negro total */}
            <div className="hidden md:block absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="inline-block px-4 py-1.5 mb-8 text-sm font-semibold tracking-wider text-amber-500 uppercase border border-amber-500/30 rounded-full bg-amber-500/5">
                    Nuestros Servicios
                </div>

                <h2 className="mb-20 text-3xl font-bold text-white sm:text-4xl">
                    Soluciones a partir de IA para <br className="hidden sm:block" />
                    hacer crecer tu negocio
                </h2>

                <div className="grid gap-8 md:grid-cols-3 text-left">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group p-10 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl hover:border-amber-500/50 transition-all duration-500 hover:bg-zinc-900/60 hover:-translate-y-2 backdrop-blur-sm`}
                        >
                            <div className="flex items-center justify-center w-14 h-14 mb-6 bg-zinc-950 border border-zinc-800 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-500 rounded-xl">
                                <service.icon className="w-7 h-7 text-amber-500" />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-300 leading-relaxed text-sm group-hover:text-zinc-200 transition-colors">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
