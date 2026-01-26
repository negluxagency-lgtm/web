import Link from "next/link";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function PoliticaPrivacidad() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-amber-500 selection:text-zinc-950">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-32">
                <h1 className="text-4xl font-bold text-white mb-12">Política de Privacidad</h1>

                <div className="space-y-12">
                    <p className="text-sm text-zinc-500 italic">Última actualización: 31 de marzo de 2025</p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
                        <p className="leading-relaxed">Recopilamos datos personales, como tu nombre, correo electrónico y detalles de empresa, cuando utilizas nuestros servicios o interactúas con nuestra página web.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Cómo Usamos la Información</h2>
                        <p className="leading-relaxed mb-4">Tus datos se emplean para:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Proporcionar y mejorar nuestros servicios de automatización.</li>
                            <li>Gestionar la relación comercial y ofrecer soporte técnico.</li>
                            <li>Cumplir con obligaciones legales y de seguridad.</li>
                        </ul>
                        <p className="leading-relaxed">La base legal para el tratamiento de tus datos incluye tu consentimiento, la necesidad de cumplir con contratos o leyes aplicables y nuestro interés legítimo en optimizar nuestros servicios.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Almacenamiento y Protección de Datos</h2>
                        <p className="leading-relaxed">Adoptamos medidas de seguridad adecuadas para proteger tu información frente a accesos no autorizados. No vendemos ni compartimos tus datos con terceros sin tu consentimiento explícito.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Derechos del Usuario</h2>
                        <p className="leading-relaxed">Tienes derecho a acceder, corregir o eliminar tus datos personales en cualquier momento. Para ejercer estos derechos, envía un correo a <a href="mailto:contacto@nelux.es" className="text-amber-500 hover:underline">contacto@nelux.es</a>.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Cookies y Tecnologías de Seguimiento</h2>
                        <p className="leading-relaxed">Usamos cookies y otras tecnologías para mejorar la experiencia del usuario y analizar el rendimiento de nuestros servicios. Puedes gestionar tus preferencias desde la configuración de tu navegador.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Cambios en la Política</h2>
                        <p className="leading-relaxed">Podemos actualizar esta política en cualquier momento. Te recomendamos revisarla periódicamente para estar al tanto de posibles modificaciones.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Contacto</h2>
                        <p className="leading-relaxed">Si tienes preguntas sobre nuestra política de privacidad, contáctanos en <a href="mailto:contacto@nelux.es" className="text-amber-500 hover:underline">contacto@nelux.es</a> o visita nuestra web.</p>
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
