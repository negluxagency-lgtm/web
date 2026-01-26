import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function AvisoLegal() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-amber-500 selection:text-zinc-950">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-32">
                <h1 className="text-4xl font-bold text-white mb-12">Aviso legal</h1>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Datos del titular</h2>
                        <p className="leading-relaxed"><strong className="text-white">Nombre comercial:</strong> Nelux AI</p>
                        <p className="leading-relaxed"><strong className="text-white">NIF:</strong> 26276646C</p>
                        <p className="leading-relaxed"><strong className="text-white">Actividad:</strong> Servicios de automatización tecnológica</p>
                        <p className="leading-relaxed"><strong className="text-white">Domicilio:</strong> España</p>
                        <p className="leading-relaxed"><strong className="text-white">Correo electrónico:</strong> contacto@nelux.es</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Objeto</h2>
                        <p className="leading-relaxed">El presente Aviso Legal regula el acceso, navegación y uso del sitio web de Nelux AI, así como las responsabilidades derivadas de la utilización de sus contenidos, servicios e información.</p>
                        <p className="mt-4 leading-relaxed">El acceso a este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Condiciones de uso</h2>
                        <p className="leading-relaxed">El usuario se compromete a hacer un uso adecuado del sitio web y de sus contenidos, de conformidad con la legislación aplicable, la buena fe y el orden público.</p>
                        <p className="mt-4 leading-relaxed">Queda prohibido el uso del sitio web con fines ilícitos, ilegales o que puedan causar perjuicio al titular o a terceros.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Propiedad intelectual e industrial</h2>
                        <p className="leading-relaxed">Todos los contenidos del sitio web (textos, imágenes, diseños, logotipos, código fuente, marcas y demás elementos) son titularidad de Alejandro García Cervera, bajo el nombre comercial Nelux AI, o bien dispone de los derechos necesarios para su uso.</p>
                        <p className="mt-4 leading-relaxed">Queda prohibida la reproducción, distribución, comunicación pública o transformación de dichos contenidos sin la autorización expresa del titular.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Responsabilidad</h2>
                        <p className="leading-relaxed">El titular no se hace responsable de los daños o perjuicios derivados del uso indebido del sitio web, ni de posibles errores u omisiones en los contenidos, ni de la falta de disponibilidad del sitio web.</p>
                        <p className="mt-4 leading-relaxed">Asimismo, no se responsabiliza de los contenidos de los enlaces externos que pudieran incluirse y que conduzcan a sitios web de terceros.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Protección de datos</h2>
                        <p className="leading-relaxed">Los datos personales que el usuario facilite a través del sitio web serán tratados conforme a la normativa vigente en materia de protección de datos. Para más información, el usuario puede consultar la correspondiente Política de Privacidad.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Legislación aplicable y jurisdicción</h2>
                        <p className="leading-relaxed">El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier conflicto que pudiera derivarse del acceso o uso del sitio web, las partes se someten a los juzgados y tribunales competentes en España, salvo que la normativa establezca otra cosa.</p>
                        <p className="mt-6 text-zinc-500 text-sm">Nelux AI es una marca operada por Alejandro García Cervera, trabajador autónomo en España.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
