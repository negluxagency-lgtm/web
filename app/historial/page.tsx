"use client";

import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Info, Heart, HelpCircle, Bell, Search, ChevronRight, ChevronDown, Loader2, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import VintedHeader from '@/components/VintedHeader';

const inter = Inter({ subsets: ['latin'] });

const HistorialContent = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<'historial' | 'facturas' | 'ingresos'>('historial');
  const [showInvoiceMonthPicker, setShowInvoiceMonthPicker] = useState(false);
  const [selectedInvoiceMonth, setSelectedInvoiceMonth] = useState<'abril' | 'marzo'>('abril');
  const [isSwitchingSection, setIsSwitchingSection] = useState(false);

  const searchParams = useSearchParams();

  const handleSectionChange = (section: 'historial' | 'facturas' | 'ingresos') => {
    setIsSwitchingSection(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsSwitchingSection(false);
    }, 600);
  };

  const handleInvoiceMonthChange = (month: 'abril' | 'marzo') => {
    setIsSwitchingSection(true);
    setTimeout(() => {
      setSelectedInvoiceMonth(month);
      setShowInvoiceMonthPicker(false);
      setIsSwitchingSection(false);
    }, 600);
  };

  useEffect(() => {
    document.title = "Vinted | Mi cuenta";
    const section = searchParams.get('section');
    if (section === 'facturas' || section === 'ingresos') {
      setActiveSection(section as any);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`} style={{ backgroundColor: '#edf2f2' }}>
      <VintedHeader />

      {/* ─── MAIN CONTENT ─── */}
      <main style={{ flex: 1, maxWidth: 1200, margin: '0 auto', width: '100%', padding: '32px 16px', display: 'flex', gap: 40 }}>

        {/* ── Sidebar ── */}
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
              <button 
                onClick={() => handleSectionChange('historial')}
                className="hover:bg-[#f3f4f6] transition-colors"
                style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: activeSection === 'historial' ? '#f3f4f6' : 'transparent', padding: '8px 12px', color: activeSection === 'historial' ? '#111827' : '#6b7280', fontSize: 15, cursor: 'pointer', fontWeight: activeSection === 'historial' ? 600 : 500, borderRadius: 4 }}
              >
                Historial
              </button>
              {activeSection === 'historial' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 12, marginBottom: 8 }}>
                  <Link href="/historial/febrero" style={{ textDecoration: 'none' }}>
                    <button className="hover:bg-[#f3f4f6] transition-colors" style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent', padding: '6px 12px', color: '#6b7280', fontSize: 14, cursor: 'pointer', fontWeight: 500, borderRadius: 4 }}>febrero</button>
                  </Link>
                  <Link href="/historial/enero" style={{ textDecoration: 'none' }}>
                    <button className="hover:bg-[#f3f4f6] transition-colors" style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent', padding: '6px 12px', color: '#6b7280', fontSize: 14, cursor: 'pointer', fontWeight: 500, borderRadius: 4 }}>marzo</button>
                  </Link>
                </div>
              )}
            </div>
            <button 
              onClick={() => handleSectionChange('facturas')}
              className="hover:bg-[#f3f4f6] transition-colors"
              style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: activeSection === 'facturas' ? '#f3f4f6' : 'transparent', padding: '8px 12px', color: activeSection === 'facturas' ? '#111827' : '#6b7280', fontSize: 15, cursor: 'pointer', fontWeight: activeSection === 'facturas' ? 600 : 500, borderRadius: 4 }}
            >
              Facturas
            </button>
            <button 
              onClick={() => handleSectionChange('ingresos')}
              className="hover:bg-[#f3f4f6] transition-colors"
              style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: activeSection === 'ingresos' ? '#f3f4f6' : 'transparent', padding: '8px 12px', color: activeSection === 'ingresos' ? '#111827' : '#6b7280', fontSize: 15, cursor: 'pointer', fontWeight: activeSection === 'ingresos' ? 600 : 500, borderRadius: 4 }}
            >
              Ingresos
            </button>
          </div>
        </aside>

        {/* ── Main Panel ── */}
        <div style={{ flex: 1, position: 'relative', minHeight: 400 }}>
          {(isSwitchingSection || loading) ? (
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100%', 
              width: '100%',
              minHeight: 300
            }}>
              <Loader2 className="animate-spin" size={32} color="#007782" />
            </div>
          ) : activeSection === 'historial' ? (
            <>
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
            </>
          ) : activeSection === 'facturas' ? (
            /* Facturas View */
            <div style={{ background: '#fff', borderRadius: 8, padding: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ padding: '24px 32px', borderBottom: '1px solid #f3f4f6' }}>
                <p style={{ fontSize: 15, color: '#6b7280', margin: 0 }}>Facturas</p>
              </div>

              {/* Period Selector */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 32px', borderBottom: '1px solid #f3f4f6', position: 'relative' }}>
                <span style={{ fontSize: 17, color: '#111827', fontWeight: 600 }}>Periodo</span>
                <div style={{ position: 'relative' }}>
                  <button 
                    onClick={() => setShowInvoiceMonthPicker(!showInvoiceMonthPicker)}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'transparent', border: 'none', borderBottom: '1px solid #e5e7eb', padding: '4px 0', cursor: 'pointer', color: '#111827', fontSize: 16 }}
                  >
                    {selectedInvoiceMonth === 'abril' ? 'abril de 2026' : 'marzo de 2026'} <ChevronDown size={18} color="#6b7280" style={{ transform: showInvoiceMonthPicker ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>

                  {showInvoiceMonthPicker && (
                    <div style={{ 
                      position: 'absolute', 
                      top: 'calc(100% + 8px)', 
                      right: 0, 
                      background: '#fff', 
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                      borderRadius: 8, 
                      zIndex: 100, 
                      minWidth: 240,
                      overflow: 'hidden',
                      border: '1px solid #e5e7eb'
                    }}>
                      {['marzo', 'abril'].map((month) => (
                        <div 
                          key={month}
                          onClick={() => handleInvoiceMonthChange(month as 'abril' | 'marzo')}
                          className="hover:bg-[#f3f4f6]"
                          style={{ 
                            padding: '16px 20px', 
                            fontSize: 16, 
                            color: '#111827', 
                            cursor: 'pointer', 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center'
                          }}
                        >
                          {month} de 2026
                          <div style={{ 
                            width: 20, 
                            height: 20, 
                            borderRadius: '50%', 
                            border: selectedInvoiceMonth === month ? '6px solid #007782' : '1px solid #d1d5db',
                            boxSizing: 'border-box'
                          }} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Invoices List */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {(selectedInvoiceMonth === 'abril' ? [
                  { id: 'FRLT 3326635305', date: '3 de Abril de 2026' },
                  { id: 'FRLT 3337644665', date: '6 de Abril de 2026' },
                  { id: 'FRLT 3398464732', date: '24 de Abril de 2026' },
                ] : [
                  { id: 'FRLT 2841952044', date: '4 de Marzo de 2026' },
                  { id: 'FRLT 2901456231', date: '12 de Marzo de 2026' },
                  { id: 'FRLT 3012456789', date: '21 de Marzo de 2026' },
                ]).map((inv, idx, arr) => (
                  <div key={inv.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 32px', borderBottom: idx === arr.length - 1 ? 'none' : '1px solid #f3f4f6' }}>
                    <div>
                      <p style={{ fontSize: 16, color: '#111827', fontWeight: 700, margin: '0 0 4px' }}>{inv.id}</p>
                      <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>{inv.date}</p>
                    </div>
                    <button style={{ 
                      background: '#fff', 
                      color: '#007782', 
                      border: '1px solid #007782', 
                      borderRadius: 4, 
                      padding: '10px 20px', 
                      fontWeight: 500, 
                      fontSize: 15, 
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f9f9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                    >
                      Descargar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Ingresos View */
            <div style={{ background: '#fff', borderRadius: 8, padding: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ padding: '24px 32px', borderBottom: '1px solid #f3f4f6' }}>
                <p style={{ fontSize: 15, color: '#6b7280', margin: 0 }}>Informes de ingresos</p>
              </div>

              {/* Report Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px' }}>
                <span style={{ fontSize: 18, color: '#111827', fontWeight: 600 }}>Informe anual de ingresos de 2026</span>
                <button 
                  onClick={() => window.location.href = 'https://www.vinted.es/wallet/income_reports/2025.pdf'}
                  style={{ 
                    background: '#fff', 
                    color: '#007782', 
                    border: '1px solid #007782', 
                    borderRadius: 4, 
                    padding: '10px 24px', 
                    fontWeight: 500, 
                    fontSize: 16, 
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f9f9'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                >
                  Descargar
                </button>
              </div>
            </div>
          )}
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

const HistorialPage = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HistorialContent />
    </Suspense>
  );
};

export default HistorialPage;
