export function Contact() {
    return (
        <section id="contacto" className="py-16 md:py-32 px-6 border-t border-zinc-900/50 relative overflow-hidden">
            {/* Glow de fondo notable para visibilidad */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <h4 className="mb-3 md:mb-4 text-xs md:text-sm font-bold tracking-wider text-amber-500 uppercase">
                        Hablemos sobre tu negocio
                    </h4>
                    <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white sm:text-5xl">
                        ¿Listo para construir tu ventaja competitiva?
                    </h2>
                    <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                        Cuéntanos tu reto técnico. Si puedes imaginarlo, podemos programarlo.
                    </p>
                </div>

                <div className="bg-zinc-900/60 border border-zinc-800 p-6 md:p-16 rounded-3xl backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                    <form className="space-y-8">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block mb-3 text-xs font-bold text-amber-500/90 uppercase tracking-widest">
                                    Nombre *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Tu nombre"
                                    className="w-full px-5 py-4 text-sm text-white bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-zinc-600 shadow-inner"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block mb-3 text-xs font-bold text-amber-500/90 uppercase tracking-widest">
                                    Empresa *
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    placeholder="Nombre de tu empresa"
                                    className="w-full px-5 py-4 text-sm text-white bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-zinc-600 shadow-inner"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-3 text-xs font-bold text-amber-500/90 uppercase tracking-widest">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="nombre@empresa.com"
                                className="w-full px-5 py-4 text-sm text-white bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-zinc-600 shadow-inner"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="budget" className="block mb-3 text-xs font-bold text-amber-500/90 uppercase tracking-widest">
                                Presupuesto estimado
                            </label>
                            <div className="relative">
                                <select
                                    id="budget"
                                    className="w-full px-5 py-4 text-sm text-white bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none shadow-inner"
                                >
                                    <option value="" className="bg-zinc-950">Selecciona un rango...</option>
                                    <option value="low" className="bg-zinc-950">Menos de $1,000</option>
                                    <option value="mid" className="bg-zinc-950">$1,000 - $5,000</option>
                                    <option value="high" className="bg-zinc-950">Más de $5,000</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-3 text-xs font-bold text-amber-500/90 uppercase tracking-widest">
                                Cuéntame más sobre tu idea o problema
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Describe tu proyecto..."
                                className="w-full px-5 py-4 text-sm text-white bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none placeholder:text-zinc-600 shadow-inner"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="px-12 py-5 text-base font-bold text-zinc-950 bg-amber-500 rounded-full hover:bg-amber-400 transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] w-full active:scale-95"
                        >
                            Iniciar Auditoría Técnica
                        </button>
                    </form>

                    <div className="mt-10 pt-10 border-t border-zinc-800/50 text-center">
                        <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-3">O si lo prefieres:</p>
                        <a
                            href="mailto:contacto@nelux.es"
                            className="text-lg font-bold text-white hover:text-amber-500 transition-colors"
                        >
                            contacto@nelux.es
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
