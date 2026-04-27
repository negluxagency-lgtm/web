import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { subscriptions } from '@/lib/push-store';

webpush.setVapidDetails(
  process.env.VAPID_EMAIL!,
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, body: messageBody, url } = body;

    if (!title || !messageBody) {
      return NextResponse.json({ error: 'title y body son obligatorios' }, { status: 400 });
    }

    const payload = JSON.stringify({
      title: title || 'Vinted',
      body: messageBody,
      icon: '/Logo_ios.png',
      url: url || '/Roni',
    });

    const results = await Promise.allSettled(
      subscriptions.map((sub) => webpush.sendNotification(sub, payload))
    );

    const sent = results.filter((r) => r.status === 'fulfilled').length;
    const failed = results.filter((r) => r.status === 'rejected').length;

    console.log(`[Push] Enviadas: ${sent} | Fallidas: ${failed}`);

    return NextResponse.json({ sent, failed, total: subscriptions.length });
  } catch (error) {
    console.error('[Push] Error al enviar notificación:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
