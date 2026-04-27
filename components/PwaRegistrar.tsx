'use client';

import { useEffect } from 'react';

const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!;

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function subscribeToPush(registration: ServiceWorkerRegistration) {
  try {
    // Verificar si ya hay suscripción activa
    const existing = await registration.pushManager.getSubscription();
    if (existing) {
      console.log('[PWA] Ya suscrito a notificaciones push');
      return;
    }

    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
    });

    // Enviar suscripción al servidor
    await fetch('/api/push/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscription),
    });

    console.log('[PWA] Suscripción push registrada en el servidor');
  } catch (err) {
    console.error('[PWA] Error al suscribirse a push:', err);
  }
}

export function PwaRegistrar() {
  useEffect(() => {
    if (!('serviceWorker' in navigator) || !VAPID_PUBLIC_KEY) return;

    navigator.serviceWorker
      .register('/sw.js')
      .then(async (registration) => {
        console.log('[PWA] Service Worker registrado:', registration.scope);

        // Esperar a que el SW esté activo
        await navigator.serviceWorker.ready;

        // Solicitar permiso de notificaciones con delay
        if ('Notification' in window) {
          setTimeout(async () => {
            if (Notification.permission === 'default') {
              const permission = await Notification.requestPermission();
              console.log('[PWA] Permiso:', permission);
              if (permission === 'granted') {
                await subscribeToPush(registration);
              }
            } else if (Notification.permission === 'granted') {
              await subscribeToPush(registration);
            }
          }, 3000);
        }
      })
      .catch((err) => {
        console.error('[PWA] Error al registrar SW:', err);
      });
  }, []);

  return null;
}
