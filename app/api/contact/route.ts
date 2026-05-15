import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, phone, type, message } = await req.json();

        if (!name || !email) {
            return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
        }

        // Sanear el campo from (elimina comillas simples/dobles si el .env las incluye)
        const fromAddress = (process.env.RESEND_FROM as string).replace(/^['"]|['"]$/g, "");

        const { data, error } = await resend.emails.send({
            from: fromAddress,
            to: ["contacto@nelux.es"],
            replyTo: email,
            subject: `🌐 Nueva solicitud de presupuesto — ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #ffffff; padding: 32px; border-radius: 12px; border: 1px solid #27272a;">
                    
                    <div style="margin-bottom: 28px;">
                        <h1 style="color: #fe9a00; font-size: 22px; margin: 0 0 4px 0;">Nueva solicitud de presupuesto</h1>
                        <p style="color: #71717a; font-size: 13px; margin: 0;">Nelux Webs · ${new Date().toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
                    </div>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; width: 140px;">Nombre</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #27272a; color: #ffffff; font-size: 15px; font-weight: 600;">${name}</td>
                        </tr>

                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #27272a;">
                                <a href="mailto:${email}" style="color: #fe9a00; font-size: 15px; font-weight: 600; text-decoration: none;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Teléfono</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #27272a;">
                                ${phone ? `<a href="tel:${phone.replace(/\s+/g, '')}" style="color: #fe9a00; font-size: 15px; font-weight: 600; text-decoration: none;">${phone}</a>` : '<span style="color: #ffffff; font-size: 15px;">—</span>'}
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Sector</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #27272a; color: #ffffff; font-size: 15px;">${type || "—"}</td>
                        </tr>
                        ${message ? `
                        <tr>
                            <td style="padding: 12px 0; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top; padding-top: 16px;">Mensaje</td>
                            <td style="padding: 12px 0; color: #d4d4d8; font-size: 14px; line-height: 1.6; padding-top: 16px;">${message.replace(/\n/g, "<br/>")}</td>
                        </tr>` : ""}
                    </table>

                    <div style="margin-top: 28px; padding: 16px; background: rgba(254,154,0,0.08); border: 1px solid rgba(254,154,0,0.25); border-radius: 8px; text-align: center;">
                        <a href="mailto:${email}?subject=Re: Tu solicitud de presupuesto en Nelux Webs" 
                           style="display: inline-block; padding: 12px 28px; background: #fe9a00; color: #09090b; font-weight: 700; font-size: 14px; border-radius: 999px; text-decoration: none;">
                            Responder a ${name} →
                        </a>
                    </div>

                    <p style="margin-top: 24px; color: #3f3f46; font-size: 11px; text-align: center;">
                        Nelux Webs · Zaragoza · nelux.es
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error("❌ Resend error:", JSON.stringify(error));
            return NextResponse.json({ error: `Resend: ${(error as any).message || "Error al enviar."}` }, { status: 500 });
        }

        console.log("✅ Email enviado:", data?.id);
        return NextResponse.json({ success: true });

    } catch (err) {
        console.error("Contact route error:", err);
        return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
    }
}
