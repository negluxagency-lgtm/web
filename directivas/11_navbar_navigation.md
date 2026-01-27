# [011] CORRECCIÓN NAVEGACIÓN NAVBAR

**Estado:** ACTIVO
**Fecha de Creación:** 2026-01-27
**Autor:** Antigravity Agent (Nivel Senior)

## 1. CONTEXTO Y OBJETIVO
El Navbar actual utiliza anclas relativas (`#servicios`, `#enfoque`, etc.) que fallan cuando el usuario no está en la página principal (`/`). El objetivo es asegurar que todos los enlaces del menú apunten siempre a la sección correcta en la página de inicio, sin importar desde qué ruta se navegue.

## 2. RESTRICCIONES (CRÍTICO)
* **OBLIGATORIO:** Todos los enlaces del menú principal deben funcionar desde cualquier ruta (ej: `/blog`, `/terminos-y-condiciones`).
* **OBLIGATORIO:** Usar direccionamiento absoluto a la raíz con ancla (`/#seccion`).
* **PROHIBIDO:** Usar redirecciones Javascript complejas si un simple enlace funciona.

## 3. ESPECIFICACIONES TÉCNICAS
* **Input:** `components/landing/Navbar.tsx` actual con enlaces rotos fuera de home.
* **Output:** `components/landing/Navbar.tsx` con enlaces corregidos (`/#seccion`).
* **Herramientas:** Next.js `Link`.

## 4. PROCEDIMIENTO (LEVITATION)
1. Modificar `components/landing/Navbar.tsx`.
2. Actualizar el array de objetos de navegación añadiendo `/` antes del `#`.
3. Actualizar el enlace del botón "EMPEZAR AHORA".
4. Verificar que `/blog` se mantenga como ruta absoluta.

## 5. BITÁCORA DE ANOMALÍAS
| Fecha | Error | Solución/Aprendizaje |
|-------|-------|----------------------|
|       |       |                      |
