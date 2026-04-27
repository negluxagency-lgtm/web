// Almacén compartido de suscripciones push (en memoria)
// En producción, reemplazar con consultas a Supabase o tu base de datos
import type { PushSubscription } from 'web-push';

// Variable global para persistir entre requests en el mismo proceso de Node
declare global {
  // eslint-disable-next-line no-var
  var __pushSubscriptions: PushSubscription[] | undefined;
}

if (!global.__pushSubscriptions) {
  global.__pushSubscriptions = [];
}

export const subscriptions: PushSubscription[] = global.__pushSubscriptions;
