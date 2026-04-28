"use client";

import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Info, Heart, HelpCircle, ChevronDown, Bell, Search, ChevronRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import VintedHeader from '@/components/VintedHeader';

const inter = Inter({ subsets: ['latin'] });

const HistorialFebreroPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Vinted | Mi cuenta";
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`} style={{ backgroundColor: '#edf2f2' }}>
      <VintedHeader />

      {/* ─── MAIN CONTENT ─── */}
      <main style={{ flex: 1, maxWidth: 1200, margin: '0 auto', width: '100%', padding: '32px 16px', display: 'flex', gap: 40 }}>
        {/* Sidebar */}
        <aside style={{ width: 180, flexShrink: 0 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 32 }}>Saldo</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Mi saldo group */}
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#6b7280', fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mi saldo</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Link href="/Roni" style={{ textDecoration: 'none' }}>
                  <button className="hover:bg-[#f3f4f6] transition-colors" style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent', padding: '8px 12px', color: '#6b7280', fontSize: 15, cursor: 'pointer', fontWeight: 500, borderRadius: 4 }}>Saldo</button>
                </Link>
                <button className="hover:bg-[#f3f4f6] transition-colors" style={{ display: 'block', padding: '8px 12px', color: '#6b7280', fontSize: 15, cursor: 'pointer', fontWeight: 500, borderRadius: 4, background: 'transparent', border: 'none', textAlign: 'left' }}>Ajustes</button>
              </div>
            </div>

            {/* Other sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="/historial" style={{ textDecoration: 'none' }}>
                <button className="hover:bg-[#f3f4f6] transition-colors" style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent', padding: '8px 12px', color: '#6b7280', fontSize: 15, cursor: 'pointer', fontWeight: 500, borderRadius: 4 }}>Historial</button>
              </Link>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 12, marginBottom: 8 }}>
                <Link href="/historial/febrero" style={{ textDecoration: 'none' }}>
                  <button className="hover:bg-[#f3f4f6] transition-colors" style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: '#f3f4f6', padding: '6px 12px', color: '#111827', fontSize: 14, cursor: 'pointer', fontWeight: 600, borderRadius: 4 }}>febrero</button>
                </Link>
                <Link href="/historial/enero" style={{ textDecoration: 'none' }}>
                  <button className="hover:bg-[#f3f4f6] transition-colors" style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent', padding: '6px 12px', color: '#6b7280', fontSize: 14, cursor: 'pointer', fontWeight: 500, borderRadius: 4 }}>marzo</button>
                </Link>
              </div>
            </div>
            <Link href="/historial?section=facturas" style={{ textDecoration: 'none' }}>
              <button className="hover:bg-[#f3f4f6] transition-colors" style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent', padding: '8px 12px', color: '#6b7280', fontSize: 15, cursor: 'pointer', fontWeight: 500, borderRadius: 4 }}>Facturas</button>
            </Link>
            <Link href="/historial?section=ingresos" style={{ textDecoration: 'none' }}>
              <button className="hover:bg-[#f3f4f6] transition-colors" style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent', padding: '8px 12px', color: '#6b7280', fontSize: 15, cursor: 'pointer', fontWeight: 500, borderRadius: 4 }}>Ingresos</button>
            </Link>
          </div>
        </aside>

        {/* Main Panel */}
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 12 }}><p style={{ fontSize: 13, color: '#6b7280', margin: 0 }}>febrero de 2026</p></div>
          <div style={{ background: '#fff', borderRadius: 4, padding: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', overflow: 'hidden', marginBottom: 32 }}>
            <div style={{ padding: '0 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: 15, color: '#374151' }}>Saldo final</span>
                {loading ? (
                  <div className="animate-pulse" style={{ width: 100, height: 20, background: '#f3f4f6', borderRadius: 4 }}></div>
                ) : (
                  <span style={{ fontSize: 15, color: '#374151' }}>7 332,72 €</span>
                )}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0' }}>
                <span style={{ fontSize: 15, color: '#374151' }}>Saldo inicial</span>
                {loading ? (
                  <div className="animate-pulse" style={{ width: 100, height: 20, background: '#f3f4f6', borderRadius: 4 }}></div>
                ) : (
                  <span style={{ fontSize: 15, color: '#374151' }}>3 456,68 €</span>
                )}
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 8, padding: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #f3f4f6' }}><p style={{ fontSize: 15, color: '#6b7280', margin: 0 }}>Transacciones</p></div>
            <div style={{ padding: '32px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {loading ? (
                <div className="animate-pulse" style={{ width: 140, height: 24, background: '#f3f4f6', borderRadius: 4 }}></div>
              ) : (
                <p style={{ fontSize: 15, color: '#111827', margin: 0 }}><strong>6 Transacciones</strong></p>
              )}
              <span style={{ fontSize: 14, color: '#007782', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>Ver transacciones <ChevronRight size={16} /></span>
            </div>
          </div>
        </div>
      </main>

      <footer style={{ background: '#fff', borderTop: '1px solid #e5e7e5', marginTop: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 16px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {['Vinted', 'Descubre', 'Ayuda'].map((col) => (
            <div key={col}>
              <p style={{ fontWeight: 400, color: '#111827', marginBottom: 12, fontSize: 16 }}>{col}</p>
              {col === 'Vinted' && ['¿Quiénes somos?', 'Sostenibilidad', 'Prensa', 'Publicidad'].map(i => <a key={i} href="#" style={{ display: 'block', color: '#6b7280', fontSize: 13, marginBottom: 8, textDecoration: 'none' }}>{i}</a>)}
              {col === 'Descubre' && ['¿Cómo funciona?', 'Verificación del artículo', 'Descarga la app', 'Tablón informativo'].map(i => <a key={i} href="#" style={{ display: 'block', color: '#6b7280', fontSize: 13, marginBottom: 8, textDecoration: 'none' }}>{i}</a>)}
              {col === 'Ayuda' && ['Centro de Asistencia', 'Vender', 'Comprar', 'Confianza y seguridad'].map(i => <a key={i} href="#" style={{ display: 'block', color: '#6b7280', fontSize: 13, marginBottom: 8, textDecoration: 'none' }}>{i}</a>)}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default HistorialFebreroPage;
