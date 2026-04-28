"use client";

import React from 'react';

interface LanguageDropdownProps {
  onClose: () => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ onClose }) => {
  const languages = [
    { label: 'Español (Spanish)', active: true },
    { label: 'Français (French)', active: false },
    { label: 'English (English)', active: false },
    { label: 'Nederlands (Dutch)', active: false },
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
        width: 260, 
        background: '#fff', 
        borderRadius: 4, 
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)', 
        zIndex: 1000, 
        overflow: 'hidden',
        border: '1px solid #e5e7eb' 
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {languages.map((lang, index) => (
            <div 
              key={lang.label}
              style={{
                padding: '16px 20px',
                fontSize: 16,
                fontWeight: lang.active ? 600 : 400,
                color: lang.active ? '#111827' : '#6b7280',
                cursor: 'pointer',
                borderBottom: index !== languages.length - 1 ? '1px solid #f3f4f6' : 'none',
                backgroundColor: '#fff',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
              onClick={onClose}
            >
              {lang.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LanguageDropdown;
