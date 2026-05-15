import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-zinc-900 pt-12 md:pt-20 pb-8 md:pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-16">
                    {/* Col 1: Brand & Mission */}
                    <div className="flex flex-col gap-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-0 select-none w-fit">
                            <span
                                className="text-2xl font-black italic text-white leading-none"
                                style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.03em" }}
                            >
                                Nelux
                            </span>
                            <span
                                className="text-2xl font-black italic leading-none"
                                style={{ fontFamily: "var(--font-manrope)", color: "#fe9a00", letterSpacing: "-0.03em" }}
                            >
                                Webs
                            </span>
                        </Link>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                            Webs modernas y profesionales para negocios locales de Zaragoza. Hechas por estudiantes de Ingeniería Informática.
                        </p>
                        <div className="flex gap-3 mt-2">
                            <a
                                href="mailto:contacto@nelux.es"
                                className="w-9 h-9 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#fe9a00]/50 hover:text-[#fe9a00] text-zinc-400 transition-all"
                                aria-label="Email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                            <a
                                href="https://wa.me/34623064127"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#fe9a00]/50 hover:text-[#fe9a00] text-zinc-400 transition-all"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Col 2 & 3 */}
                    <div className="grid grid-cols-2 gap-8 md:col-span-2">
                        {/* Navegación */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Navegación</h4>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { label: "Inicio", href: "/" },
                                    { label: "Servicios", href: "/#servicios" },
                                    { label: "Portfolio", href: "/#portfolio" },
                                    { label: "Nosotros", href: "/#nosotros" },
                                    { label: "FAQ", href: "/#faq" },
                                    { label: "Contacto", href: "/#contacto" },
                                ].map((l) => (
                                    <li key={l.label}>
                                        <Link
                                            href={l.href}
                                            className="text-sm text-zinc-400 hover:text-[#fe9a00] transition-colors"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal & Contacto */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Legal & Contacto</h4>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { label: "Aviso Legal", href: "/aviso-legal" },
                                    { label: "Privacidad", href: "/politica-de-privacidad" },
                                    { label: "Términos", href: "/terminos-y-condiciones" },
                                ].map((l) => (
                                    <li key={l.label}>
                                        <Link
                                            href={l.href}
                                            className="text-sm text-zinc-400 hover:text-[#fe9a00] transition-colors"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-2 flex flex-col gap-2">
                                <a
                                    href="mailto:contacto@nelux.es"
                                    className="text-sm text-zinc-400 hover:text-[#fe9a00] transition-colors"
                                >
                                    contacto@nelux.es
                                </a>
                                <a
                                    href="https://wa.me/34623064127"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-zinc-400 hover:text-[#fe9a00] transition-colors"
                                >
                                    +34 623 064 127
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-zinc-900/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-zinc-600">
                        © 2026 Nelux Webs · Alex, Joel & Pablo · Zaragoza, España
                    </p>

                </div>
            </div>
        </footer>
    );
}
