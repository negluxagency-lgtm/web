# Directiva 15: Sistema de Navegación e Interacción Roni

**Estado:** Operativo
**Fecha:** 2026-04-28
**Piloto:** Antigravity

## 🚀 Objetivo
Implementar un sistema de notificaciones visualmente coherente con la plataforma Vinted para la ruta `/Roni`. El sistema debe ser ligero, mantenible y estéticamente "premium".

## 🛠️ Especificaciones Técnicas
- **Componentización**: 
  - Idiomas: `components/LanguageDropdown.tsx`.
  - Perfil: `components/ProfileDropdown.tsx`.
  - Donaciones: `components/DonationModal.tsx`.
- **Interacción Navbar**: 
  - Los iconos (Campana, Corazón, Mensajes, Ayuda, Avatar) deben tener un contenedor de `36x36px` (`w-9 h-9`).
  - Feedback táctil: `active:bg-[#edf2f2]` en todos los iconos interactivos.
- **Sistema de Donaciones**:
  - Al pulsar el botón "Donar" en el panel de Saldo, se despliega un modal centrado con overlay oscuro.
  - El modal permite introducir el importe manualmente.
- **Redirecciones**: 
  - El corazón debe apuntar a la lista de favoritos de Vinted.
  - El botón "Comprar" en el panel de Saldo apunta a la lista de favoritos de Vinted.
  - La ayuda debe apuntar al centro de asistencia de Vinted con el canal `vinted_guide`.
  - El menú de perfil: "Mi saldo" apunta a `/Roni` y "Donativos" apunta a la configuración de donaciones de Vinted.

## 📋 Bitácora de Anomalías
- **2026-04-28**: Intento de inyectar SVG complejo de Lottie directamente en JSX causó errores de compilación y bloqueos en las herramientas de edición.
- **Solución**: Se simplificó el diseño utilizando una imagen optimizada (`Campana.png`) y se movió la lógica a un componente dedicado para mejorar la estabilidad.

## 🔒 Reglas de Oro
1. Mantener el `zIndex` del pop-up en 1000 y el overlay en 999.
2. Ancho del pop-up: 320px.
3. Tamaño de la imagen (Campana.png): 40x40px (ajustado por el usuario).
4. Margen entre imagen y texto: 16px.
5. Padding inferior del pop-up: 32px.
6. El pop-up debe estar centrado respecto al icono (`left: 50%`, `transform: translateX(-50%)`).
7. - El icono de la campana tiene un color constante (#6b7280) y un fondo que cambia a #edf2f2 solo al hacer clic (`active`).
  - El indicador de menú junto al avatar es un triángulo sólido de `8x8px` en color `#9ca3af`.
  - **Caché de Imágenes**: Para forzar la actualización de archivos como `perfil.png`, añadir un parámetro de versión (`?v=1`) al `src` y usar el flag `unoptimized`.
8. Utilizar `next/image` para el renderizado de la campana.
