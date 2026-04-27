// Service Worker — Vinted PWA
const CACHE_NAME = 'vinted-pwa-v1';

// ─── Instalación ───────────────────────────────────────────────
self.addEventListener('install', (event) => {
  console.log('[SW] Instalado');
  self.skipWaiting();
});

// ─── Activación ────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  console.log('[SW] Activado');
  event.waitUntil(clients.claim());
});

// ─── Push Notifications ────────────────────────────────────────
self.addEventListener('push', (event) => {
  let data = { title: 'Vinted', body: 'Tienes una nueva notificación', icon: '/Logo_ios.png' };

  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon || '/Logo_ios.png',
    badge: '/Logo_ios.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/Roni',
    },
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// ─── Click en Notificación ─────────────────────────────────────
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/Roni';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(targetUrl) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
