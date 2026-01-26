# [08] OPTIMIZACIÓN MÓVIL (RESPONSIVE)

**Estado:** ACTIVO
**Fecha de Creación:** 2026-01-26
**Autor:** Antigravity Agent (Nivel Senior)

## 1. CONTEXTO Y OBJETIVO
El objetivo es asegurar que **toda la web (Nelux)** sea perfectamente funcional y estéticamente premium en dispositivos móviles. Actualmente, la web puede tener elementos que no se adaptan bien (desbordamientos, textos pequeños, elementos superpuestos). Se busca una experiencia "Mobile First" o al menos "Mobile Optimized".

## 2. RESTRICCIONES (CRÍTICO)
* **NO romper la vista de escritorio.** Cualquier cambio debe usar prefijos de Tailwind (`md:`, `lg:`) para preservar el diseño en pantallas grandes.
* **NO usar `@media` custom en CSS** si es posible resolverlo con utilidades de Tailwind.
* **Tamaños de fuente legibles:** Mínimo 16px para cuerpo de texto en móvil.
* **Áreas táctiles:** Botones y enlaces con suficiente padding para dedos (min 44px de altura visual/táctil).
* **Scroll Horizontal prohibido:** El `body` no debe tener scroll horizontal involuntario.

## 3. ESPECIFICACIONES TÉCNICAS
* **Input:** Componentes existentes en `components/landing/` y `app/`.
* **Output:** Código modificado con clases responsivas.
* **Herramientas:** Tailwind CSS v4 (según `globals.css` parece v4 o v3 con `@theme`).

## 4. PROCEDIMIENTO (LEVITATION)
1. **Navbar:** Menú hamburguesa funcional y estético.
2. **Hero:** Ajustar tamaños de texto (`text-4xl` -> `text-6xl md:text-8xl`) y espaciados. Flex-col en vez de flex-row para CTAs.
3. **Secciones (Grid/Flex):** Pasar de `grid-cols-3` a `grid-cols-1 md:grid-cols-3`.
4. **Imágenes:** Asegurar `w-full h-auto`.
5. **Footer:** Colapsar columnas o alinearlas verticalmente.

## 5. BITÁCORA DE ANOMALÍAS
| Fecha | Error | Solución/Aprendizaje |
|-------|-------|----------------------|
|       |       |                      |
