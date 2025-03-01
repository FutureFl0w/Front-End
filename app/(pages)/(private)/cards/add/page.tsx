"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

export default function AddCardPage() {
    const [tipoTarjeta, setTipoTarjeta] = useState("Estándar Recargable");
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    // Track window size for confetti sizing
    const [windowSize, setWindowSize] = useState({ width: 300, height: 300 });
    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        const handleResize = () =>
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const noDocsNeeded = tipoTarjeta === "Estándar Recargable";
    const isPequeTus = tipoTarjeta === "Peque Tus de 4 a 7";

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(true);
    };

    // Close modal and redirect to /profile
    const handleCloseModal = () => {
        setShowModal(false);
        router.push("/profile");
    };

    return (
        <div className="bg-white min-h-screen p-4 relative">
            {/* Page Title */}
            <h1 className="text-xl font-bold mb-6">Añadir Nueva Tarjeta</h1>

            <form className="space-y-6 max-w-md mx-auto" onSubmit={handleSubmit}>
                {/* Nombre completo */}
                <div>
                    <label htmlFor="nombreCompleto" className="block mb-1 font-semibold">
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        id="nombreCompleto"
                        placeholder="Javier Enrique Cáder Suay"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="flex gap-4">
                    {/* Tipo de documento */}
                    <div className="flex-1">
                        <label htmlFor="tipoDocumento" className="block mb-1 font-bold">
                            Tipo de documento
                        </label>
                        <div className="relative">
                            <select
                                id="tipoDocumento"
                                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
                            >
                                <option>DNI</option>
                                <option>NIE</option>
                                <option>Pasaporte</option>
                            </select>
                            <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>


                    {/* Identificación */}
                    <div className="flex-1">
                        <label htmlFor="identificacion" className="block mb-1 font-semibold">
                            Identificación
                        </label>
                        <input
                            type="text"
                            id="identificacion"
                            placeholder="100181918192y"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>


                {/* Tipo de tarjeta */}
                <div>
                    <label htmlFor="tipoTarjeta" className="block mb-1 font-semibold">
                        Tipo de tarjeta
                    </label>
                    <div className="relative">
                        <select
                            id="tipoTarjeta"
                            className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
                            value={tipoTarjeta}
                            onChange={(e) => setTipoTarjeta(e.target.value)}

                        >
                            <option>Estándar Recargable</option>
                            <option>Peque Tus de 4 a 7</option>
                            <option>Familia Numerosa</option>
                            <option>Trimestral Joven</option>
                            <option>Personas con Discapacidad igual o superior al 33% y el 64%</option>
                        </select>
                        <FaChevronDown
                            className={`pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-transform duration-200`}
                        />
                    </div>
                </div>

                {/* Documentos necesarios según el tipo de tarjeta */}
                {!noDocsNeeded && (
                    <div>
                        <label className="block mb-2 font-semibold">
                            Documentos necesarios según el tipo de tarjeta
                        </label>

                        {/* Nota especial para Peque Tus */}
                        {isPequeTus && (
                            <p className="mb-4 text-sm text-gray-600">
                                <strong>Nota:</strong> Para tarjetas de niños de 4 a 7 años se
                                requiere la documentación del padre, madre o tutor legal (no la
                                del menor), a excepción del empadronamiento.
                            </p>
                        )}



                        {/* Empadronamiento */}
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">Empadronamiento</label>
                            <input
                                type="file"
                                className="w-full text-sm text-gray-600 file:mr-2 file:py-2 file:px-3 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                placeholder="Empadronamiento"
                            />
                        </div>

                        {/* Copia del documento de identidad */}
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">
                                Copia del documento de identidad
                            </label>
                            <input
                                type="file"
                                className="w-full text-sm text-gray-600 file:mr-2 file:py-2 file:px-3 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>

                        {/* Foto de frente */}
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">Foto clara del rostro</label>
                            <input
                                type="file"
                                className="w-full text-sm text-gray-600 file:mr-2 file:py-2 file:px-3 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>
                    </div>
                )}

                <p className="text-sm text-gray-700">
                    Al enviar esta solicitud de creación de tarjeta, pasará por la aprobación
                    del TUS para la revisión de los datos y te notificaremos el resultado del
                    proceso.
                </p>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-[#1A2D47] text-white font-semibold px-4 py-2 rounded shadow hover:bg-blue-800 transition-colors"
                    >
                        Guardar
                    </button>
                </div>
            </form>

            {/* Success Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative bg-white rounded-md p-6 w-full max-w-sm text-center"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >
                            <h2 className="text-xl font-bold mb-4">
                                Tu solicitud ha sido enviada
                            </h2>
                            <p className="mb-4 text-sm text-gray-600">
                                ¡Enhorabuena! Te notificaremos cuando la revisión esté completa.
                            </p>
                            <button
                                onClick={handleCloseModal}
                                className="bg-[#1A2D47] text-white px-4 py-2 rounded font-semibold"
                            >
                                Cerrar
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
