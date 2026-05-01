# [18] GENERADOR DE TICKETS LAFAYETTE EN PDF

**Estado:** ACTIVO
**Fecha de Creación:** 2026-05-01
**Autor:** Antigravity Agent (Nivel Senior)

## 1. CONTEXTO Y OBJETIVO
Expandir el ecosistema del generador de tickets para incluir la marca **Galeries Lafayette**. El ticket se generará dinámicamente usando texto real y el logo `Galeries-Lafayette-logo.png`.

## 2. RESTRICCIONES (CRÍTICO)
* El código debe estar en `src/generate_pdf_lafayette.py` y usar `argparse` y `fpdf2`.
* La API y el frontend web `/tickets` deben ser capaces de discriminar qué ticket (Harrods o Lafayette) se va a generar.
* La matemática de IVA se asume como estándar francés (TVA 20%) y cálculo de subtotal (`Total / 1.20`).

## 3. ESPECIFICACIONES TÉCNICAS
* **Input:** Argumentos de terminal (`--date`, `--item`, `--price`).
* **Output:** Archivo PDF `artifacts/lafayette_ticket.pdf`.
* **Herramientas:** Python (`fpdf2`, `python-barcode`), Next.js (Frontend y API route).

## 4. PROCEDIMIENTO (LEVITATION)
1. Ejecutar script base para renderizar la cabecera (logo + dirección Haussmann), cuerpo (transacción y items) y footer (TVA y texto genérico en francés).
2. Materializar en `artifacts/lafayette_ticket.pdf`.

## 5. BITÁCORA DE ANOMALÍAS
| Fecha | Error | Solución/Aprendizaje |
|-------|-------|----------------------|
| 2026-05-01 | Falta de texto base | Se usó estructura genérica de ticket parisino ante la instrucción "adelante" del usuario. |
