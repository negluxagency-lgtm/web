"use client";

import React from 'react';

interface ProfileDropdownProps {
  onClose: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onClose }) => {
  const menuItems = [
    { label: 'Mi perfil' },
    { label: 'Invitar amigos' },
    { label: 'Ajustes' },
    { label: 'Personalización' },
    { label: 'Mi saldo', url: '/Roni' },
    { label: 'Mis pedidos' },
    { label: 'Donativos', url: 'https://www.vinted.es/settings/donations' },
    { label: 'Cerrar sesión' },
  ];

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
        right: 0, 
        width: 240, 
        background: '#fff', 
        borderRadius: 4, 
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)', 
        zIndex: 1000, 
        overflow: 'hidden',
        padding: '8px 0',
        border: '1px solid #e5e7eb' 
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {menuItems.map((item) => {
            const content = (
              <div 
                style={{
                  padding: '12px 20px',
                  fontSize: 16,
                  color: '#6b7280',
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  transition: 'background-color 0.2s, color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.color = '#111827';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#6b7280';
                }}
                onClick={onClose}
              >
                {item.label}
              </div>
            );

            if (item.url) {
              return (
                <a key={item.label} href={item.url} style={{ textDecoration: 'none' }}>
                  {content}
                </a>
              );
            }

            return <React.Fragment key={item.label}>{content}</React.Fragment>;
          })}
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
