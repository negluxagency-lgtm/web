import { NextResponse } from 'next/server';

// Almacén en memoria (en producción usar base de datos como Supabase)
// Importamos el store compartido
import { subscriptions } from '@/lib/push-store';

export async function POST(request: Request) {
  try {
    const subscription = await request.json();

    if (!subscription || !subscription.endpoint) {
      return NextResponse.json({ error: 'Suscripción inválida' }, { status: 400 });
    }

    // Evitar duplicados por endpoint
    const exists = subscriptions.some((s) => s.endpoint === subscription.endpoint);
    if (!exists) {
      subscriptions.push(subscription);
      console.log(`[Push] Nueva suscripción guardada. Total: ${subscriptions.length}`);
    }

    return NextResponse.json({ message: 'Suscripción registrada', total: subscriptions.length });
  } catch (error) {
    console.error('[Push] Error al guardar suscripción:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
