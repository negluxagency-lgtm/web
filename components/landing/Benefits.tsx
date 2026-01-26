import { ShieldCheck, Cpu, TrendingUp } from "lucide-react";

const benefits = [
    {
        icon: ShieldCheck,
        title: "Control Total",
        description: "Al ser software propietario, no dependes de terceros. Si tu negocio cambia mañana, tu software evoluciona contigo al instante."
    },
    {
        icon: Cpu,
        title: "IA sin Fricción",
        description: "La Inteligencia Artificial no es un añadido; vive dentro de tu sistema. Accede a tus datos en tiempo real para tomar decisiones, no solo para responder dudas."
    },
    {
        icon: TrendingUp,
        title: "Activo Empresarial",
        description: "Dejas de 'alquilar' tecnología para empezar a construir un activo digital que aumenta la valoración de tu empresa."
    }
];

export function Benefits() {
    return (
        <section id="beneficios" className="py-16 md:py-32 px-6 relative overflow-hidden">
            {/* Glow decorativo de fondo */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto text-center relative z-10">

                <h2 className="mb-12 md:mb-24 text-3xl font-bold text-white sm:text-4xl relative inline-block">
                    El Poder de Tener Tu Propia Tecnología
                    <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-amber-500 rounded-full transform scale-x-50 origin-center"></span>
                </h2>

                <div className="grid gap-8 md:gap-12 md:grid-cols-3">
                    {benefits.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="p-6 mb-8 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl shadow-xl border border-zinc-700/50 group-hover:border-amber-500/30 transition-all duration-500">
                                <item.icon className="w-12 h-12 text-amber-500" />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
