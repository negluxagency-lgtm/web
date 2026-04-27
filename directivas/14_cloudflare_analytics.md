# Directiva 14: Cloudflare Web Analytics

## 🎯 Objetivo
Implementar el seguimiento de tráfico mediante Cloudflare Web Analytics para obtener telemetría sin cookies y respetuosa con la privacidad.

## 🛠️ Implementación
* **Ubicación:** `app/layout.tsx` (Global) o layouts específicos de ruta.
* **Método:** Uso del componente `next/script` de Next.js para carga diferida y optimización.
* **Fragmento de Código:**
```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "270252c5c5b04d86b2f8e002727f27b6"}'></script>
```

## ⚠️ Restricciones
1. No duplicar el script en sub-páginas si ya está en el layout raíz.
2. Asegurar que el atributo `data-cf-beacon` contenga el token correcto.
3. Usar la estrategia `afterInteractive` de Next.js para no penalizar el FCP (First Contentful Paint).

## 📊 Bitácora de Anomalías
* **2026-04-27:** Creación inicial de la directiva.
