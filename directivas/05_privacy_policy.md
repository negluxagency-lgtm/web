# [005] CREACIÓN DE PÁGINA: POLÍTICA DE PRIVACIDAD

**Estado:** ACTIVO
**Fecha de Actualización:** 2026-03-15
**Autor:** Antigravity Agent (Nivel Senior)

## 1. CONTEXTO Y OBJETIVO
Mantener la página `/politica-de-privacidad` actualizada con el texto legal de 2026, cumpliendo con RGPD, Veri*Factu y políticas de Meta.

## 2. RESTRICCIONES (CRÍTICO)
* **CONTENIDO:** Copiar el texto LITERAL proporcionado (Versión 15/03/2026). Debe incluir las 6 secciones: Recopilación, Uso/Terceros, Transferencias, Retención, Derechos y Transparencia IA.
* **ESTÉTICA:** Mantener `bg-zinc-950`, `text-zinc-300` para cuerpo, `text-white` para títulos. Acentos en `text-amber-500`.
* **RUTA:** `app/politica-de-privacidad/page.tsx`.

## 3. PROCEDIMIENTO (LEVITATION)
1. Crear carpeta `app/politica-de-privacidad`.
2. Crear `page.tsx` con el contenido.
3. Actualizar `components/landing/Footer.tsx` para enlazar correctamente.
4. Verificar build.
