import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(request: Request) {
  try {
    const subscription = await request.json();

    if (!subscription || !subscription.endpoint) {
      return NextResponse.json({ error: 'Suscripción inválida' }, { status: 400 });
    }

    // Insertar en Supabase (upsert basado en el endpoint que es único)
    const { error } = await supabaseAdmin
      .from('push_subscriptions')
      .upsert(
        { 
          endpoint: subscription.endpoint, 
          keys: subscription.keys 
        },
        { onConflict: 'endpoint' }
      );

    if (error) {
      console.error('[Push] Error guardando en Supabase:', error.message);
      return NextResponse.json({ error: 'Error de base de datos' }, { status: 500 });
    }

    console.log(`[Push] Nueva suscripción guardada en Supabase:`, subscription.endpoint);
    return NextResponse.json({ message: 'Suscripción registrada exitosamente' });
  } catch (error) {
    console.error('[Push] Error al guardar suscripción:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
