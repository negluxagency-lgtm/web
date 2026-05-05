import { NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
// @ts-ignore
import bwipjs from 'bwip-js/node';

// ─── helpers ──────────────────────────────────────────────────────────────────

function fmtNum(n: number, decimals = 2): string {
  return n.toFixed(decimals);
}

// Points per mm at 72 dpi
const MM = 72 / 25.4;

// Receipt paper: 80 mm wide
const PAGE_W = 80 * MM;

// ─── HARRODS ──────────────────────────────────────────────────────────────────

async function generateHarrods(date: string, item: string, price: number): Promise<Uint8Array> {
  const total = price;
  const subtotal = total / 1.20;
  const tax = total - subtotal;

  const PAGE_H = 200 * MM;
  const doc = await PDFDocument.create();
  const page = doc.addPage([PAGE_W, PAGE_H]);
  const courier = await doc.embedFont(StandardFonts.Courier);
  const courierBold = await doc.embedFont(StandardFonts.CourierBold);

  // Load logo
  let logoEmbedded = null;
  try {
    const logoPath = path.join(process.cwd(), 'public', 'Harrods-Logo.png');
    if (fs.existsSync(logoPath)) {
      const logoBytes = fs.readFileSync(logoPath);
      logoEmbedded = await doc.embedPng(logoBytes);
    }
  } catch { /* no logo available */ }

  const black = rgb(0, 0, 0);
  const margin = 5 * MM;
  const usableW = PAGE_W - margin * 2;

  let y = PAGE_H;

  const drawText = (text: string, x: number, yy: number, size: number, font = courier, align: 'left' | 'center' | 'right' = 'left') => {
    const w = font.widthOfTextAtSize(text, size);
    let drawX = x;
    if (align === 'center') drawX = (PAGE_W - w) / 2;
    if (align === 'right') drawX = PAGE_W - margin - w;
    page.drawText(text, { x: drawX, y: yy, size, font, color: black });
  };

  const drawLine = (yy: number) => {
    drawText("-".repeat(40), 0, yy, 8, courier, 'center');
  };

  // Logo / header
  if (logoEmbedded) {
    const logoW = 40 * MM;
    const logoH = (logoEmbedded.height / logoEmbedded.width) * logoW;
    page.drawImage(logoEmbedded, { x: (PAGE_W - logoW) / 2, y: PAGE_H - (5 * MM + logoH), width: logoW, height: logoH });
    y = PAGE_H - 30 * MM;
  } else {
    y -= 10 * MM;
    drawText('HARRODS', 0, y, 12, courierBold, 'center');
    y -= 6 * MM;
  }

  drawText('87-135 Brompton Road', 0, y, 8, courier, 'center'); y -= 3 * MM;
  drawText('Knightsbridge, London SW1X 7XL', 0, y, 8, courier, 'center'); y -= 3 * MM;
  drawText('Tel: +44 (0)20 7730 1234', 0, y, 8, courier, 'center'); y -= 3 * MM;
  drawText('VAT Number: 629273423', 0, y, 8, courier, 'center'); y -= 5 * MM;

  drawText('CUSTOMER COPY', 0, y, 10, courierBold, 'center'); y -= 5 * MM;
  drawLine(y); y -= 3 * MM;

  // Transaction
  drawText(`Date: ${date}  Time: 14:32`, margin, y, 8); y -= 3 * MM;
  drawText('Till: 042  Cashier: 1055 - J. Smith', margin, y, 8); y -= 3 * MM;
  drawText('Receipt: 83749201', margin, y, 8); y -= 2 * MM;
  drawLine(y); y -= 3 * MM;

  // Items header
  drawText('Item', margin, y, 8, courierBold);
  drawText('Qty/£', 0, y, 8, courierBold, 'right');
  y -= 4 * MM;

  // Item
  drawText(item, margin, y, 8);
  drawText(`£${fmtNum(total)}`, 0, y, 8, courier, 'right');
  y -= 5 * MM;

  drawLine(y); y -= 3 * MM;

  // Totals
  drawText('SUBTOTAL', margin, y, 8);
  drawText(`£${fmtNum(subtotal)}`, 0, y, 8, courier, 'right'); y -= 4 * MM;
  drawText('VAT (included)', margin, y, 8);
  drawText(`£${fmtNum(tax)}`, 0, y, 8, courier, 'right'); y -= 5 * MM;

  drawText('TOTAL', margin, y, 10, courierBold);
  drawText(`£${fmtNum(total)}`, 0, y, 10, courierBold, 'right'); y -= 5 * MM;

  drawText('Visa Debit Tendered', margin, y, 8);
  drawText(`£${fmtNum(total)}`, 0, y, 8, courier, 'right'); y -= 5 * MM;

  // Card details
  const cardDetails = [
    ['Card', 'Visa Debit'],
    ['ICC', '**** **** **** 9016'],
    ['Auth Code', '072512'],
    ['Merchant ID', '***00262'],
    ['Terminal ID', '***0353'],
    ['PAN Seq.', '00'],
    ['AID', 'A0000000031010'],
    ['Cryptogram', '40/1A660B845CB0FFC3'],
  ];
  for (const [k, v] of cardDetails) {
    drawText(`${k.padEnd(15)}: ${v}`, margin, y, 7); y -= 3.5 * MM;
  }
  y -= 2 * MM;

  drawText('Please debit my account as shown', 0, y, 8, courier, 'center'); y -= 4 * MM;
  drawText('Cardholder PIN verified', 0, y, 8, courier, 'center'); y -= 4 * MM;
  drawText('Please retain for your records', 0, y, 8, courier, 'center'); y -= 2 * MM;

  drawText("=".repeat(40), 0, y, 8, courier, 'center'); y -= 6 * MM;

  // Footer
  drawText('HARRODS REWARDS DETAILS', 0, y, 9, courierBold, 'center'); y -= 5 * MM;
  drawText(`Rewards No.   *********2394`, margin, y, 8); y -= 3 * MM;

  // Barcode
  try {
    const barcodeBuffer = await bwipjs.toBuffer({
      bcid: 'code128',
      text: '00000801342792191015244001',
      scale: 3,
      height: 10,
      includetext: false,
    });
    const barcodeImg = await doc.embedPng(barcodeBuffer);
    page.drawImage(barcodeImg, { x: (PAGE_W - 50 * MM) / 2, y: y - 10 * MM, width: 50 * MM, height: 10 * MM });
    y -= 12 * MM;
  } catch (e) {
    console.error("Harrods barcode error:", e);
  }

  drawText('00000801342792191015244001', 0, y, 8, courier, 'center'); y -= 5 * MM;

  const footerMessages = [
    'Open Monday - Saturday until 9pm',
    'Sunday - 11:30am - 6pm',
    'Follow @Harrods on Instagram',
    'and share your #HarrodsMoments',
  ];
  for (const msg of footerMessages) {
    drawText(msg, 0, y, 7, courier, 'center'); y -= 3.5 * MM;
  }

  return doc.save();
}

// ─── GALERIES LAFAYETTE ────────────────────────────────────────────────────────

async function generateLafayette(date: string, item: string, price: number): Promise<Uint8Array> {
  const total = price;
  const subtotal = Math.round((total / 1.20) * 100) / 100;
  const tax = Math.round((total - subtotal) * 100) / 100;

  const PAGE_H = 250 * MM;
  const doc = await PDFDocument.create();
  const page = doc.addPage([PAGE_W, PAGE_H]);
  const courier = await doc.embedFont(StandardFonts.Courier);
  const courierBold = await doc.embedFont(StandardFonts.CourierBold);
  const black = rgb(0, 0, 0);
  const margin = 5 * MM;

  // y is in PDF points, starts near top and decreases
  let y = PAGE_H - 5 * MM;

  const drawText = (text: string, yy: number, size: number, font = courier, align: 'center' | 'left' | 'right' = 'center') => {
    const w = font.widthOfTextAtSize(text, size);
    let x = margin;
    if (align === 'center') x = (PAGE_W - w) / 2;
    if (align === 'right') x = PAGE_W - margin - w;
    page.drawText(text, { x, y: yy, size, font, color: black });
  };

  const drawDashes = (yy: number) => drawText('-'.repeat(38), yy, 8);

  // ── LOGO ────────────────────────────────────────────────────────────────────
  let logoEmbedded = null;
  try {
    const logoPath = path.join(process.cwd(), 'public', 'Galeries-Lafayette-logo.png');
    if (fs.existsSync(logoPath)) {
      const logoBytes = fs.readFileSync(logoPath);
      logoEmbedded = await doc.embedPng(logoBytes);
    }
  } catch { /* no logo */ }

  if (logoEmbedded) {
    const logoW = 60 * MM;
    const logoH = (logoEmbedded.height / logoEmbedded.width) * logoW;
    page.drawImage(logoEmbedded, { x: 10 * MM, y: y - logoH, width: logoW, height: logoH });
    y -= logoH + 8 * MM; 
  } else {
    drawText('Galeries Lafayette', y, 11, courierBold);
    y -= 7 * MM;
  }

  // ── HEADER ───────────────────────────────────────────────────────────────────
  drawText('GALERIESLAFAYETTE.COM', y, 7); y -= 7 * MM;

  drawText(`Date : ${date}  10:47  Nb Article:1`, y, 8); y -= 4 * MM;
  drawText('Caisse : 003     Ticket : 32584575', y, 8); y -= 4 * MM;
  drawText('Caissier : 025874', y, 8); y -= 6 * MM;

  drawDashes(y); y -= 7 * MM;

  // ── ITEMS ────────────────────────────────────────────────────────────────────
  drawText('Article                Prix EUR', y, 8, courierBold); y -= 4 * MM;
  
  const itemLine = `${item} * ${fmtNum(total)}`;
  const words = itemLine.split(' ');
  let line = '';
  for (const word of words) {
    if ((line + word).length > 35) {
      drawText(line.trim(), y, 8); y -= 4 * MM;
      line = '';
    }
    line += word + ' ';
  }
  if (line.trim()) { drawText(line.trim(), y, 8); y -= 4 * MM; }
  y -= 5 * MM;
  drawDashes(y); y -= 7 * MM;

  // ── TOTALS ───────────────────────────────────────────────────────────────────
  drawText(`Total             ${fmtNum(total)} EUR`, y, 9); y -= 5 * MM;
  drawText(`Carte bancaire         ${fmtNum(total)} EUR`, y, 8); y -= 4 * MM;
  drawText('Visa Debit ****9088', y, 8); y -= 7 * MM;

  drawText('Taux TVA      Montant H.T.      T.V.A', y, 7); y -= 3 * MM;
  drawText(`20 %          ${fmtNum(subtotal)}            ${fmtNum(tax)}`, y, 7); y -= 11 * MM;

  // ── FOOTER ───────────────────────────────────────────────────────────────────
  drawText('MERCI', y, 13, courierBold); y -= 12 * MM;
  drawText('A bientot en magasin et', y, 7); y -= 3 * MM;
  drawText('sur galerieslafayette.com', y, 7); y -= 6 * MM;

  drawText('GL HAUSSMANN', y, 7, courierBold); y -= 3 * MM;
  drawText('40 bld Haussmann', y, 7); y -= 3 * MM;
  drawText('75446 PARIS CEDEX 09', y, 7); y -= 3 * MM;
  drawText('Tel : 01.42.82.34.56', y, 7); y -= 5 * MM;

  drawText("Tous les Jours de 9h30 a 20h30", y, 7); y -= 3 * MM;
  drawText("et les dimanches de 11h a 20h", y, 7); y -= 14 * MM; 

  // ── BARCODE ──────────────────────────────────────────────────────────────────
  try {
    const barcodeBuffer = await bwipjs.toBuffer({
      bcid: 'code128', 
      text: '6746531687496',
      scale: 2,
      height: 15,
      includetext: false,
    });
    const barcodeImg = await doc.embedPng(barcodeBuffer);
    const bW = 65 * MM;
    const bH = 15 * MM;
    page.drawImage(barcodeImg, { x: (PAGE_W - bW) / 2, y: y - bH, width: bW, height: bH });
    y -= bH + 6 * MM;
  } catch (e) {
    console.error("Lafayette barcode error:", e);
  }

  drawText('6746531687496', y, 7); y -= 4 * MM;
  drawText('RCS Paris 572 062 594 Cap : 217 404 572', y, 6);

  return doc.save();
}

// ─── LOUIS VUITTON ────────────────────────────────────────────────────────────

async function generateLV(date: string, item: string, price: number): Promise<Uint8Array> {
  const total = price;
  const subtotal = Math.round((total / 1.21) * 100) / 100;
  const tax = Math.round((total - subtotal) * 100) / 100;

  const PAGE_H = 260 * MM;
  const doc = await PDFDocument.create();
  const page = doc.addPage([PAGE_W, PAGE_H]);
  const courier = await doc.embedFont(StandardFonts.Courier);
  const courierBold = await doc.embedFont(StandardFonts.CourierBold);
  const black = rgb(0, 0, 0);
  const margin = 5 * MM;
  const usableW = PAGE_W - margin * 2;

  let y = PAGE_H - 8 * MM;

  const drawText = (text: string, x: number, yy: number, size: number, font = courier, align: 'left' | 'center' | 'right' = 'left') => {
    const w = font.widthOfTextAtSize(text, size);
    let drawX = x;
    if (align === 'center') drawX = margin + (usableW - w) / 2;
    if (align === 'right') drawX = margin + usableW - w;
    page.drawText(text, { x: drawX, y: yy, size, font, color: black });
  };

  // Logo
  let logoEmbedded = null;
  try {
    const logoPath = path.join(process.cwd(), 'public', 'Louis_Vuitton_logo.png');
    if (fs.existsSync(logoPath)) {
      const logoBytes = fs.readFileSync(logoPath);
      logoEmbedded = await doc.embedPng(logoBytes);
    }
  } catch { /* no logo */ }

  if (logoEmbedded) {
    const logoW = 60 * MM;
    const logoH = (logoEmbedded.height / logoEmbedded.width) * logoW;
    page.drawImage(logoEmbedded, { x: (PAGE_W - logoW) / 2, y: y - logoH, width: logoW, height: logoH });
    y -= logoH + 8 * MM;
  } else {
    drawText('LOUIS VUITTON', 0, y, 12, courierBold, 'center'); y -= 8 * MM;
  }

  // Store address
  drawText('Louis Vuitton Puerto Banus', 0, y, 6.5, courier, 'center'); y -= 3.5 * MM;
  drawText('Muelle Ribera, Casa N Marbella', 0, y, 6.5, courier, 'center'); y -= 3.5 * MM;
  drawText('29660 Marbella, Malaga', 0, y, 6.5, courier, 'center'); y -= 3.5 * MM;
  drawText('Espana', 0, y, 6.5, courier, 'center'); y -= 3.5 * MM;
  drawText('Tel: +34 913 75 30 70', 0, y, 6.5, courier, 'center'); y -= 7 * MM;

  // Transaction
  drawText(`Tienda: ES-0842`, margin, y, 7);
  drawText('Caja 1', 0, y, 7, courier, 'right'); y -= 4 * MM;
  drawText(`Fecha: ${date}`, margin, y, 7);
  drawText('Hora: 20:27', 0, y, 7, courier, 'right'); y -= 4 * MM;
  drawText('Ticket: 58294', margin, y, 7); y -= 4 * MM;
  drawText('Cajero: AM01', margin, y, 7); y -= 4 * MM;
  drawText('Cliente: Cliente', margin, y, 7); y -= 6 * MM;

  // Items header
  drawText('Articulo', margin, y, 7, courierBold);
  drawText('Ud.', margin + 30 * MM, y, 7, courierBold);
  drawText('Precio', margin + 38 * MM, y, 7, courierBold);
  drawText('Importe', 0, y, 7, courierBold, 'right'); y -= 4 * MM;
  page.drawLine({ start: { x: margin, y }, end: { x: PAGE_W - margin, y }, thickness: 0.5, color: black }); y -= 4 * MM;

  // Item row
  drawText(item, margin, y, 7); y -= 4 * MM;
  drawText('1', margin + 30 * MM, y, 7);
  drawText(fmtNum(total), margin + 38 * MM, y, 7);
  drawText(fmtNum(total), 0, y, 7, courier, 'right'); y -= 4 * MM;
  drawText('Asesor: AM01', margin, y, 7); y -= 6 * MM;

  page.drawLine({ start: { x: margin, y }, end: { x: PAGE_W - margin, y }, thickness: 0.5, color: black }); y -= 4 * MM;

  // Totals
  drawText('Base imponible', margin, y, 7);
  drawText(fmtNum(subtotal), 0, y, 7, courier, 'right'); y -= 4 * MM;
  drawText('IVA 21%', margin, y, 7);
  drawText(fmtNum(tax), 0, y, 7, courier, 'right'); y -= 5 * MM;

  drawText('TOTAL EUR', margin, y, 8, courierBold);
  drawText(fmtNum(total), 0, y, 8, courierBold, 'right'); y -= 6 * MM;

  drawText('Visa Debit Tendered', margin, y, 7);
  drawText(fmtNum(total), 0, y, 7, courier, 'right'); y -= 5 * MM;

  // Card details
  const cardDetails = [
    ['Tarjeta', 'VISA Debit'],
    ['N. Tarjeta', '**** **** **** 9088'],
    ['Autorizacion', '483920'],
    ['ID Comercio', '***00842'],
    ['ID Terminal', '***0312'],
    ['AID', 'A0000000031010'],
    ['Criptograma', '5A/2F8B3C91DE06AF'],
  ];
  for (const [k, v] of cardDetails) {
    drawText(`${k.padEnd(15)}: ${v}`, margin, y, 6); y -= 3.5 * MM;
  }
  y -= 3 * MM;

  drawText('Debito autorizado por el titular', 0, y, 7, courier, 'center'); y -= 4 * MM;
  drawText('PIN verificado. Conserve este recibo.', 0, y, 7, courier, 'center'); y -= 5 * MM;
  page.drawLine({ start: { x: margin, y }, end: { x: PAGE_W - margin, y }, thickness: 0.8, color: black }); y -= 6 * MM;

  // Footer paragraphs
  const footerTexts = [
    'Gracias por su compra en Louis Vuitton. Su producto ha sido elaborado por artesanos expertos con los mejores materiales.',
    'Evite el contacto con aceites o productos con base de alcohol como cosmeticos, perfumes o desinfectantes.',
    'Todos los articulos pueden ser cambiados o devueltos en un plazo de 30 dias desde la fecha de compra, con el recibo original.',
  ];
  for (const para of footerTexts) {
    // Simple word wrap at ~60 chars
    const words = para.split(' ');
    let line = '';
    for (const word of words) {
      if ((line + word).length > 38) {
        drawText(line.trim(), 0, y, 6, courier, 'center'); y -= 3.5 * MM;
        line = '';
      }
      line += word + ' ';
    }
    if (line.trim()) { drawText(line.trim(), 0, y, 6, courier, 'center'); y -= 3.5 * MM; }
    y -= 2 * MM;
  }

  return doc.save();
}

// ─── ROUTE HANDLER ────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    const { date, item, price, store } = await req.json();

    if (!date || !item || !price || !store) {
      return NextResponse.json({ error: 'Faltan parámetros.' }, { status: 400 });
    }

    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      return NextResponse.json({ error: 'Precio inválido.' }, { status: 400 });
    }

    let pdfBytes: Uint8Array;

    if (store === 'harrods') {
      pdfBytes = await generateHarrods(date, item, numericPrice);
    } else if (store === 'lafayette') {
      pdfBytes = await generateLafayette(date, item, numericPrice);
    } else if (store === 'lv') {
      pdfBytes = await generateLV(date, item, numericPrice);
    } else {
      return NextResponse.json({ error: 'Tienda no reconocida.' }, { status: 400 });
    }

    const names: Record<string, string> = {
      harrods: `Harrods_Ticket_${date.replace(/\//g, '-')}.pdf`,
      lafayette: `GaleriesLafayette_Ticket_${date.replace(/\//g, '-')}.pdf`,
      lv: `LouisVuitton_Ticket_${date.replace(/\//g, '-')}.pdf`,
    };

    return new Response(pdfBytes as BodyInit, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${names[store] ?? 'ticket.pdf'}"`,
      },
    });

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error generando ticket:', msg);
    return NextResponse.json({ error: 'Error interno al generar el ticket.' }, { status: 500 });
  }
}
