import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-zinc-900 pt-6 md:pt-20 pb-6 md:pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-6 md:mb-20">
                    {/* Col 1: Brand & Mission */}
                    <div className="flex flex-col gap-3 md:gap-6">
                        <div className="flex items-center gap-2 md:gap-3">
                            <Image
                                src="/landing/Logo_nelux_v2.png"
                                alt="Nelux AI Logo"
                                width={50}
                                height={50}
                                className="w-6 h-6 md:w-10 md:h-10 object-contain"
                            />
                            <span className="text-base md:text-xl font-bold text-white tracking-tight">Nelux AI</span>
                        </div>
                        <p className="text-[10px] md:text-sm text-zinc-400 leading-relaxed max-w-xs">
                            Ingeniería de software a medida para empresas que lideran el futuro a través de la Inteligencia Artificial.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Col 2: Navigation Links */}
                        <div className="flex flex-col gap-3 md:gap-6">
                            <h4 className="text-zinc-50 font-bold text-[10px] md:text-sm uppercase tracking-wider">Navegación</h4>
                            <ul className="flex flex-col gap-1.5 md:gap-3">
                                <li><Link href="/" className="text-[10px] md:text-sm text-zinc-400 hover:text-amber-500 transition-colors">Inicio</Link></li>
                                <li><a href="https://app.nelux.es" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-sm text-zinc-400 hover:text-amber-500 transition-colors">Nelux Barber</a></li>
                                <li><Link href="#contacto" className="text-[10px] md:text-sm text-zinc-400 hover:text-amber-500 transition-colors">Contacto</Link></li>
                            </ul>
                        </div>

                        {/* Col 3: Legal & Social */}
                        <div className="flex flex-col gap-3 md:gap-6">
                            <h4 className="text-zinc-50 font-bold text-[10px] md:text-sm uppercase tracking-wider">Legal & Social</h4>
                            <ul className="flex flex-col gap-1.5 md:gap-3">
                                <li><Link href="/aviso-legal" className="text-[10px] md:text-sm text-zinc-400 hover:text-amber-500 transition-colors">Aviso Legal</Link></li>
                                <li><Link href="/politica-de-privacidad" className="text-[10px] md:text-sm text-zinc-400 hover:text-amber-500 transition-colors">Privacidad</Link></li>
                            </ul>
                            <div className="flex gap-2 md:gap-4 mt-1">
                                <a href="https://instagram.com/nelux.ai" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-lg md:rounded-xl hover:border-amber-500/50 hover:text-amber-500 transition-all">
                                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                                <a href="https://wa.me/34623064127" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-lg md:rounded-xl hover:border-amber-500/50 hover:text-amber-500 transition-all">
                                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-900/50 pt-4 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
                    <p className="text-[10px] md:text-xs text-zinc-600">
                        © 2026 Nelux AI. Sistemas de Inteligencia Propietaria.
                    </p>
                </div>
            </div>
        </footer>
    );
}
