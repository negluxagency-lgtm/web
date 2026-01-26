"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900/50">
            <div className="flex items-center gap-2">
                <Image
                    src="/landing/Logo_nelux_v2.png"
                    alt="Nelux AI Logo"
                    width={90}
                    height={90}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <span className="text-lg md:text-xl font-bold text-white tracking-tight hidden sm:block">Nelux AI</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
                {[
                    { name: "Servicios", href: "#servicios" },
                    { name: "Enfoque", href: "#enfoque" },
                    { name: "Beneficios", href: "#beneficios" },
                    { name: "Contacto", href: "#contacto" },
                ].map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-semibold text-zinc-100 hover:text-amber-500 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="hidden md:block">
                <Link
                    href="#contacto"
                    className="px-6 py-2.5 text-xs font-bold text-zinc-950 bg-amber-500 rounded-full hover:bg-amber-400 transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
                >
                    EMPEZAR AHORA
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-zinc-100 hover:text-amber-500 transition-colors p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-900/50 p-6 md:hidden flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
                    <div className="flex flex-col gap-4">
                        {[
                            { name: "Servicios", href: "#servicios" },
                            { name: "Enfoque", href: "#enfoque" },
                            { name: "Beneficios", href: "#beneficios" },
                            { name: "Contacto", href: "#contacto" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-semibold text-zinc-100 hover:text-amber-500 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="#contacto"
                        className="w-full text-center px-6 py-3 text-sm font-bold text-zinc-950 bg-amber-500 rounded-full hover:bg-amber-400 transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        EMPEZAR AHORA
                    </Link>
                </div>
            )}
        </nav>
    );
}
