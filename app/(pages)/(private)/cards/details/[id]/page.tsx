"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { FaTimes, FaWifi } from "react-icons/fa";

export default function CardDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const [isScanning, setIsScanning] = useState(false);
    const [scanComplete, setScanComplete] = useState(false);

    const handleScan = () => {
        setIsScanning(true);
        setScanComplete(false);

        // Simulate scanning/loading
        setTimeout(() => {
            setIsScanning(false);
            setScanComplete(true);
        }, 1500);
    };

    return (
        <div className="bg-[#1A2D47] min-h-screen text-white flex flex-col items-center p-4 relative">
            {/* Close Button (top-right) */}
            <button
                onClick={() => router.back()}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                aria-label="Close"
            >
                <FaTimes size={20} />
            </button>

            {/* Card Image */}
            <div className="mt-10 mb-6 w-full max-w-sm">
                <Image
                    src="/mock/card/mock.webp"
                    alt="Card Mock"
                    width={400}
                    height={250}
                    className="rounded shadow-md w-full"
                />
            </div>

            {/* Card Info / Instructions */}
            {!scanComplete && (
                <>
                    <p className="text-sm text-center mb-4 px-6 leading-relaxed">
                        Coloque el dispositivo cerca del lector del autobús y espere hasta la notificación
                        de haber sido leída.
                        <br />
                        <strong>Debe tener NFC activado</strong>
                    </p>

                    {/* Scan Button/Icon */}
                    <button
                        onClick={handleScan}
                        disabled={isScanning}
                        className="flex flex-col items-center justify-center"
                    >
                        <FaWifi
                            size={60}
                            className={`${isScanning ? "animate-pulse" : ""
                                } text-white hover:text-gray-200 transition-colors`}
                        />
                        <span className="mt-2 text-xs">
                            {isScanning ? "Escaneando..." : "Tocar para escanear"}
                        </span>
                    </button>
                </>
            )}

            {/* Success Message */}
            {scanComplete && (
                <div className="mt-6 text-center bg-green-50 border border-green-500 p-4 rounded">
                    <p className="text-black font-bold italic text-lg mb-2">
                        ¡Tarjeta leída! Tenga un buen viaje
                    </p>
                </div>
            )}
        </div>
    );
}
