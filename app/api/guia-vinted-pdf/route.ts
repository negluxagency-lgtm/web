import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('vinted_access')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Acceso no autorizado' }, { status: 401 });
  }

  let decoded;
  try {
    decoded = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
    const age = Date.now() - decoded.ts;
    const maxAge = 60 * 60 * 24 * 1000; // 24h en ms

    if (!decoded.email || age > maxAge) {
      return NextResponse.json({ error: 'Token expirado' }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
  }

  try {
    const fileName = decoded.tipo === 'premium' ? 'Guia_premium.pdf' : '_guia_vinted_protegida_.pdf';
    const pdfPath = path.join(process.cwd(), 'public', fileName);
    console.log(`[guia-vinted-pdf] Sirviendo PDF (${decoded.tipo || 'normal'}):`, pdfPath);
    
    const pdfBuffer = await readFile(pdfPath);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${fileName}"`,
        'Cache-Control': 'private, no-store',
      },
    });
  } catch (err: any) {
    console.error('[guia-vinted-pdf] Error al leer el PDF:', err.message);
    return NextResponse.json({ 
      error: 'PDF no encontrado',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }, { status: 404 });
  }
}
