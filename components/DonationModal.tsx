"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DonationModalProps {
  onClose: () => void;
  balance: string;
}

const DonationModal: React.FC<DonationModalProps> = ({ onClose, balance }) => {
  const [amount, setAmount] = useState('0.0');

  return (
    <>
      {/* Overlay */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Modal Container */}
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: 500,
            backgroundColor: '#fff',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px 20px',
            borderBottom: '1px solid #f3f4f6',
            position: 'relative'
          }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111827', margin: 0 }}>Donación directa</h2>
            <button 
              onClick={onClose}
              style={{
                position: 'absolute',
                right: 16,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#007782',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div style={{ padding: '24px' }}>
            {/* Balance */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 24,
              paddingBottom: 16,
              borderBottom: '1px solid #f3f4f6'
            }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#111827' }}>Tu saldo</span>
              <span style={{ fontSize: 16, color: '#6b7280' }}>{balance}</span>
            </div>

            {/* Donation Info */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Dona para apoyar a Ucrania</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.5, margin: 0 }}>
                Haz un donativo a Médecins du Monde (también conocida como MDM o Médicos del Mundo), una organización humanitaria que ofrece asistencia y servicios médicos a las víctimas de la guerra en Ucrania. La organización benéfica recibirá el 100 % del importe donado. <a href="#" style={{ color: '#007782', textDecoration: 'underline' }}>Leer más</a>
              </p>
            </div>

            {/* Amount Input */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 8 }}>Introduce importe del donativo</p>
              <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: 4 }}>
                <input 
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{
                    width: '100%',
                    border: 'none',
                    fontSize: 16,
                    color: '#111827',
                    outline: 'none',
                    background: 'transparent'
                  }}
                />
              </div>
              <p style={{ fontSize: 12, color: '#6b7280', marginTop: 12, lineHeight: 1.4 }}>
                Puedes hacer un donativo utilizando los fondos de tu saldo Vinted u otros métodos de pago disponibles (p. ej. tarjeta de débito).
              </p>
            </div>

            {/* Footer Button */}
            <button 
              style={{
                width: '100%',
                background: '#007782',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '14px',
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: 8
              }}
            >
              Seleccionar método de pago
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationModal;
