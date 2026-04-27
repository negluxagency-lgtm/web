import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { supabaseAdmin } from '@/lib/supabase-admin';

let isVapidConfigured = false;

function configureVapid() {
  if (isVapidConfigured) return;
  const PUBLIC_KEY = 'BHeV-yeNxfCqz3W__SXzNTQKsL6p5thswwUW-dy3ToiAUSi2nS47PHX-sHEeMSxXAjbky20XmhIdGeE8FqQ0FzM';
  
  // Evitamos que crashee en tiempo de build (ej. Netlify) si no están las variables
  if (!process.env.VAPID_EMAIL || !process.env.VAPID_PRIVATE_KEY) {
    console.warn('[Push] VAPID keys no configuradas en las variables de entorno.');
    return;
  }
  
  webpush.setVapidDetails(
    process.env.VAPID_EMAIL,
    PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );
  isVapidConfigured = true;
}

export async function POST(request: Request) {
  try {
    configureVapid();
    const body = await request.json();
    const { title, body: messageBody, url } = body;

    if (!title || !messageBody) {
      return NextResponse.json({ error: 'title y body son obligatorios' }, { status: 400 });
    }

    const { data: subscriptions, error: dbError } = await supabaseAdmin
      .from('push_subscriptions')
      .select('endpoint, keys');

    if (dbError || !subscriptions) {
      console.error('[Push] Error cargando suscripciones de Supabase:', dbError);
      return NextResponse.json({ error: 'Error de base de datos' }, { status: 500 });
    }

    if (subscriptions.length === 0) {
      console.log('[Push] No hay usuarios suscritos.');
      return NextResponse.json({ sent: 0, failed: 0, total: 0 });
    }

    const payload = JSON.stringify({
      title: title || 'Vinted',
      body: messageBody,
      icon: '/Logo_ios.png',
      url: url || '/Roni',
    });

    let sent = 0;
    let failed = 0;

    const results = await Promise.allSettled(
      subscriptions.map(async (sub) => {
        try {
          await webpush.sendNotification(sub, payload);
          sent++;
        } catch (err: any) {
          failed++;
          // Si el endpoint expiró o canceló permisos, el servidor push devuelve 410 (Gone)
          if (err.statusCode === 410 || err.statusCode === 404) {
            console.log(`[Push] Suscripción expirada. Eliminando de la BD: ${sub.endpoint}`);
            await supabaseAdmin.from('push_subscriptions').delete().eq('endpoint', sub.endpoint);
          } else {
            console.error('[Push] Error individual de envío:', err);
          }
        }
      })
    );

    console.log(`[Push] Enviadas: ${sent} | Fallidas: ${failed}`);

    return NextResponse.json({ sent, failed, total: subscriptions.length });
  } catch (error) {
    console.error('[Push] Error general al enviar notificación:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
