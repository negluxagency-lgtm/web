'use client';

import { useEffect, useState } from 'react';

const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!;

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = typeof window === 'undefined'
    ? Buffer.from(base64, 'base64').toString('latin1')
    : window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function subscribeToPush(registration: ServiceWorkerRegistration) {
  try {
    const existing = await registration.pushManager.getSubscription();
    if (existing) return;

    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY) as BufferSource,
    });

    await fetch('/api/push/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscription),
    });

    console.log('[PWA] Suscripción push registrada');
  } catch (err) {
    console.error('[PWA] Error al suscribirse a push:', err);
  }
}

export function PwaRegistrar() {
  const [showBanner, setShowBanner] = useState(false);
  const [swRegistration, setSwRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (!('serviceWorker' in navigator) || !VAPID_PUBLIC_KEY) return;

    // Registrar Service Worker
    navigator.serviceWorker.register('/sw.js').then(async (registration) => {
      await navigator.serviceWorker.ready;
      setSwRegistration(registration);

      // Si ya tiene permiso concedido → suscribir directamente sin banner
      if ('Notification' in window && Notification.permission === 'granted') {
        await subscribeToPush(registration);
        return;
      }

      // Si no ha decidido → mostrar banner tras 4 segundos
      if ('Notification' in window && Notification.permission === 'default') {
        setTimeout(() => setShowBanner(true), 4000);
      }
    }).catch((err) => {
      console.error('[PWA] Error al registrar SW:', err);
    });
  }, []);

  const handleAllow = async () => {
    setShowBanner(false);
    if (!swRegistration) return;

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      await subscribeToPush(swRegistration);
    }
  };

  const handleDismiss = () => setShowBanner(false);

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      zIndex: 9999,
      maxWidth: 420,
      width: 'calc(100% - 32px)',
    }}>
      {/* Icono */}
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: '#007782', display: 'flex',
        alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </div>

      {/* Texto */}
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 600, fontSize: 14, color: '#111827' }}>
          Activar notificaciones
        </p>
        <p style={{ margin: '2px 0 0', fontSize: 12, color: '#6b7280' }}>
          Recibe alertas de nuevos mensajes y ofertas
        </p>
      </div>

      {/* Botones */}
      <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
        <button onClick={handleDismiss} style={{
          background: 'transparent', border: '1px solid #e5e7eb',
          borderRadius: 6, padding: '6px 12px', fontSize: 13,
          color: '#6b7280', cursor: 'pointer',
        }}>
          Ahora no
        </button>
        <button onClick={handleAllow} style={{
          background: '#007782', border: 'none',
          borderRadius: 6, padding: '6px 12px', fontSize: 13,
          color: '#fff', cursor: 'pointer', fontWeight: 500,
        }}>
          Permitir
        </button>
      </div>
    </div>
  );
}
