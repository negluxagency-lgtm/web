# 16 PDF ACCESS GATE — VERIFICACIÓN DE EMAIL

**Estado:** ACTIVO
**Fecha de Creación:** 2026-04-28
**Autor:** Antigravity Agent (Nivel Senior)

## 1. CONTEXTO Y OBJETIVO
Proteger el archivo `/guia_vinted.pdf` para que solo los compradores verificados puedan acceder.
El flujo es: visita `/guia_vinted` → popup solicita email → API verifica contra tabla Supabase `vinted_buyers`
→ si válido: cookie de sesión + redirect al PDF real → si inválido: error.

## 2. RESTRICCIONES (CRÍTICO)
* **NUNCA** exponer el endpoint del PDF sin validación de cookie.
* El PDF real debe estar en `/public/Guia_Vinted.pdf` (ruta interna, no se cambia).
* La cookie `pdf_access_token` dura 24h (86400 segundos) y es HttpOnly + Secure.
* El middleware debe interceptar SOLO `/guia_vinted.pdf`, no otras rutas.
* La tabla Supabase es `vinted_buyers` con columnas: `id`, `email`, `created_at`.
* Los emails se comparan en LOWERCASE para evitar errores de capitalización.
* El webhook de Stripe usa `STRIPE_WEBHOOK_SECRET` en `.env.local`.

## 3. ESPECIFICACIONES TÉCNICAS
* **Input:** Email del comprador introducido en el popup.
* **Output:** Cookie `pdf_access_token` + redirect al PDF si válido.
* **Herramientas:** Next.js Middleware, API Routes, Supabase Admin Client, `jose` (JWT), Stripe SDK.
* **Archivos clave:**
  - `middleware.ts` — intercepta `/guia_vinted.pdf`
  - `app/guia_vinted/page.tsx` — página gate con popup
  - `app/api/verify-email/route.ts` — verifica email en Supabase
  - `app/api/stripe-webhook/route.ts` — captura emails de Stripe
  - `app/api/pdf/route.ts` — sirve el PDF con validación de cookie

## 4. PROCEDIMIENTO (LEVITATION)
1. Crear tabla `vinted_buyers` en Supabase (manual o via SQL).
2. Crear el Stripe Webhook para capturar emails en `checkout.session.completed`.
3. Crear API `/api/verify-email` que consulta Supabase y emite JWT cookie.
4. Crear Middleware que intercepta `/guia_vinted.pdf` y valida cookie.
5. Crear la página gate `/guia_vinted` con popup premium.
6. Añadir `STRIPE_WEBHOOK_SECRET` y `JWT_SECRET` al `.env.local`.

## 5. BITÁCORA DE ANOMALÍAS
| Fecha | Error | Solución/Aprendizaje |
|-------|-------|----------------------|
| 2026-04-28 | N/A | Inicialización del sistema de acceso protegido. |
