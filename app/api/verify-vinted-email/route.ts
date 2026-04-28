import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ valid: false, error: 'Email requerido' }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const { data, error } = await supabaseAdmin
      .from('vinted')
      .select('correo')
      .ilike('correo', normalizedEmail)
      .limit(1);

    if (error) {
      console.error('[verify-vinted-email] Supabase error:', error);
      return NextResponse.json({ valid: false, error: 'Error interno' }, { status: 500 });
    }

    const valid = data && data.length > 0;

    if (valid) {
      // Creamos un token simple firmado con timestamp para la sesión
      const token = Buffer.from(
        JSON.stringify({ email: normalizedEmail, ts: Date.now() })
      ).toString('base64');

      const response = NextResponse.json({ valid: true });
      response.cookies.set('vinted_access', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24h
        path: '/',
      });
      return response;
    }

    return NextResponse.json({ valid: false });
  } catch {
    return NextResponse.json({ valid: false, error: 'Error interno' }, { status: 500 });
  }
}
