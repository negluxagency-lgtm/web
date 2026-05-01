'use client';

import { useState } from 'react';

type Store = 'harrods' | 'lafayette' | 'lv';

const STORE_CONFIG = {
  harrods: {
    label: 'Harrods',
    subtitle: 'London, SW1X 7XL',
    defaultItem: 'Bottega Veneta Andiamo small green',
    defaultPrice: '350.00',
    currency: '£',
    accentColor: '#C9A84C',
  },
  lafayette: {
    label: 'Galeries Lafayette',
    subtitle: 'Paris, 75009',
    defaultItem: 'Chanel Vanity black and beige caviar',
    defaultPrice: '690.00',
    currency: '€',
    accentColor: '#8B1C3E',
  },
  lv: {
    label: 'Louis Vuitton',
    subtitle: 'Puerto Banús, Marbella',
    defaultItem: 'Bolso Speedy 30',
    defaultPrice: '1620.00',
    currency: '€',
    accentColor: '#8B6914',
  },
};

// ── Gate de verificación de email ─────────────────────────────────────────────
function EmailGate({ onVerified }: { onVerified: () => void }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/verify-tickets-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (data.valid) {
        onVerified();
      } else {
        setAttempts((prev) => prev + 1);
        setError(
          attempts >= 2
            ? 'Correo no encontrado. Asegúrate de usar el email con el que realizaste la compra. Si crees que es un error, escríbenos a contacto@nelux.es'
            : 'Correo no encontrado. Comprueba que es el mismo email con el que compraste.'
        );
      }
    } catch {
      setError('Error de conexión. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={gateStyles.fullscreen}>
        <div style={gateStyles.bg} />
        <div style={gateStyles.overlay} />
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={gateStyles.spinner} />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, fontFamily: "'Inter', sans-serif" }}>Verificando...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={gateStyles.fullscreen}>
      <div style={gateStyles.bg} />
      <div style={gateStyles.overlay} />
      <div style={gateStyles.modal}>
        {/* Logo NR */}
        <div style={gateStyles.iconWrap}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontWeight: 800, fontSize: '32px', letterSpacing: '-0.05em', fontFamily: "'Inter', sans-serif" }}>
            <span style={{ color: '#ffffff' }}>N</span>
            <span style={{ color: '#f59e0b' }}>R</span>
          </div>
        </div>

        <h1 style={gateStyles.title}>Acceso a Ticket Generator</h1>
        <p style={gateStyles.subtitle}>
          Introduce el correo electrónico con el que realizaste tu compra para acceder al generador de tickets.
        </p>

        <form onSubmit={handleSubmit} style={gateStyles.form}>
          <div style={gateStyles.inputWrap}>
            <svg style={gateStyles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <input
              id="tickets-email-input"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              placeholder="tu@correo.com"
              style={gateStyles.input}
              autoComplete="email"
              disabled={loading}
              required
            />
          </div>

          {error && (
            <div style={gateStyles.errorBox}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <button
            id="tickets-verify-btn"
            type="submit"
            style={{ ...gateStyles.button, opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            disabled={loading}
          >
            Acceder al Generador →
          </button>
        </form>

        <p style={gateStyles.footer}>
          ¿Problemas? Escríbenos a{' '}
          <a href="mailto:contacto@nelux.es" style={gateStyles.link}>contacto@nelux.es</a>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @keyframes bgShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        #tickets-email-input:focus { outline: none; border-color: #f59e0b !important; box-shadow: 0 0 0 3px rgba(245,158,11,0.15) !important; }
        #tickets-verify-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 25px rgba(245,158,11,0.45) !important; }
      `}</style>
    </div>
  );
}

const gateStyles: Record<string, React.CSSProperties> = {
  fullscreen: { position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", zIndex: 9999 },
  bg: { position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #09090b, #18181b, #09090b, #1c1917, #0d0d0d)', backgroundSize: '400% 400%', animation: 'bgShift 12s ease infinite' },
  overlay: { position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)' },
  modal: { position: 'relative', zIndex: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '40px 36px', width: '100%', maxWidth: '420px', margin: '0 16px', backdropFilter: 'blur(24px)', boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,158,11,0.1)', animation: 'fadeUp 0.5s ease forwards' },
  iconWrap: { display: 'flex', justifyContent: 'center', marginBottom: '24px' },
  title: { color: '#ffffff', fontSize: '24px', fontWeight: 700, textAlign: 'center', margin: '0 0 10px 0', letterSpacing: '-0.3px' },
  subtitle: { color: 'rgba(255,255,255,0.5)', fontSize: '14px', textAlign: 'center', margin: '0 0 28px 0', lineHeight: '1.6' },
  form: { display: 'flex', flexDirection: 'column', gap: '14px' },
  inputWrap: { position: 'relative', display: 'flex', alignItems: 'center' },
  inputIcon: { position: 'absolute', left: '14px', color: 'rgba(255,255,255,0.3)', pointerEvents: 'none' },
  input: { width: '100%', padding: '14px 16px 14px 44px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#ffffff', fontSize: '15px', transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box' },
  errorBox: { display: 'flex', alignItems: 'flex-start', gap: '8px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '10px', padding: '12px 14px', color: '#fca5a5', fontSize: '13px', lineHeight: '1.5' },
  button: { background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #ea580c)', color: '#09090b', border: 'none', borderRadius: '12px', padding: '15px', fontSize: '15px', fontWeight: 800, width: '100%', transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.2s', boxShadow: '0 4px 15px rgba(245,158,11,0.3)', letterSpacing: '0.5px', textTransform: 'uppercase' as any },
  footer: { color: 'rgba(255,255,255,0.3)', fontSize: '12px', textAlign: 'center', marginTop: '24px', marginBottom: 0 },
  link: { color: '#f59e0b', textDecoration: 'none', fontWeight: 600 },
  spinner: { width: '36px', height: '36px', border: '3px solid rgba(255,255,255,0.1)', borderTopColor: '#f59e0b', borderRadius: '50%', animation: 'spin 0.7s linear infinite' },
};

// ── Generador de tickets (contenido principal) ────────────────────────────────
export default function TicketsPage() {
  const [verified, setVerified] = useState(false);
  const [store, setStore] = useState<Store>('harrods');
  const [date, setDate] = useState('');
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!verified) {
    return <EmailGate onVerified={() => setVerified(true)} />;
  }

  const handleStoreChange = (s: Store) => {
    setStore(s);
    setItem('');
    setPrice('');
    setError('');
  };

  const numericPrice = parseFloat(price) || 0;
  const isLV = store === 'lv';
  const vatRate = isLV ? 1.21 : 1.2;
  const taxRateLabel = isLV ? 'IVA (21%)' : 'IVA / TVA (20%)';
  const subtotal = numericPrice / vatRate;
  const tax = numericPrice - subtotal;
  const totalDisplay = numericPrice;
  const cfg = STORE_CONFIG[store];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = process.env.NODE_ENV === 'production' 
        ? '/api/generate' 
        : '/api/tickets/generate';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, item, price: numericPrice, store }),
      });

      if (!response.ok) {
        let errorMessage = 'Error al generar el ticket';
        try {
          const json = await response.json();
          if (json.error) errorMessage = json.error;
        } catch {
          // Si Vercel devuelve un HTML de error (500), capturamos el status
          errorMessage = `Error del servidor (${response.status})`;
        }
        throw new Error(errorMessage);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = {
        harrods: `Harrods_Ticket_${date.replace(/\//g, '-')}.pdf`,
        lafayette: `GaleriesLafayette_Ticket_${date.replace(/\//g, '-')}.pdf`,
        lv: `LouisVuitton_Ticket_${date.replace(/\//g, '-')}.pdf`,
      }[store] ?? `Ticket_${date.replace(/\//g, '-')}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err: any) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-2">Nelux Resell</p>
        <h1 className="text-4xl font-bold tracking-tight">Ticket Generator</h1>
        <p className="text-zinc-400 mt-2 text-sm">Genera recibos de compra paramétricos en PDF</p>
      </div>

      {/* Store Selector */}
      <div className="flex w-full max-w-md mb-6 rounded-xl overflow-hidden border border-zinc-800">
        {(Object.keys(STORE_CONFIG) as Store[]).map((s) => (
          <button
            key={s}
            onClick={() => handleStoreChange(s)}
            className="flex-1 py-3 text-sm font-medium transition-all duration-200"
            style={{
              background: store === s ? cfg.accentColor : 'transparent',
              color: store === s ? '#fff' : '#71717a',
              borderColor: 'transparent',
            }}
          >
            {STORE_CONFIG[s].label}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        {/* Store Info */}
        <div className="flex items-center gap-3 mb-6 pb-5 border-b border-zinc-800">
          <div className="w-2 h-8 rounded-full" style={{ background: cfg.accentColor }} />
          <div>
            <p className="font-semibold text-white">{cfg.label}</p>
            <p className="text-zinc-500 text-xs">{cfg.subtitle}</p>
          </div>
        </div>

        <form onSubmit={handleGenerate} className="space-y-5">
          {/* Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
              Fecha de Compra
            </label>
            <input
              type="text"
              placeholder="Ej: 15/04/2026"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
              required
            />
          </div>

          {/* Item */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
              Descripción del Artículo
            </label>
            <input
              type="text"
              placeholder={`Ej: ${cfg.defaultItem}`}
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
              required
            />
          </div>

          {/* Price */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
              Precio Total ({cfg.currency})
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder={`Ej: ${cfg.defaultPrice}`}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
              required
            />
          </div>

          {/* Calculated preview */}
          {numericPrice > 0 && (
            <div className="bg-black/40 border border-zinc-800 rounded-lg p-4 space-y-1.5 text-xs">
              <p className="text-zinc-500 uppercase tracking-wider mb-2 font-medium">Cálculo automático</p>
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>{cfg.currency}{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>{taxRateLabel}</span>
                <span>{cfg.currency}{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-white border-t border-zinc-800 pt-2 mt-1">
                <span>TOTAL</span>
                <span>{cfg.currency}{totalDisplay.toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <p className="text-red-400 text-xs text-center bg-red-900/20 border border-red-800 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full font-semibold py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-sm mt-2"
            style={{ background: loading ? '#27272a' : cfg.accentColor, color: '#fff' }}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generando PDF...
              </>
            ) : (
              `Generar Ticket ${cfg.label}`
            )}
          </button>
        </form>
      </div>

      <p className="text-zinc-700 text-xs mt-6">Powered by Nelux Resell · Nelux 2026</p>
    </div>
  );
}
