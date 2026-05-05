# [17] GENERADOR DE TICKETS HARRODS EN PDF

**Estado:** ACTIVO
**Fecha de Creación:** 2026-05-01
**Autor:** Antigravity Agent (Nivel Senior)

## 1. CONTEXTO Y OBJETIVO
Generar una copia exacta de un ticket de compra (recibo) en formato PDF, utilizando el logo de Harrods ubicado en `C:/Users/Usuario/nelux-web/public/Harrods-Logo.png`.

## 2. RESTRICCIONES (CRÍTICO)
* El código debe ser idempotente y residir en `src/`.
* Los resultados (PDFs) deben guardarse estrictamente en la carpeta `artifacts/`.
* No imprimir datos del PDF en consola. Todo el output se debe materializar.
* Manejar rutas de forma absoluta usando el directorio del proyecto para la lectura del logo.
* **[CRÍTICO - 2026-05-05]** NUNCA usar `process.env.NODE_ENV === 'production'` en el cliente para seleccionar endpoints. En un bundle compilado por Next.js/Vercel, `NODE_ENV` es SIEMPRE `'production'`, lo que hace que la rama "localhost" nunca se ejecute. Usar siempre la ruta Next.js canónica `/api/tickets/generate`.

## 3. ESPECIFICACIONES TÉCNICAS
* **Input:** Diccionario `TICKET_DATA` en el código (editable por el usuario) y el logo de Harrods.
* **Output:** Archivo PDF guardado en `C:/Users/Usuario/nelux-web/artifacts/`.
* **Herramientas:** Python, librería `fpdf2`.
* **Endpoint API (frontend):** Siempre usar `/api/tickets/generate` (ruta Next.js App Router).

## 4. PROCEDIMIENTO (LEVITATION)
1. Editar el diccionario `TICKET_DATA` en `src/generate_pdf_ticket.py` para establecer la información del ticket.
2. Ejecutar el script. El motor usa `fpdf2` para posicionar la cabecera (y el logo `Harrods-Logo.png`), estructurar los items y los totales con fuente *Courier*.
3. Materializar en `artifacts/harrods_ticket.pdf`.

## 5. BITÁCORA DE ANOMALÍAS
| Fecha | Error | Solución/Aprendizaje |
|-------|-------|----------------------|
| 2026-05-01 | Ausencia de input visual/textual | Se requiere que el usuario especifique los datos exactos del ticket. |
| 2026-05-01 | Instrucción actualizada | Inicialmente se copió imagen tal cual. Luego se rectificó para crear un PDF desde cero paramétrico y editable (`fpdf2`). |
| 2026-05-05 | `api/generate 404` en producción | El frontend usaba `process.env.NODE_ENV` para elegir endpoint: en producción apuntaba a `/api/generate` (inexistente). Corregido: endpoint hardcodeado a `/api/tickets/generate` siempre. |
