import React, { useState } from 'react';
import { X, Pencil } from 'lucide-react';

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  balance: string;
}

const TransferModal: React.FC<TransferModalProps> = ({ isOpen, onClose, balance }) => {
  const [amount, setAmount] = useState('');

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '100%',
        maxWidth: '560px',
        position: 'relative',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }}>
        {/* Header */}
        <div style={{
          padding: '24px 32px 16px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 500, color: '#111827', margin: '0 0 4px' }}>Transferir a cuenta bancaria.</h2>
          <p style={{ fontSize: 14, color: '#9ca3af', margin: 0 }}>La transferencia puede tardar hasta 5 días hábiles</p>

          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#6b7280',
              padding: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 32px 32px' }}>
          {/* Bank Account Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ color: '#374151', flexShrink: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M11.694 1.591a.75.75 0 0 1 .61 0l8.954 4.118c.451.201.742.649.742 1.143v1.424c0 .69-.56 1.25-1.25 1.25H20v10.5h1.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H4v-10.5h-.75c-.69 0-1.25-.56-1.25-1.25V6.852c0-.494.29-.942.742-1.143zM5.5 9.526v10.5h3v-10.5zm4.5 0v10.5h4v-10.5zm5.5 0v10.5h3v-10.5zm-12-2.512v1.012h17V7.014l-8.501-3.917z" />
              </svg>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 16, color: '#111827', fontWeight: 500 }}>Cuenta bancaria: ES74*****</span>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280' }}>
                <Pencil size={18} />
              </button>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', margin: '0 0 24px' }} />

          {/* Balance Info */}
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 16, color: '#111827', fontWeight: 400, margin: '0 0 24px' }}>Saldo disponible: {balance}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ fontSize: 15, color: '#4b5563', fontWeight: 500 }}>Importe de la transferencia</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', borderBottom: '1px solid #d1d5db', paddingBottom: 8 }}>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{
                    border: 'none',
                    fontSize: 18,
                    color: '#111827',
                    width: '100%',
                    outline: 'none',
                    fontWeight: 500,
                    background: 'transparent'
                  }}
                />
                <span style={{ fontSize: 18, color: '#111827', fontWeight: 500, marginLeft: 8 }}>€</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button style={{
            width: '100%',
            backgroundColor: '#007782',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            padding: '12px',
            fontSize: 16,
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Transferir ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;
