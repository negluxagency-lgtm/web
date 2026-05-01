import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import util from 'util';
import path from 'path';
import fs from 'fs';

const execAsync = util.promisify(exec);

export async function POST(req: Request) {
  try {
    const { date, item, price, store } = await req.json();

    if (!date || !item || !price || !store) {
      return NextResponse.json({ error: 'Faltan parámetros.' }, { status: 400 });
    }

    const timestamp = Date.now();
    const artifactsDir = path.join(process.cwd(), 'artifacts');
    if (!fs.existsSync(artifactsDir)) {
      fs.mkdirSync(artifactsDir, { recursive: true });
    }

    const outputFile = path.join(artifactsDir, `ticket_${store}_${timestamp}.pdf`);
    let scriptName = 'generate_pdf_ticket.py';
    
    if (store === 'lafayette') {
      scriptName = 'generate_pdf_lafayette.py';
    } else if (store === 'lv') {
      scriptName = 'generate_pdf_lv.py';
    }

    const scriptPath = path.join(process.cwd(), 'src', scriptName);
    
    // Si no estamos en producción, ejecutamos el script de python localmente
    // (Esto usa el entorno local del usuario donde Python y dependencias sí existen)
    const command = `python "${scriptPath}" --date "${date}" --item "${item}" --price ${price} --output "${outputFile}"`;

    await execAsync(command);

    if (!fs.existsSync(outputFile)) {
      throw new Error("El PDF no se generó correctamente.");
    }

    const pdfBuffer = fs.readFileSync(outputFile);

    try {
      fs.unlinkSync(outputFile);
    } catch (e) {
      console.error("Error al borrar PDF temporal:", e);
    }

    const names: Record<string, string> = {
      harrods: `Harrods_Ticket_${date.replace(/\//g, '-')}.pdf`,
      lafayette: `GaleriesLafayette_Ticket_${date.replace(/\//g, '-')}.pdf`,
      lv: `LouisVuitton_Ticket_${date.replace(/\//g, '-')}.pdf`,
    };

    return new Response(pdfBuffer as BodyInit, {
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
