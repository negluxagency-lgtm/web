// ─────────────────────────────────────────────────────────────────
// send-notification.js
// Uso: node send-notification.js
// ─────────────────────────────────────────────────────────────────

const BASE_URL = 'https://nelux.es'; // Cambia a http://localhost:3000 para pruebas locales

const notification = {
  title: '¡Nuevo mensaje!',              // Título que aparece en la notificación
  body: 'Tienes un nuevo comprador.',    // Texto del cuerpo
  url: '/Roni',                          // Página a abrir al hacer clic
};

async function sendPushNotification() {
  console.log(`📡 Enviando notificación a ${BASE_URL}/api/push/send...`);
  console.log('   Payload:', notification);

  try {
    const response = await fetch(`${BASE_URL}/api/push/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(notification),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(`\n✅ Éxito:`);
      console.log(`   Enviadas : ${data.sent}`);
      console.log(`   Fallidas : ${data.failed}`);
      console.log(`   Total    : ${data.total}`);
    } else {
      console.error(`\n❌ Error del servidor: ${data.error}`);
    }
  } catch (err) {
    console.error('\n❌ Error de red:', err.message);
    console.error('   ¿Está el servidor arriba?');
  }
}

sendPushNotification();
