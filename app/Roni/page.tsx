"use client";

import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Info, Heart, HelpCircle, ChevronDown, Bell, Search } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const RoniPage = () => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchText.trim()) {
      window.location.href = `https://www.vinted.es/catalog?search_text=${encodeURIComponent(searchText.trim())}`;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
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
            <p style={{ fontSize: 16, color: '#111827', fontWeight: 500, marginBottom: 12, paddingLeft: 12 }}>Mi saldo</p>

            {/* Saldo — active */}
            <a href="#" className="hover:bg-[#e8eded] transition-colors" style={{ display: 'block', padding: '8px 12px 8px 32px', color: '#111827', fontWeight: 600, fontSize: 14, textDecoration: 'none', marginBottom: 4, borderRadius: 4 }}>
              Saldo
            </a>

            {/* Ajustes */}
            <a href="#" className="hover:bg-[#e8eded] transition-colors" style={{ display: 'block', padding: '8px 12px 8px 32px', color: '#6b7280', fontSize: 14, textDecoration: 'none', marginBottom: 4, borderRadius: 4 }}>
              Ajustes
            </a>
          </div>

          {/* Other links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Link href="/historial" style={{ textDecoration: 'none' }}>
              <span className="hover:bg-[#e8eded] transition-colors" style={{ display: 'block', padding: '8px 12px', color: '#6b7280', fontSize: 16, cursor: 'pointer', fontWeight: 500, borderRadius: 4 }}>
                Historial
              </span>
            </Link>
            {['Facturas', 'Ingresos'].map((item) => (
              <a key={item} href="#" className="hover:bg-[#e8eded] transition-colors" style={{ display: 'block', padding: '8px 12px', color: '#6b7280', fontSize: 16, textDecoration: 'none', fontWeight: 500, borderRadius: 4 }}>
                {item}
              </a>
            ))}
          </div>
        </aside>

        {/* ── Main Panel ── */}
        <div style={{ flex: 1 }}>

          {/* White card */}
          <div style={{ background: '#fff', borderRadius: 8, padding: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', overflow: 'hidden' }}>

            {/* Period label */}
            <div style={{ padding: '24px 32px', borderBottom: '1px solid #f3f4f6' }}>
              <p style={{ fontSize: 15, color: '#6b7280', margin: 0 }}>abril de 2026</p>
            </div>

            {/* Saldo pendiente row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 32px', borderBottom: '1px solid #f3f4f6' }}>
              <span style={{ fontSize: 17, color: '#374151' }}>Saldo pendiente</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {loading ? (
                  <div className="animate-pulse" style={{ width: 80, height: 24, background: '#f3f4f6', borderRadius: 4 }}></div>
                ) : (
                  <span style={{ fontSize: 17, color: '#374151', fontWeight: 400 }}>1 767,37 €</span>
                )}
                <Info size={18} color="#9ca3af" />
              </div>
            </div>

            {/* Main balance area */}
            <div style={{ padding: '48px 32px 40px', textAlign: 'center' }}>
              {loading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                  <div className="animate-pulse" style={{ width: 220, height: 48, background: '#f3f4f6', borderRadius: 4 }}></div>
                  <div className="animate-pulse" style={{ width: 120, height: 20, background: '#f3f4f6', borderRadius: 4 }}></div>
                </div>
              ) : (
                <>
                  <p style={{ fontSize: 28, fontWeight: 500, color: '#111827', margin: 0 }}>7 509,28 €</p>
                  <p style={{ fontSize: 16, color: '#6b7280', marginTop: 8, fontWeight: 400 }}>Saldo disponible</p>
                </>
              )}

              {/* Action buttons */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 64, marginTop: 48 }}>

                {/* Transferir */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f0f3f3', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <svg fill="none" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style={{ color: '#374151' }}><path fill="currentColor" d="M11.694 1.591a.75.75 0 0 1 .61 0l8.954 4.118c.451.201.742.649.742 1.143v1.424c0 .69-.56 1.25-1.25 1.25H20v10.5h1.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H4v-10.5h-.75c-.69 0-1.25-.56-1.25-1.25V6.852c0-.494.29-.942.742-1.143zM5.5 9.526v10.5h3v-10.5zm4.5 0v10.5h4v-10.5zm5.5 0v10.5h3v-10.5zm-12-2.512v1.012h17V7.014l-8.501-3.917z"></path></svg>
                  </div>
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>Transferir</span>
                </div>

                {/* Comprar */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f0f3f3', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <svg fill="none" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style={{ color: '#374151' }}><path fill="currentColor" d="M.998 7.021a3 3 0 0 1 3-3H20a3 3 0 0 1 3 3V17a3 3 0 0 1-3 3H3.998a3 3 0 0 1-3-3V7.02Zm18.96-1.5H4.024l6.86 5.62a1.75 1.75 0 0 0 2.218 0zM2.66 6.343a1.5 1.5 0 0 0-.162.678V17a1.5 1.5 0 0 0 1.5 1.5H20a1.5 1.5 0 0 0 1.5-1.5V7.02c0-.247-.06-.481-.167-.687l-7.28 5.967a3.25 3.25 0 0 1-4.12 0z"></path></svg>
                  </div>
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>Comprar</span>
                </div>

                {/* Donar */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f0f3f3', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <svg fill="none" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style={{ color: '#374151' }}><path fill="currentColor" d="M2.971 4.041c-2.623 2.702-2.628 7.1-.015 9.81l.015.016 7.077 7.292c.52.542 1.214.84 1.958.841a2.7 2.7 0 0 0 1.959-.841c2.299-2.371 4.604-4.74 6.913-7.098 2.526-2.595 2.833-6.625.726-9.374-1.206-1.58-3.017-2.554-4.95-2.667a6.67 6.67 0 0 0-4.632 1.52A6.63 6.63 0 0 0 7.768 2 6.62 6.62 0 0 0 2.97 4.041Zm9.601 1.068a5.16 5.16 0 0 1 3.98-1.55c1.514.082 2.874.82 3.825 2.061 1.751 2.29 1.166 5.517-.752 7.495a1.346 1.346 0 0 1-1.794-.141l-3.17-3.282a1.74 1.74 0 0 0-2.527.02l-1.4 1.447c-.805.826-2.123.5-2.435-.636-.102-.36-.112-.913.44-1.477 1.277-1.311 2.586-2.598 3.833-3.937m-1.658-.487L7.655 7.969c-.818.83-1.115 1.918-.818 2.964.654 2.232 3.404 2.967 5.021 1.282l1.401-1.446c.088-.088.236-.098.317 0l3.17 3.282a2.9 2.9 0 0 0 1.236.759l-5.111 5.272a1.214 1.214 0 0 1-1.729 0c-2.354-2.425-4.71-4.85-7.056-7.282-2.056-2.123-2.056-5.57 0-7.682a5.12 5.12 0 0 1 3.692-1.58c1.144 0 2.233.382 3.136 1.084"></path></svg>
                  </div>
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>Donar</span>
                </div>

              </div>
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

export default RoniPage;
