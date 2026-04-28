"use client";

import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Info, Heart, HelpCircle, Bell, Search, ChevronRight, ChevronDown, Loader2, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import DonationModal from '@/components/DonationModal';
import TransferModal from '@/components/TransferModal';
import VintedHeader from '@/components/VintedHeader';

const inter = Inter({ subsets: ['latin'] });

const RoniPage = () => {
  const [loading, setLoading] = useState(true);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [activeSection, setActiveSection] = useState<'saldo' | 'facturas' | 'ingresos'>('saldo');
  const [showInvoiceMonthPicker, setShowInvoiceMonthPicker] = useState(false);
  const [selectedInvoiceMonth, setSelectedInvoiceMonth] = useState<'abril' | 'marzo'>('abril');
  const [isSwitchingSection, setIsSwitchingSection] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);

  const handleSectionChange = (section: 'saldo' | 'facturas' | 'ingresos') => {
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

  const handleTransferClick = () => {
    setIsSwitchingSection(true);
    setTimeout(() => {
      setIsSwitchingSection(false);
      setShowTransferModal(true);
    }, 800);
  };

  useEffect(() => {
    document.title = "Vinted | Mi cuenta";
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
                <button 
                  onClick={() => handleSectionChange('saldo')}
                  className="hover:bg-[#f3f4f6] transition-colors"
                  style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: activeSection === 'saldo' ? '#f3f4f6' : 'transparent', padding: '8px 12px', color: activeSection === 'saldo' ? '#111827' : '#6b7280', fontSize: 15, cursor: 'pointer', fontWeight: activeSection === 'saldo' ? 600 : 500, borderRadius: 4 }}
                >
                  Saldo
                </button>
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
                  <button className="hover:bg-[#f3f4f6] transition-colors" style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent', padding: '6px 12px', color: '#6b7280', fontSize: 14, cursor: 'pointer', fontWeight: 500, borderRadius: 4 }}>febrero</button>
                </Link>
                <Link href="/historial/enero" style={{ textDecoration: 'none' }}>
                  <button className="hover:bg-[#f3f4f6] transition-colors" style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent', padding: '6px 12px', color: '#6b7280', fontSize: 14, cursor: 'pointer', fontWeight: 500, borderRadius: 4 }}>marzo</button>
                </Link>
              </div>
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
          ) : activeSection === 'saldo' ? (
            /* Saldo View */
            <div style={{ background: '#fff', borderRadius: 8, padding: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
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

                  <div 
                    onClick={handleTransferClick}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, cursor: 'pointer' }}
                  >
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f0f3f3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg fill="none" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style={{ color: '#374151' }}><path fill="currentColor" d="M11.694 1.591a.75.75 0 0 1 .61 0l8.954 4.118c.451.201.742.649.742 1.143v1.424c0 .69-.56 1.25-1.25 1.25H20v10.5h1.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H4v-10.5h-.75c-.69 0-1.25-.56-1.25-1.25V6.852c0-.494.29-.942.742-1.143zM5.5 9.526v10.5h3v-10.5zm4.5 0v10.5h4v-10.5zm5.5 0v10.5h3v-10.5zm-12-2.512v1.012h17V7.014l-8.501-3.917z"></path></svg>
                    </div>
                    <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>Transferir</span>
                  </div>

                  {/* Comprar */}
                  <div 
                    onClick={() => window.location.href = 'https://www.vinted.es/member/items/favourite_list'}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, cursor: 'pointer' }}
                  >
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f0f3f3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg fill="none" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style={{ color: '#374151' }}><path fill="currentColor" d="M1.25 1.75A.75.75 0 0 1 2 1C3.665 1 5.533.958 6.174 2.88l.348 1.17H22c.472 0 .835.451.733.912l-1.628 7.885A2.75 2.75 0 0 1 18.417 15H9.615a2.75 2.75 0 0 1-2.688-2.153L4.749 3.355C4.37 2.22 2.929 2.5 2 2.5a.75.75 0 0 1-.751-.75Zm5.666 3.8 1.477 6.971c.127.572.635.979 1.222.979h8.802c.586 0 1.094-.407 1.222-.979l1.424-6.971zm7.851 14.7a2.75 2.75 0 0 1 2.753-2.75 2.75 2.75 0 0 1 2.754 2.75A2.75 2.75 0 0 1 17.52 23a2.75 2.75 0 0 1-2.753-2.75M17.52 19a1.25 1.25 0 1 0-.001 2.502A1.25 1.25 0 0 0 17.52 19m-7.009-1.5a2.75 2.75 0 0 0-2.753 2.75A2.75 2.75 0 0 0 10.511 23a2.75 2.75 0 0 0 2.754-2.75 2.75 2.75 0 0 0-2.754-2.75M9.26 20.25a1.25 1.25 0 1 1 2.501.002 1.25 1.25 0 0 1-2.501-.002"></path></svg>
                    </div>
                    <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>Comprar</span>
                  </div>

                  {/* Donar */}
                  <div 
                    onClick={() => setShowDonationModal(true)}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, cursor: 'pointer' }}
                  >
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f0f3f3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg fill="none" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style={{ color: '#374151' }}><path fill="currentColor" d="M2.971 4.041c-2.623 2.702-2.628 7.1-.015 9.81l.015.016 7.077 7.292c.52.542 1.214.84 1.958.841a2.7 2.7 0 0 0 1.959-.841c2.299-2.371 4.604-4.74 6.913-7.098 2.526-2.595 2.833-6.625.726-9.374-1.206-1.58-3.017-2.554-4.95-2.667a6.67 6.67 0 0 0-4.632 1.52A6.63 6.63 0 0 0 7.768 2 6.62 6.62 0 0 0 2.97 4.041Zm9.601 1.068a5.16 5.16 0 0 1 3.98-1.55c1.514.082 2.874.82 3.825 2.061 1.751 2.29 1.166 5.517-.752 7.495a1.346 1.346 0 0 1-1.794-.141l-3.17-3.282a1.74 1.74 0 0 0-2.527.02l-1.4 1.447c-.805.826-2.123.5-2.435-.636-.102-.36-.112-.913.44-1.477 1.277-1.311 2.586-2.598 3.833-3.937m-1.658-.487L7.655 7.969c-.818.83-1.115 1.918-.818 2.964.654 2.232 3.404 2.967 5.021 1.282l1.401-1.446c.088-.088.236-.098.317 0l3.17 3.282a2.9 2.9 0 0 0 1.236.759l-5.111 5.272a1.214 1.214 0 0 1-1.729 0c-2.354-2.425-4.71-4.85-7.056-7.282-2.056-2.123-2.056-5.57 0-7.682a5.12 5.12 0 0 1 3.692-1.58c1.144 0 2.233.382 3.136 1.084"></path></svg>
                    </div>
                    <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>Donar</span>
                  </div>

                </div>
              </div>
            </div>
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

      {showDonationModal && (
        <DonationModal 
          onClose={() => setShowDonationModal(false)} 
          balance="7 509,28 €"
        />
      )}
      <TransferModal 
        isOpen={showTransferModal} 
        onClose={() => setShowTransferModal(false)} 
        balance="7 509,28 €"
      />
    </div>
  );
};

export default RoniPage;
