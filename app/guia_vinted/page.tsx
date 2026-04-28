'use client';

import { useState, useEffect } from 'react';

export default function GuiaVintedPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    // No precargamos nada al inicio
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/verify-vinted-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (data.valid) {
        // Redirigir directamente al PDF — el navegador usa su visor nativo
        window.location.href = '/api/guia-vinted-pdf';
      } else {
        setAttempts((prev) => prev + 1);
        setError(
          attempts >= 2
            ? 'Correo no encontrado. Asegúrate de usar el email con el que realizaste la compra. Si crees que es un error, escríbenos a contacto@nelux.es o TikTok'
            : 'Correo no encontrado. Comprueba que es el mismo que usaste al comprar.'
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
      <div style={styles.fullscreen}>
        <div style={styles.bg} />
        <div style={styles.overlay} />
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={styles.spinner} />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, fontFamily: "'Inter', sans-serif" }}>Verificando...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.fullscreen}>
      {/* Fondo con gradiente animado */}
      <div style={styles.bg} />

      {/* Overlay oscuro */}
      <div style={styles.overlay} />

      {/* Modal */}
      <div style={styles.modal}>
        {/* Logo NR oficial */}
        <div style={styles.iconWrap}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'italic',
            fontWeight: 800,
            fontSize: '32px',
            letterSpacing: '-0.05em',
            paddingRight: '4px'
          }}>
            <span style={{ color: '#ffffff' }}>N</span>
            <span style={{ color: '#f59e0b' }}>R</span>
          </div>
        </div>

        <h1 style={styles.title}>Acceso a tu Guía</h1>
        <p style={styles.subtitle}>
          Introduce el correo electrónico con el que realizaste la compra para acceder a tu contenido.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputWrap}>
            <svg style={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              placeholder="tu@correo.com"
              style={styles.input}
              autoComplete="email"
              disabled={loading}
              required
            />
          </div>

          {error && (
            <div style={styles.errorBox}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <button
            id="verify-email-btn"
            type="submit"
            style={{
              ...styles.button,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
            disabled={loading}
          >
            {loading ? (
              <span style={styles.loadingRow}>
                <span style={styles.btnSpinner} />
                Verificando...
              </span>
            ) : (
              'Acceder a mi Guía →'
            )}
          </button>
        </form>

        <p style={styles.footer}>
          ¿Problemas? Escríbenos a{' '}
          <a href="mailto:hola@nelux.es" style={styles.link}>
            hola@nelux.es
          </a>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        #email-input:focus {
          outline: none;
          border-color: #f59e0b !important;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15) !important;
        }

        #verify-email-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(245, 158, 11, 0.45) !important;
        }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  fullscreen: {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', sans-serif",
    zIndex: 9999,
  },
  bg: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #09090b, #18181b, #09090b, #1c1917, #0d0d0d)',
    backgroundSize: '400% 400%',
    animation: 'bgShift 12s ease infinite',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(2px)',
  },
  modal: {
    position: 'relative',
    zIndex: 10,
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '24px',
    padding: '40px 36px',
    width: '100%',
    maxWidth: '420px',
    margin: '0 16px',
    backdropFilter: 'blur(24px)',
    boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,158,11,0.1)',
    animation: 'fadeUp 0.5s ease forwards',
  },
  iconWrap: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  title: {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: 700,
    textAlign: 'center',
    margin: '0 0 10px 0',
    letterSpacing: '-0.3px',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '14px',
    textAlign: 'center',
    margin: '0 0 28px 0',
    lineHeight: '1.6',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  inputWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: '14px',
    color: 'rgba(255,255,255,0.3)',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '14px 16px 14px 44px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '15px',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
  },
  errorBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    background: 'rgba(239, 68, 68, 0.08)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    borderRadius: '10px',
    padding: '12px 14px',
    color: '#fca5a5',
    fontSize: '13px',
    lineHeight: '1.5',
  },
  button: {
    background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #ea580c)',
    color: '#09090b',
    border: 'none',
    borderRadius: '12px',
    padding: '15px',
    fontSize: '15px',
    fontWeight: 800,
    width: '100%',
    transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.2s',
    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
    letterSpacing: '0.5px',
    textTransform: 'uppercase' as any,
  },
  loadingRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  btnSpinner: {
    width: '16px',
    height: '16px',
    border: '2px solid rgba(0,0,0,0.1)',
    borderTopColor: '#000',
    borderRadius: '50%',
    display: 'inline-block',
    animation: 'spin 0.7s linear infinite',
  },
  footer: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '24px',
    marginBottom: 0,
  },
  link: {
    color: '#f59e0b',
    textDecoration: 'none',
    fontWeight: 600,
  },
  spinner: {
    width: '36px',
    height: '36px',
    border: '3px solid rgba(255,255,255,0.1)',
    borderTopColor: '#f59e0b',
    borderRadius: '50%',
    animation: 'spin 0.7s linear infinite',
  },
  pdfContainer: {
    position: 'fixed',
    inset: 0,
    background: '#09090b',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
};
