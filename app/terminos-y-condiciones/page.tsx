import Link from "next/link";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function TerminosCondiciones() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-amber-500 selection:text-zinc-950">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-32">
                <h1 className="text-4xl font-bold text-white mb-12">Términos y Condiciones</h1>

                <div className="space-y-12">
                    <p className="text-sm text-zinc-500 italic">Última actualización: 7 de abril de 2025</p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Objeto</h2>
                        <p className="leading-relaxed">Estos términos y condiciones regulan el uso de los servicios ofrecidos por Nelux (en adelante, “la Empresa”) a sus clientes empresariales. Al contratar nuestros servicios, el cliente acepta cumplir con estas condiciones.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Servicios</h2>
                        <p className="leading-relaxed">Nelux ofrece servicios de automatización y consultoría tecnológica dirigidos exclusivamente a empresas (B2B). Todos los servicios se prestan según las condiciones pactadas en el contrato específico con cada cliente.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Contratación y Facturación</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>La contratación de los servicios se formaliza mediante un acuerdo escrito o confirmación por correo electrónico.</li>
                            <li>La facturación se realizará según lo acordado en el contrato, y los pagos deberán efectuarse en los plazos indicados.</li>
                            <li>En caso de retraso en el pago, Nelux se reserva el derecho de suspender temporalmente los servicios hasta que se regularice la situación.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Obligaciones del Cliente</h2>
                        <p className="leading-relaxed mb-4">El cliente se compromete a:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Facilitar toda la información necesaria para la correcta prestación de los servicios.</li>
                            <li>Cumplir con la normativa vigente aplicable en materia de protección de datos, seguridad y propiedad intelectual.</li>
                            <li>No utilizar los servicios de forma ilegal o que pueda dañar la reputación o infraestructura de Nelux.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Propiedad Intelectual</h2>
                        <p className="leading-relaxed">Todos los contenidos, herramientas, software y documentación proporcionados por Nelux son propiedad de la empresa y están protegidos por la legislación de propiedad intelectual. El cliente recibe únicamente una licencia limitada para utilizar los servicios contratados según lo acordado.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Confidencialidad</h2>
                        <p className="leading-relaxed">Ambas partes se comprometen a mantener la confidencialidad de la información intercambiada y a no divulgarla a terceros sin consentimiento previo, salvo obligación legal.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Responsabilidad</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Nelux no será responsable de daños indirectos, lucro cesante o pérdidas de datos ocasionados por el uso de sus servicios.</li>
                            <li>La responsabilidad máxima de Nelux frente al cliente estará limitada al importe total abonado por los servicios contratados en los últimos 12 meses.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Protección de Datos</h2>
                        <p className="leading-relaxed">Los datos personales recogidos se tratarán conforme a nuestra Política de Privacidad y la legislación vigente en España y la UE.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Modificaciones</h2>
                        <p className="leading-relaxed">Nelux se reserva el derecho de actualizar estos términos en cualquier momento. Las modificaciones serán efectivas desde su publicación en nuestra web o comunicación directa al cliente.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Terminación del Servicio</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Cualquiera de las partes puede rescindir el contrato mediante aviso por escrito, respetando los plazos acordados.</li>
                            <li>Nelux puede suspender los servicios de manera inmediata en caso de incumplimiento grave por parte del cliente.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Ley Aplicable y Jurisdicción</h2>
                        <p className="leading-relaxed">Estos términos se rigen por la legislación española. Para cualquier conflicto derivado de su interpretación o ejecución, las partes se someten a los tribunales de la ciudad de Madrid, salvo que la ley indique otra jurisdicción obligatoria.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
                        <p className="leading-relaxed">Para cualquier consulta sobre estos términos, escríbenos a <a href="mailto:contacto@nelux.es" className="text-amber-500 hover:underline">contacto@nelux.es</a>.</p>
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
