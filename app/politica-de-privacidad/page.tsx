import Link from "next/link";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function PoliticaPrivacidad() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-amber-500 selection:text-zinc-950">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-32">
                <h1 className="text-4xl font-bold text-white mb-12">Política de Privacidad - NeluxBarber</h1>

                <div className="space-y-12">
                    <p className="text-sm text-zinc-500 italic">Última actualización: 15 de marzo de 2026</p>

                    <p className="leading-relaxed">
                        En NeluxBarber, la privacidad de nuestros barberos y sus clientes es nuestra prioridad. Esta política detalla cómo tratamos la información en cumplimiento con el Reglamento General de Protección de Datos (RGPD) y las políticas de Meta Platforms, Inc.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
                        <p className="leading-relaxed mb-4">Para el funcionamiento de nuestro ecosistema de gestión, recopilamos:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Datos de la cuenta:</strong> Nombre, correo electrónico, nombre de la barbería y teléfono.</li>
                            <li><strong>Datos de clientes y citas:</strong> Nombres, números de teléfono y horarios de reserva gestionados a través de nuestra web o la API de WhatsApp.</li>
                            <li><strong>Datos de facturación:</strong> Información necesaria para cumplir con la normativa Veri*Factu 2026.</li>
                            <li><strong>Contenido de mensajes:</strong> Mensajes recibidos a través del Webhook de WhatsApp para que nuestra IA pueda procesar las citas.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Uso de la Información y Servicios de Terceros</h2>
                        <p className="leading-relaxed mb-4">Tus datos se utilizan exclusivamente para:</p>
                        <ul className="list-disc pl-5 space-y-4">
                            <li>
                                <strong>Automatización de Citas:</strong> Procesar solicitudes de reserva mediante Inteligencia Artificial.
                            </li>
                            <li>
                                <strong>Proveedores de Servicios:</strong> Para operar, compartimos datos estrictamente necesarios con:
                                <ul className="list-circle pl-5 mt-2 space-y-1">
                                    <li>Meta (WhatsApp Business API): Para el envío y recepción de mensajes.</li>
                                    <li>OpenAI/Modelos de IA: Para el procesamiento de lenguaje natural (sin utilizar datos personales para el entrenamiento de modelos globales).</li>
                                    <li>Supabase: Para el almacenamiento seguro de bases de datos y archivos.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Cumplimiento Legal:</strong> Generación de registros conforme a la ley antifraude (Veri*Factu).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Transferencias Internacionales y Seguridad</h2>
                        <p className="leading-relaxed">
                            Al utilizar la API de WhatsApp, la información puede ser procesada en servidores de Meta fuera del Espacio Económico Europeo, bajo los marcos de seguridad y cláusulas contractuales estándar aprobadas por la Comisión Europea. Implementamos cifrado de extremo a extremo y protocolos de acceso restringido en nuestro panel de control.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Retención de Datos</h2>
                        <p className="leading-relaxed">
                            Conservaremos los datos personales solo mientras sean necesarios para la prestación del servicio o para cumplir con obligaciones legales (como los 4 años exigidos por la normativa fiscal en España para registros de facturación).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Control y Derechos del Usuario</h2>
                        <p className="leading-relaxed mb-4">De acuerdo con la normativa vigente, tienes derecho a:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Acceso y Portabilidad:</strong> Solicitar una copia de tus datos.</li>
                            <li><strong>Rectificación y Supresión:</strong> Corregir errores o solicitar el borrado de tu cuenta y datos asociados.</li>
                            <li><strong>Revocación:</strong> Retirar el consentimiento para el procesamiento de IA en cualquier momento.</li>
                        </ul>
                        <p className="leading-relaxed">
                            Para ejercer estos derechos, o si deseas eliminar tu información del sistema de manera inmediata, contacta con nuestro equipo de Protección de Datos en <a href="mailto:contacto@nelux.es" className="text-amber-500 hover:underline">contacto@nelux.es</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Transparencia de la IA</h2>
                        <p className="leading-relaxed">
                            Informamos a los usuarios que las interacciones por WhatsApp con el fin de agendar citas en barberías son gestionadas por un asistente de Inteligencia Artificial, todas las demás consultas son gestionadas por un humano. La IA está programada para optimizar la agenda y no para tomar decisiones automatizadas que tengan efectos legales significativos sobre el usuario sin supervisión del administrador de la barbería.
                        </p>
                    </section>

                    <div>
                        <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 font-semibold transition-colors">
                            ← Inicio
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
