"use client";

import React from 'react';
import Image from 'next/image';

interface NotificationDropdownProps {
  onClose: () => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ onClose }) => {
  return (
    <>
      {/* Overlay to close when clicking outside */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999
        }}
      />

      <div style={{
        position: 'absolute',
        top: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 320,
        background: '#fff',
        borderRadius: 4,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        zIndex: 1000,
        padding: '24px 20px 32px',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1002
        }}>
          {/* Campana Image */}
          <div style={{ width: 40, height: 40, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/Campana.png"
              alt="Notificaciones"
              width={40}
              height={40}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 500, color: '#111827', margin: 0 }}>No hay notificaciones</h3>
        </div>
      </div>
    </>
  );
};

export default NotificationDropdown;
