import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Bloquear acceso directo al PDF protegido en la carpeta pública
  if (pathname.startsWith('/_guia_vinted_protegida_.pdf')) {
    return new NextResponse('Acceso denegado', { status: 403 });
  }

  return NextResponse.next();
}

// Configurar para que solo se ejecute en rutas relevantes si es necesario
export const config = {
  matcher: '/_guia_vinted_protegida_.pdf',
};
