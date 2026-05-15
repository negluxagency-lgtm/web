"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-900/50">
            {/* Logo: Nelux Webs */}
            <Link href="/" className="flex items-center gap-0 select-none">
                <span
                    className="text-2xl md:text-3xl font-black italic text-white leading-none"
                    style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.03em" }}
                >
                    Nelux
                </span>
                <span
                    className="text-2xl md:text-3xl font-black italic leading-none"
                    style={{ fontFamily: "var(--font-manrope)", color: "#fe9a00", letterSpacing: "-0.03em" }}
                >
                    Webs
                </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {[
                    { name: "Servicios", href: "/#servicios" },
                    { name: "Portfolio", href: "/#portfolio" },
                    { name: "Nosotros", href: "/#nosotros" },
                    { name: "FAQ", href: "/#faq" },
                    { name: "Contacto", href: "/#contacto" },
                ].map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="hidden md:block">
                <Link
                    href="/#contacto"
                    className="px-6 py-2.5 text-xs font-bold text-zinc-950 rounded-full transition-all duration-300"
                    style={{
                        background: "#fe9a00",
                        boxShadow: "0 0 20px rgba(254,154,0,0.25)"
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 35px rgba(254,154,0,0.5)";
                        (e.currentTarget as HTMLAnchorElement).style.background = "#ffaa1a";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(254,154,0,0.25)";
                        (e.currentTarget as HTMLAnchorElement).style.background = "#fe9a00";
                    }}
                >
                    QUIERO MI WEB
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-zinc-100 hover:text-[#fe9a00] transition-colors p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-900/50 p-6 md:hidden flex flex-col gap-6 shadow-2xl">
                    <div className="flex flex-col gap-4">
                        {[
                            { name: "Servicios", href: "/#servicios" },
                            { name: "Portfolio", href: "/#portfolio" },
                            { name: "Nosotros", href: "/#nosotros" },
                            { name: "FAQ", href: "/#faq" },
                            { name: "Contacto", href: "/#contacto" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-semibold text-zinc-100 hover:text-[#fe9a00] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/#contacto"
                        className="w-full text-center px-6 py-3 text-sm font-bold text-zinc-950 rounded-full transition-all duration-300"
                        style={{ background: "#fe9a00" }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        QUIERO MI WEB
                    </Link>
                </div>
            )}
        </nav>
    );
}
