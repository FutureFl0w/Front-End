import Image from "next/image";
import Link from "next/link";

export default function LegalRequirements() {
    return (
        <div className="bg-white text-black">
            {/* Top Bar Image */}
            <div className="sticky top-0 z-50">
                <Image
                    src="/backgrounds/topbar.svg"
                    alt="Top Bar"
                    width={1920}
                    height={100}
                    className="w-full"
                />
            </div>

            <div className="p-4">
                <h1 className="text-2xl font-bold mb-6">Términos y Condiciones de SOMOS</h1>

                <div className="space-y-6 text-sm">
                    <div>
                        <h2 className="font-bold mb-2">1. ACEPTACIÓN DE LOS TÉRMINOS</h2>
                        <p className="mb-4">
                            Al descargar, instalar y utilizar esta aplicación, el usuario acepta de manera
                            <strong> expresa</strong> los presentes <strong>Términos y Condiciones</strong>. Si no está de acuerdo con alguna parte de este acuerdo, deberá abstenerse de usar la aplicación.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">2. OBJETO DE LA APLICACIÓN</h2>
                        <p className="mb-4">
                            Esta aplicación tiene como finalidad <strong>incentivar</strong> el uso del
                            <strong> transporte público</strong> mediante un sistema de <strong>recompensas</strong>. Para ello, se recopila información en tiempo real sobre los viajes realizados o programados, la cantidad de recompensas canjeadas y disponibles, y otros datos relevantes que permitan verificar y mejorar el sistema de incentivos.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">3. INFORMACIÓN RECOPILADA</h2>
                        <p className="mb-2">
                            La aplicación recoge datos relacionados con:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>
                                <strong>Viajes:</strong> Registro de los viajes realizados o programados por el usuario.
                            </li>
                            <li>
                                <strong>Recompensas:</strong> Número de recompensas obtenidas, canjeadas y las que están disponibles para canjear.
                            </li>
                            <li>
                                <strong>Datos de uso adicionales:</strong> Información que ayude a analizar el funcionamiento y la efectividad del sistema de incentivos.
                            </li>
                        </ul>
                        <p className="mb-4">
                            Es importante destacar que no se recopilan datos de carácter <strong>altamente personal</strong>, tales como el nombre, el correo electrónico u otra información sensible, salvo en los casos en que se requiera expresamente y con el consentimiento <strong>explícito</strong> del usuario.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">4. FINALIDAD DEL TRATAMIENTO DE DATOS</h2>
                        <p className="mb-2">
                            Los datos obtenidos serán utilizados exclusivamente para:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Verificar el <strong>correcto funcionamiento</strong> del sistema de incentivos y recompensas.</li>
                            <li>Realizar análisis y estadísticas que permitan mejorar la <strong>experiencia</strong> y la operatividad de la aplicación.</li>
                            <li>Desarrollar informes internos para optimizar el servicio ofrecido a los usuarios.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">5. SEGURIDAD Y PROTECCIÓN DE LA INFORMACIÓN</h2>
                        <p className="mb-4">
                            La seguridad de los datos del usuario es una <strong>prioridad</strong>. Por ello, se han implementado las medidas técnicas y organizativas necesarias para proteger la información recopilada contra accesos no autorizados, alteraciones, divulgaciones o destrucción. El tratamiento de los datos se realiza en cumplimiento con la normativa vigente en materia de protección de datos, incluyendo el <strong>Reglamento General de Protección de Datos (GDPR)</strong>.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">6. COMPARTICIÓN DE DATOS</h2>
                        <p className="mb-4">
                            Los datos recopilados no serán compartidos con terceros, salvo que sea necesario para el cumplimiento de obligaciones legales o contractuales, y siempre garantizando la <strong>confidencialidad</strong> y <strong>seguridad</strong> de la información.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">7. MODIFICACIONES DE LOS TÉRMINOS Y CONDICIONES</h2>
                        <p className="mb-4">
                            Nos reservamos el derecho de modificar o actualizar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde el momento de su publicación en la aplicación. Se recomienda a los usuarios revisar periódicamente esta sección para estar informados de cualquier cambio.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">8. CONTACTO</h2>
                        <p className="mb-4">
                            Para cualquier consulta o duda relacionada con estos Términos y Condiciones, puede ponerse en contacto con nosotros a través de <strong>info@futureflow.es</strong>.
                        </p>
                    </div>
                    <p className="mt-6">
                        Al utilizar la aplicación, el usuario reconoce haber leído, comprendido y aceptado estos Términos y Condiciones.
                    </p>
                </div>

                {/* Back Link */}
                <div className="mt-6 text-center">
                    <Link
                        href="/login"
                        className="inline-block bg-[#1A2D47] text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-blue-800 transition duration-200"
                    >
                        Volver al inicio de sesión
                    </Link>
                </div>

            </div>
        </div>
    );
}
