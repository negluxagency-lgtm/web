import Link from "next/link";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function TerminosCondiciones() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-400 selection:bg-rose-500 selection:text-white font-[family-name:var(--font-outfit)]">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-32">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Términos y Condiciones de Uso</h1>
                    <p className="text-sm text-zinc-500">Última actualización: 02 de marzo de 2025</p>
                </header>

                <div className="space-y-12 text-lg leading-relaxed">
                    <section>
                        <p>
                            Bienvenido a <strong>Nelux</strong>. Al acceder o utilizar nuestro software ubicado en{" "}
                            <a href="https://nelux.es" className="text-rose-500 hover:text-rose-400 transition-colors">nelux.es</a> y{" "}
                            <a href="https://app.nelux.es" className="text-rose-500 hover:text-rose-400 transition-colors">app.nelux.es</a>,
                            usted acepta quedar vinculado por los siguientes Términos y Condiciones.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Objeto del Servicio</h2>
                        <p>
                            Nelux ofrece una plataforma de gestión para barberías que incluye servicios de agenda, gestión de clientes y un sistema de facturación diseñado para el cumplimiento de la <strong>Ley 11/2021 (Ley Antifraude)</strong> en España.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Responsabilidad del Usuario (El Barbero)</h2>
                        <ul className="space-y-4">
                            <li>
                                <strong className="text-zinc-200 block mb-1">Veracidad de los datos:</strong>
                                El usuario es responsable de la exactitud de los datos fiscales introducidos (NIF, domicilio, importes).
                            </li>
                            <li>
                                <strong className="text-zinc-200 block mb-1">Uso del software:</strong>
                                El usuario se compromete a no utilizar el software para actividades ilícitas.
                            </li>
                            <li>
                                <strong className="text-zinc-200 block mb-1">Obligación tributaria:</strong>
                                Nelux facilita la creación de facturas inalterables y encadenadas (conforme a la normativa), pero la responsabilidad final de declarar dichos ingresos y remitirlos a la Agencia Tributaria recae exclusivamente en el usuario.
                            </li>
                        </ul>
                    </section>

                    <section className="p-8 border border-zinc-800 bg-zinc-900/50 rounded-2xl">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Inalterabilidad de las Facturas (Ley Antifraude)</h2>
                        <p className="mb-4 text-zinc-300">De acuerdo con la normativa vigente, el usuario acepta y comprende que:</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>Una vez emitida una factura, el sistema no permite su edición ni eliminación para garantizar la integridad exigida por Hacienda.</li>
                            <li>En caso de error, el usuario deberá emitir una <strong>Factura Rectificativa</strong> siguiendo el procedimiento habilitado en la plataforma.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Propiedad Intelectual</h2>
                        <p>
                            Todo el código, diseño, logotipos y arquitectura de Nelux son propiedad exclusiva de Nelux. Queda prohibida la reproducción total o parcial del software sin autorización expresa.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Suscripción y Pagos</h2>
                        <p className="mb-4">El acceso a Nelux se realiza mediante planes de suscripción (mensual/anual).</p>
                        <p>
                            El impago de la cuota resultará en la suspensión del acceso al servicio, aunque los datos de facturación se mantendrán custodiados según el periodo legal obligatorio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Limitación de Responsabilidad</h2>
                        <p className="mb-4 text-zinc-300 font-medium">Nelux no se hace responsable de:</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>Pérdidas económicas debidas a caídas temporales del servicio o de internet.</li>
                            <li>Sanciones de la Agencia Tributaria derivadas de un mal uso del software por parte del usuario o de la falta de presentación de impuestos.</li>
                            <li>Errores en el escaneo del código QR si los datos introducidos por el usuario son incorrectos.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Protección de Datos y Privacidad</h2>
                        <p>
                            El tratamiento de los datos personales se rige por nuestra Política de Privacidad. Al aceptar estos términos, el usuario acepta que Nelux actúe como "Encargado de Tratamiento" de los datos de sus clientes de barbería según el RGPD.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Modificaciones</h2>
                        <p>
                            Nos reservamos el derecho de modificar estos términos para adaptarlos a cambios legislativos (como nuevas normativas de la AEAT). El uso continuado del servicio tras un cambio implica la aceptación de los nuevos términos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Jurisdicción</h2>
                        <p>
                            Para cualquier controversia, las partes se someten a los juzgados y tribunales de la ciudad correspondiente, España.
                        </p>
                    </section>

                    <div className="pt-12 border-t border-zinc-900">
                        <Link href="/" className="group inline-flex items-center gap-2 text-rose-500 hover:text-rose-400 font-semibold transition-all">
                            <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al Inicio
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
