import React from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

interface ImageSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImageSearchModal: React.FC<ImageSearchModalProps> = ({ isOpen, onClose }) => {
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
          padding: '16px 20px',
          borderBottom: '1px solid #f3f4f6',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111827', margin: 0 }}>Búsqueda por imágenes</h2>
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              right: 16,
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
        <div style={{ padding: '24px' }}>
          <div style={{
            border: '1px dashed #d1d5db',
            borderRadius: 4,
            padding: '60px 20px',
            textAlign: 'center',
            backgroundColor: '#f9fafb',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16
          }}>
            {/* Illustration Placeholder */}
            <div style={{ color: '#007782', marginBottom: 8 }}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="25" y="30" width="30" height="35" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="35" y="25" width="30" height="35" rx="2" stroke="#66b2b9" strokeWidth="2"/>
                <circle cx="45" cy="45" r="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M55 20L57 22L59 20L57 18L55 20Z" fill="#66b2b9"/>
              </svg>
            </div>

            <button style={{
              backgroundColor: '#007782',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '10px 24px',
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}>
              Sube una imagen
            </button>

            <p style={{ margin: 0, fontSize: 15, color: '#6b7280' }}>
              o arrastra una imagen aquí
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSearchModal;
