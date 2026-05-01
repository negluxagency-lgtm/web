import { NextResponse } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import path from 'path';
import fs from 'fs';

const pt = (mm: number) => mm * 2.8346;
const PAGE_W = pt(80);
const MARGIN  = pt(5);
const CW = PAGE_W - 2 * MARGIN;

// ─── Barcode visual (no external libs needed) ───────────────────────────────
function drawBarcode(page: any, text: string, x: number, y: number, w: number, h: number) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) hash = ((hash * 31) + text.charCodeAt(i)) >>> 0;
  let cx = x; let bar = true;
  const unit = w / 160;
  for (let i = 0; i < 80; i++) {
    hash = ((hash * 1664525) + 1013904223) >>> 0;
    const bw = (1 + (hash % 3)) * unit;
    if (bar) page.drawRectangle({ x: cx, y, width: Math.min(bw, x + w - cx), height: h, color: rgb(0, 0, 0) });
    cx += bw; bar = !bar;
    if (cx >= x + w) break;
  }
}

// ─── Drawing helper ──────────────────────────────────────────────────────────
class Drawer {
  cur: number;
  constructor(
    private page: any, private ph: number, private courier: any,
    private bold: any, private margin: number
  ) { this.cur = margin; }

  private y(sz: number) { return this.ph - this.cur - sz; }

  text(t: string, sz: number, isBold = false, align: 'L'|'C'|'R' = 'L') {
    const f = isBold ? this.bold : this.courier;
    const tw = f.widthOfTextAtSize(t, sz);
    let x = this.margin;
    if (align === 'C') x = this.margin + (CW - tw) / 2;
    if (align === 'R') x = this.margin + CW - tw;
    this.page.drawText(t, { x, y: this.y(sz), size: sz, font: f, color: rgb(0,0,0) });
    this.cur += sz + 2;
    return this;
  }

  cols(left: string, right: string, sz: number, bold = false) {
    const f = bold ? this.bold : this.courier;
    this.page.drawText(left,  { x: this.margin, y: this.y(sz), size: sz, font: f, color: rgb(0,0,0) });
    const rw = f.widthOfTextAtSize(right, sz);
    this.page.drawText(right, { x: this.margin + CW - rw, y: this.y(sz), size: sz, font: f, color: rgb(0,0,0) });
    this.cur += sz + 2;
  }

  wrap(t: string, sz: number, bold = false, align: 'L'|'C'|'R' = 'L') {
    const f = bold ? this.bold : this.courier;
    const words = t.split(' '); let line = '';
    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (f.widthOfTextAtSize(test, sz) > CW && line) { this.text(line, sz, bold, align); line = w; }
      else line = test;
    }
    if (line) this.text(line, sz, bold, align);
  }

  line(ch = '-') {
    const n = Math.floor(CW / this.courier.widthOfTextAtSize(ch, 8));
    this.text(ch.repeat(n), 8);
  }

  hr(ch = '=') { this.line(ch); }
  ln(p = 4) { this.cur += p; }

  barcode(code: string, h = pt(10)) {
    const y = this.y(h);
    drawBarcode(this.page, code, this.margin, y, CW, h);
    this.cur += h + 2;
  }

  logo(img: any, imgW: number, imgH: number) {
    const x = this.margin + (CW - imgW) / 2;
    this.page.drawImage(img, { x, y: this.y(imgH), width: imgW, height: imgH });
    this.cur += imgH + 4;
  }
}

async function makeDoc(estimatedHeight = 700) {
  const doc   = await PDFDocument.create();
  const page  = doc.addPage([PAGE_W, estimatedHeight]);
  const c     = await doc.embedFont(StandardFonts.Courier);
  const cb    = await doc.embedFont(StandardFonts.CourierBold);
  return { doc, page, c, cb, ph: estimatedHeight };
}

async function loadLogo(filename: string, doc: PDFDocument): Promise<any | null> {
  try {
    const p = path.join(process.cwd(), 'public', filename);
    if (!fs.existsSync(p)) return null;
    const bytes = fs.readFileSync(p);
    return await doc.embedPng(bytes).catch(() => null);
  } catch { return null; }
}

// ─── HARRODS ────────────────────────────────────────────────────────────────
async function buildHarrods(date: string, item: string, total: number): Promise<Uint8Array> {
  const sub  = total / 1.2;
  const tax  = total - sub;
  const { doc, page, c, cb, ph } = await makeDoc(800);
  const d = new Drawer(page, ph, c, cb, MARGIN);

  const logo = await loadLogo('Harrods-Logo.png', doc);
  if (logo) {
    const [lw, lh] = [pt(60), pt(20)];
    d.logo(logo, lw, lh);
  } else {
    d.text('HARRODS', 12, true, 'C');
  }
  d.ln(2);
  d.text('87-135 Brompton Road', 7, false, 'C');
  d.text('Knightsbridge, London SW1X 7XL', 7, false, 'C');
  d.text('Tel: +44 (0)20 7730 1234', 7, false, 'C');
  d.text('VAT Number: 629273423', 7, false, 'C');
  d.ln(4);

  d.cols(`Date: ${date}`, 'Time: 14:32', 8);
  d.text('Till: 042', 8);
  d.text('Cashier: 1055 - J. Smith', 8);
  d.text('Receipt No: 83749201', 8);
  d.ln(4); d.line(); d.ln(2);

  d.cols(item, `£${total.toFixed(2)}`, 8);
  d.ln(2); d.line(); d.ln(2);

  d.cols('Subtotal:', `£${sub.toFixed(2)}`, 8);
  d.cols('VAT @ 20%:', `£${tax.toFixed(2)}`, 8);
  d.ln(2);
  d.cols('TOTAL:', `£${total.toFixed(2)}`, 9, true);
  d.ln(4);

  d.text('Visa Debit Tendered', 8);
  d.cols('Card:', 'Visa Debit', 7);
  d.cols('ICC:', '**** **** **** 9016', 7);
  d.cols('Auth Code:', '072512', 7);
  d.cols('Merchant ID:', '***00262', 7);
  d.cols('Terminal ID:', '***0353', 7);
  d.cols('AID:', 'A0000000031010', 7);
  d.ln(4);

  d.text('Harrods Rewards: *********2394', 7, false, 'C');
  d.ln(2);
  d.barcode('00000801342792191015244001');
  d.ln(2);
  d.text('Open Monday - Saturday until 9pm', 7, false, 'C');
  d.text('Sunday - 11:30am - 6pm', 7, false, 'C');
  d.text('Follow @Harrods on Instagram and Twitter', 7, false, 'C');
  d.ln(4);

  // Crop page to content
  const usedH = d.cur + MARGIN;
  page.setSize(PAGE_W, usedH);
  // Shift all content down (pdf-lib origin is bottom-left)
  const shift = ph - usedH;
  page.translateContent(0, -shift);

  return doc.save();
}

// ─── GALERIES LAFAYETTE ──────────────────────────────────────────────────────
async function buildLafayette(date: string, item: string, total: number): Promise<Uint8Array> {
  const sub = total / 1.2;
  const tax = total - sub;
  const { doc, page, c, cb, ph } = await makeDoc(800);
  const d = new Drawer(page, ph, c, cb, MARGIN);

  const logo = await loadLogo('Galeries-Lafayette-logo.png', doc);
  if (logo) {
    const [lw, lh] = [pt(60), pt(25)];
    d.logo(logo, lw, lh);
  } else {
    d.text('Galeries Lafayette', 11, true, 'C');
  }
  d.ln(2);
  d.text('GALERIESLAFAYETTE.COM', 7, false, 'C');
  d.ln(4);

  d.text(`Date : ${date}  10:47  Nb Article:1`, 8, false, 'C');
  d.text('Caisse : 003     Ticket : 32584575', 8, false, 'C');
  d.text('Caissier : 025874', 8, false, 'C');
  d.ln(2); d.line(); d.ln(2);

  d.text('Article                Prix EUR', 8, true, 'C');
  d.ln(1);
  d.text(`${item} * ${total.toFixed(2)}`, 8, false, 'C');
  d.ln(2); d.line(); d.ln(2);

  d.cols(`Total             ${total.toFixed(2)} EUR`, '', 9);
  d.cols(`Carte bancaire         ${total.toFixed(2)} EUR`, '', 8);
  d.text('Visa Debit ****9088', 8, false, 'C');
  d.ln(3);
  d.text('Taux TVA      Montant H.T.      T.V.A', 7, false, 'C');
  d.text(`20 %          ${sub.toFixed(2)}            ${tax.toFixed(2)}`, 7, false, 'C');
  d.ln(4);

  d.text('MERCI', 13, true, 'C');
  d.ln(1);
  d.text('A bientot en magasin et', 7, false, 'C');
  d.text('sur galerieslafayette.com', 7, false, 'C');
  d.ln(3);
  d.text('GL HAUSSMANN', 7, true, 'C');
  d.text('40 Boulevard Haussmann', 7, false, 'C');
  d.text('75009 Paris', 7, false, 'C');
  d.text('Tel : 01 42 82 34 56', 7, false, 'C');
  d.ln(2);
  d.text('Lun-Sam: 9h30-21h30', 7, false, 'C');
  d.text('Dim: 11h00-20h00', 7, false, 'C');
  d.ln(4);
  d.barcode('4006381333931');
  d.text('RCS Paris 572 015 246', 7, false, 'C');
  d.ln(4);

  const usedH = d.cur + MARGIN;
  page.setSize(PAGE_W, usedH);
  page.translateContent(0, -(ph - usedH));
  return doc.save();
}

// ─── LOUIS VUITTON ──────────────────────────────────────────────────────────
async function buildLV(date: string, item: string, total: number): Promise<Uint8Array> {
  const sub = total / 1.21;
  const tax = total - sub;
  const { doc, page, c, cb, ph } = await makeDoc(900);
  const d = new Drawer(page, ph, c, cb, MARGIN);

  const logo = await loadLogo('Louis_Vuitton_logo.png', doc);
  if (logo) {
    const [lw, lh] = [pt(60), pt(18)];
    d.logo(logo, lw, lh);
  } else {
    d.text('LOUIS VUITTON', 12, true, 'C');
  }
  d.ln(2);
  d.text('Louis Vuitton Puerto Banus', 7, false, 'C');
  d.text('Muelle Ribera, Casa N Marbella', 7, false, 'C');
  d.text('29660 Marbella, Malaga', 7, false, 'C');
  d.text('Tel: +34 913 75 30 70', 7, false, 'C');
  d.ln(5);

  d.cols(`Tienda: ES-0842`, 'Caja 1', 8);
  d.cols(`Fecha: ${date}`, 'Hora: 20:27', 8);
  d.text('Ticket: 58294', 8);
  d.text('Cajero: AM01', 8);
  d.ln(2);
  d.text('Cliente: Cliente', 8);
  d.ln(4);

  d.cols('Articulo', 'Importe', 8, true);
  d.line();
  d.ln(1);
  d.text(item, 8);
  d.cols('M45779        1', `${total.toFixed(2)}`, 8);
  d.text('Asesor: AM01', 8);
  d.ln(2);
  d.line();
  d.ln(3);

  d.cols('Base imponible', `${sub.toFixed(2)}`, 8);
  d.cols('IVA 21%', `${tax.toFixed(2)}`, 8);
  d.ln(1);
  d.cols('TOTAL EUR', `${total.toFixed(2)}`, 9, true);
  d.ln(4);

  d.cols('Visa Debit Tendered', `${total.toFixed(2)}`, 8);
  d.ln(2);
  d.text('Tarjeta: VISA Debit', 7);
  d.text('N. Tarjeta: **** **** **** 9088', 7);
  d.text('Autorizacion: 483920', 7);
  d.text('ID Comercio: ***00842', 7);
  d.ln(2);
  d.text('Debito autorizado por el titular', 8, false, 'C');
  d.text('PIN verificado. Conserve este recibo.', 8, false, 'C');
  d.ln(3); d.hr(); d.ln(4);

  d.wrap('Gracias por su compra en Louis Vuitton. Su producto ha sido elaborado por artesanos expertos con los mejores materiales.', 7);
  d.ln(2);
  d.wrap('Evite el contacto con aceites o productos con base de alcohol como cosmeticos, perfumes o desinfectantes.', 7);
  d.ln(2);
  d.wrap('Todos los articulos pueden ser cambiados o devueltos en un plazo de 30 dias desde la fecha de compra, con el recibo original.', 7);
  d.ln(4);

  const usedH = d.cur + MARGIN;
  page.setSize(PAGE_W, usedH);
  page.translateContent(0, -(ph - usedH));
  return doc.save();
}

// ─── ROUTE ──────────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const { date, item, price, store } = await req.json();
    if (!date || !item || price === undefined || !store) {
      return NextResponse.json({ error: 'Faltan parámetros.' }, { status: 400 });
    }

    let pdfBytes: Uint8Array;
    if (store === 'lafayette') pdfBytes = await buildLafayette(date, item, price);
    else if (store === 'lv')   pdfBytes = await buildLV(date, item, price);
    else                       pdfBytes = await buildHarrods(date, item, price);

    const names: Record<string,string> = {
      harrods:   `Harrods_Ticket_${date.replace(/\//g,'-')}.pdf`,
      lafayette: `GaleriesLafayette_Ticket_${date.replace(/\//g,'-')}.pdf`,
      lv:        `LouisVuitton_Ticket_${date.replace(/\//g,'-')}.pdf`,
    };

    return new Response(pdfBytes.buffer as BodyInit, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${names[store] ?? 'ticket.pdf'}"`,
      },
    });
  } catch (error: any) {
    console.error('Error generando ticket:', error);
    return NextResponse.json({ error: 'Error interno del servidor al generar el ticket.' }, { status: 500 });
  }
}
