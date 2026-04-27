"use client";

import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Info, Heart, HelpCircle, ChevronDown, Bell, Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const HistorialPage = () => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchText.trim()) {
      window.location.href = `https://www.vinted.es/catalog?search_text=${encodeURIComponent(searchText.trim())}`;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`} style={{ backgroundColor: '#edf2f2' }}>

      {/* ─── TOP NAV ─── */}
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e5e7e5' }}>
        {/* Top bar */}
        <div style={{ borderBottom: '1px solid #e5e7e5' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', height: 60, display: 'flex', alignItems: 'center', gap: 40 }}>

            {/* Logo */}
            <div style={{ flexShrink: 0 }}>
              <Link href="/Roni">
                <Image
                  src="/Nelux_logo.png"
                  alt="Nelux"
                  width={90}
                  height={36}
                  style={{ objectFit: 'contain', cursor: 'pointer' }}
                  priority
                />
              </Link>
            </div>

            {/* Search Bar Combined */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: '#edf2f2', borderRadius: 4, height: 36, border: 'none' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px', border: 'none', background: 'transparent', color: '#374151', fontSize: 14, cursor: 'pointer', height: '100%', borderRight: '1px solid #d1d5db', fontWeight: 400 }}>
                Artículos <svg width="8" height="8" viewBox="0 0 24 24" fill="#6b7280" style={{ marginTop: 2 }}><path d="M0 7.33l12 12 12-12z" /></svg>
              </button>

              <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 12px', gap: 10 }}>
                <Search size={18} color="#6b7280" />
                <input
                  placeholder="Busca artículos"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={handleSearch}
                  style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 14, color: '#111827', outline: 'none' }}
                />
                <div style={{ cursor: 'pointer', color: '#007782', display: 'flex', alignItems: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                </div>
              </div>
            </div>

            {/* Right icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexShrink: 0 }}>
              {/* Messages with badge */}
              <div style={{ position: 'relative', cursor: 'pointer' }}>
                <svg fill="none" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style={{ color: '#6b7280' }}><path fill="currentColor" d="M.998 7.021a3 3 0 0 1 3-3H20a3 3 0 0 1 3 3V17a3 3 0 0 1-3 3H3.998a3 3 0 0 1-3-3V7.02Zm18.96-1.5H4.024l6.86 5.62a1.75 1.75 0 0 0 2.218 0zM2.66 6.343a1.5 1.5 0 0 0-.162.678V17a1.5 1.5 0 0 0 1.5 1.5H20a1.5 1.5 0 0 0 1.5-1.5V7.02c0-.247-.06-.481-.167-.687l-7.28 5.967a3.25 3.25 0 0 1-4.12 0z"></path></svg>
                <span style={{ position: 'absolute', top: -8, right: -10, background: '#d04555', color: '#fff', fontSize: 9, fontWeight: 700, borderRadius: 999, padding: '1px 3px', minWidth: 16, textAlign: 'center' }}>41</span>
              </div>

              {/* Bell */}
              <div style={{ cursor: 'pointer' }}>
                <Bell size={22} color="#6b7280" />
              </div>

              {/* Favorites */}
              <div style={{ cursor: 'pointer' }}>
                <Heart size={22} color="#6b7280" />
              </div>

              {/* Avatar */}
              <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', cursor: 'pointer' }}>
                <Image
                  src="/perfil.png"
                  alt="Perfil"
                  width={32}
                  height={32}
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Vender ahora */}
              <button onClick={() => window.location.href = 'https://www.vinted.es/items/new'} style={{ background: '#007782', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 10px', fontWeight: 400, fontSize: 13, cursor: 'pointer' }}>
                Vender ahora
              </button>

              {/* Help */}
              <div style={{ cursor: 'pointer' }}>
                <HelpCircle size={22} color="#9ca3af" />
              </div>

              {/* Lang */}
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', color: '#4b5563', fontSize: 14, cursor: 'pointer', fontWeight: 400, marginLeft: 12 }}>
                ES <svg width="8" height="8" viewBox="0 0 24 24" fill="#4b5563" style={{ marginTop: 2 }}><path d="M0 7.33l12 12 12-12z" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Category nav */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <nav style={{ display: 'flex', gap: 8, height: 44, alignItems: 'center', paddingLeft: 0 }}>
            {[
              { name: 'Mujer', url: 'https://www.vinted.es/catalog/1904-women' },
              { name: 'Hombre', url: 'https://www.vinted.es/catalog/5-men' },
              { name: 'Moda de diseño', url: 'https://www.vinted.es/?tab=designer' },
              { name: 'Niños', url: 'https://www.vinted.es/catalog/1193-kids' },
              { name: 'Hogar', url: 'https://www.vinted.es/catalog/3474-small-kitchen-appliances' },
              { name: 'Electrónica', url: 'https://www.vinted.es/?tab=electronics' },
              { name: 'Entretenimiento', url: 'https://www.vinted.es/catalog/2312-books' },
              { name: 'Hobbies y coleccionismo', url: 'https://www.vinted.es/catalog/2312-books' },
              { name: 'Deportes', url: 'https://www.vinted.es/catalog/4333-cycling' },
            ].map((cat) => (
              <a key={cat.name} href={cat.url} className="hover:bg-[#e8eded] transition-colors" style={{ textDecoration: 'none', color: '#6b7280', fontSize: 14, fontWeight: 400, padding: '6px 12px', borderRadius: 4 }}>
                {cat.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main style={{ flex: 1, maxWidth: 1200, margin: '0 auto', width: '100%', padding: '32px 16px', display: 'flex', gap: 40 }}>

        {/* ── Sidebar ── */}
        <aside style={{ width: 220, flexShrink: 0 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 32, paddingLeft: 12 }}>Saldo</h2>

          {/* Mi saldo group */}
          <div style={{ marginBottom: 12 }}>
            <Link href="/Roni" style={{ textDecoration: 'none' }}>
              <p className="hover:bg-[#e8eded] transition-colors" style={{ fontSize: 16, color: '#6b7280', fontWeight: 500, marginBottom: 12, padding: '8px 12px', borderRadius: 4, cursor: 'pointer' }}>Mi saldo</p>
            </Link>
          </div>

          {/* Historial Group (Active) */}
          <div style={{ marginBottom: 12 }}>
            <p style={{ fontSize: 16, color: '#111827', fontWeight: 500, marginBottom: 12, paddingLeft: 12 }}>Historial</p>

            {/* Year 2026 */}
            <p style={{ fontSize: 14, color: '#111827', fontWeight: 500, marginBottom: 8, paddingLeft: 32 }}>2026</p>

            {/* Months */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 12 }}>
              <Link href="/historial" style={{ textDecoration: 'none' }}>
                <span className="hover:bg-[#e8eded] transition-colors" style={{ display: 'block', padding: '6px 12px 6px 52px', color: '#111827', fontSize: 13, fontWeight: 600, cursor: 'pointer', borderRadius: 4 }}>marzo</span>
              </Link>
              <Link href="/historial/febrero" style={{ textDecoration: 'none' }}>
                <span className="hover:bg-[#e8eded] transition-colors" style={{ display: 'block', padding: '6px 12px 6px 52px', color: '#6b7280', fontSize: 13, cursor: 'pointer', borderRadius: 4 }}>febrero</span>
              </Link>
              <Link href="/historial/enero" style={{ textDecoration: 'none' }}>
                <span className="hover:bg-[#e8eded] transition-colors" style={{ display: 'block', padding: '6px 12px 6px 52px', color: '#6b7280', fontSize: 13, cursor: 'pointer', borderRadius: 4 }}>enero</span>
              </Link>
            </div>

            {/* Year 2025 */}
            <p style={{ fontSize: 14, color: '#6b7280', fontWeight: 500, marginBottom: 12, paddingLeft: 32 }}>2025</p>
          </div>

          {/* Other links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {['Facturas', 'Ingresos'].map((item) => (
              <a key={item} href="#" className="hover:bg-[#e8eded] transition-colors" style={{ display: 'block', padding: '8px 12px', color: '#6b7280', fontSize: 16, textDecoration: 'none', fontWeight: 500, borderRadius: 4 }}>
                {item}
              </a>
            ))}
          </div>
        </aside>

        {/* ── Main Panel ── */}
        <div style={{ flex: 1 }}>

          {/* Period label outside the card */}
          <div style={{ marginBottom: 12 }}>
            <p style={{ fontSize: 13, color: '#6b7280', margin: 0 }}>marzo de 2026</p>
          </div>

          {/* Card 1: Balance Summary */}
          <div style={{ background: '#fff', borderRadius: 4, padding: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', overflow: 'hidden', marginBottom: 32 }}>
            {/* Rows */}
            <div style={{ padding: '0 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: 15, color: '#374151' }}>Saldo final</span>
                {loading ? (
                  <div className="animate-pulse" style={{ width: 100, height: 20, background: '#f3f4f6', borderRadius: 4 }}></div>
                ) : (
                  <span style={{ fontSize: 15, color: '#374151' }}>8 852,50 €</span>
                )}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0' }}>
                <span style={{ fontSize: 15, color: '#374151' }}>Saldo inicial</span>
                {loading ? (
                  <div className="animate-pulse" style={{ width: 100, height: 20, background: '#f3f4f6', borderRadius: 4 }}></div>
                ) : (
                  <span style={{ fontSize: 15, color: '#374151' }}>1 241,00 €</span>
                )}
              </div>
            </div>
          </div>

          {/* Card 2: Transactions */}
          <div style={{ background: '#fff', borderRadius: 8, padding: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #f3f4f6' }}>
              <p style={{ fontSize: 15, color: '#6b7280', margin: 0 }}>Transacciones</p>
            </div>
            {/* Content */}
            <div style={{ padding: '32px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {loading ? (
                <div className="animate-pulse" style={{ width: 140, height: 24, background: '#f3f4f6', borderRadius: 4 }}></div>
              ) : (
                <p style={{ fontSize: 15, color: '#111827', margin: 0 }}><strong>4 Transacciones</strong></p>
              )}
              <span style={{ fontSize: 14, color: '#007782', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                Ver transacciones <ChevronRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: '#fff', borderTop: '1px solid #e5e7e5', marginTop: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 16px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {/* Column 1 */}
          <div>
            <p style={{ fontWeight: 400, color: '#111827', marginBottom: 12, fontSize: 16 }}>Vinted</p>
            {['¿Quiénes somos?', 'Sostenibilidad', 'Prensa', 'Publicidad'].map((item) => (
              <a key={item} href="#" style={{ display: 'block', color: '#6b7280', fontSize: 13, marginBottom: 8, textDecoration: 'none' }}>{item}</a>
            ))}
          </div>
          {/* Column 2 */}
          <div>
            <p style={{ fontWeight: 400, color: '#111827', marginBottom: 12, fontSize: 16 }}>Descubre</p>
            {['¿Cómo funciona?', 'Verificación del artículo', 'Descarga la app', 'Tablón informativo'].map((item) => (
              <a key={item} href="#" style={{ display: 'block', color: '#6b7280', fontSize: 13, marginBottom: 8, textDecoration: 'none' }}>{item}</a>
            ))}
          </div>
          {/* Column 3 */}
          <div>
            <p style={{ fontWeight: 400, color: '#111827', marginBottom: 12, fontSize: 16 }}>Ayuda</p>
            {['Centro de Asistencia', 'Vender', 'Comprar', 'Confianza y seguridad'].map((item) => (
              <a key={item} href="#" style={{ display: 'block', color: '#6b7280', fontSize: 13, marginBottom: 8, textDecoration: 'none' }}>{item}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HistorialPage;
