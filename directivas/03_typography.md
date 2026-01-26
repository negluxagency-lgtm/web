# [003] ACTUALIZACIÓN DE TIPOGRAFÍA (OUTFIT + SCRIPT)

**Estado:** ACTIVO
**Fecha de Creación:** 2026-01-26
**Autor:** Antigravity Agent

## 1. CONTEXTO Y OBJETIVO
Cambiar la tipografía global para eliminar la fuente por defecto. Usar "Outfit" como fuente principal (Moderna/Geométrica) y "Great Vibes" como fuente de acento (Script/Premium).

## 2. RESTRICCIONES (CRÍTICO)
* **PRINCIPAL:** Outfit (Sans). Títulos y Cuerpo.
* **ACENTO:** Great Vibes (Script). Solo para "Inteligencia Nativa" o detalles.
* **TECNOLOGÍA:** Usar `next/font/google`.
* **TAILWIND V4:** Integrar variables CSS correctamente en `globals.css` extendiendo el tema.

## 3. ESPECIFICACIONES TÉCNICAS
* **Fuentes:**
    * `Outfit` (subsets: latin, weight: variable)
    * `Great Vibes` (subsets: latin, weight: 400)
* **Variables CSS:**
    * `--font-outfit`
    * `--font-script`

## 4. PROCEDIMIENTO (LEVITATION)
1. Modificar `app/layout.tsx` para importar y configurar fuentes.
2. Actualizar `app/globals.css` (Tailwind v4 theme) para mapear `font-sans` y añadir `font-script`.
3. Actualizar `Hero.tsx` para aplicar `font-script` al texto de acento.
4. Verificar build.

## 5. BITÁCORA DE ANOMALÍAS
| Fecha | Error | Solución/Aprendizaje |
|-------|-------|----------------------|
|       |       |                      |
