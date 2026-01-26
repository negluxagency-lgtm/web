# Directiva: Diseño SaaS Premium (Nelux) [04]

## 🎯 OBJETIVO
Elevar la estética de `nelux-web` a un nivel "Enterprise/Premium" mediante el uso correcto de tipografía, efectos de profundidad (glow) y refinamiento de componentes.

## 🏛️ ESTÁNDARES VISUALES
- **Tipografía**: `Outfit` para todo el contenido (Geometría técnica). `Great Vibes` para acentos elegantes (Script).
- **Paleta**: Negro profundo (`zinc-950`), Ámbar (`amber-500`) y acentos de luz sutiles.
- **Profundidad**: Uso de `radial-gradients` y `blur` para evitar fondos planos.
- **Interacción**: Elevación sutil (`-translate-y-1`) y bordes reactivos.

## 🛠️ CONFIGURACIÓN CRÍTICA (Tailwind v4)
- Las fuentes se inyectan vía `app/layout.tsx` y se mapean en `globals.css`.
- **IMPORTANTE**: No confiar únicamente en `tailwind.config.ts` dado que el proyecto usa Tailwind v4.

## 📝 BITÁCORA DE ANOMALÍAS
- [2026-01-26] **Problema de Fuentes**: El usuario reporta que las fuentes no se aplican. 
    - *Hipótesis*: Conflicto entre `tailwind.config.ts` y `globals.css` (@theme).
    - *Acción*: Consolidar en `globals.css` y asegurar que los nombres de las variables coincidan exactamente con lo inyectado en `RootLayout`.

## 🚥 RESTRICCIONES
- No usar `red`, `blue` o `green` puros. Usar la paleta `zinc` y `amber`.
- Los inputs deben ser oscuros (`bg-zinc-900/50`) y sin bordes por defecto.
- El espaciado entre secciones debe ser generoso (mínimo `py-24`).
