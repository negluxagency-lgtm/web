import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import util from 'util';

const execAsync = util.promisify(exec);

export async function POST(req: Request) {
  try {
    const { date, item, price, store } = await req.json();

    if (!date || !item || price === undefined || !store) {
      return NextResponse.json({ error: 'Faltan parámetros requeridos.' }, { status: 400 });
    }

    const scriptMap: Record<string, string> = {
      harrods: 'generate_pdf_ticket.py',
      lafayette: 'generate_pdf_lafayette.py',
      lv: 'generate_pdf_lv.py',
    };
    const scriptName = scriptMap[store] || 'generate_pdf_ticket.py';
    
    // Generamos un nombre único para evitar conflictos de archivos bloqueados
    const uniqueId = Date.now();
    const outputFileName = `${store}_ticket_${uniqueId}.pdf`;
    const outputPath = path.join(process.cwd(), 'artifacts', outputFileName);

    const scriptPath = path.join(process.cwd(), 'src', scriptName);
    
    // Pasamos el --output para que el motor escriba exactamente donde queremos
    const command = `python "${scriptPath}" --date "${date}" --item "${item}" --price ${price} --output "${outputPath}"`;

    await execAsync(command);

    if (!fs.existsSync(outputPath)) {
      throw new Error('El PDF no se generó correctamente.');
    }

    const fileBuffer = fs.readFileSync(outputPath);
    
    const nameMap: Record<string, string> = {
      harrods: `Harrods_Ticket_${date.replace(/\//g, '-')}.pdf`,
      lafayette: `GaleriesLafayette_Ticket_${date.replace(/\//g, '-')}.pdf`,
      lv: `LouisVuitton_Ticket_${date.replace(/\//g, '-')}.pdf`,
    };
    const downloadName = nameMap[store] || `Ticket_${date.replace(/\//g, '-')}.pdf`;

    // Opcional: Eliminar el archivo temporal después de leerlo para no llenar artifacts
    try {
        fs.unlinkSync(outputPath);
    } catch (e) {
        console.error("No se pudo eliminar el temporal:", e);
    }

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${downloadName}"`,
      },
    });
  } catch (error: any) {
    console.error('Error generando ticket:', error);
    return NextResponse.json({ error: 'Error interno del servidor al generar el ticket.' }, { status: 500 });
  }
}
