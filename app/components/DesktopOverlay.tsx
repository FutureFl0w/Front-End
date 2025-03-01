"use client";

import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function DesktopOverlay() {
  // Start with a null value to indicate "unknown" until we check.
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // While the device type is unknown, render a loader.
  if (isMobile === null) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 text-white">
        <div className="flex flex-col items-center">
          <ClipLoader loading={true} color="#fff" size={50} />
          <p className="text-lg mt-4">Cargando...</p>
        </div>
      </div>
    );
  }

  // If it's mobile, do not show the overlay.
  if (isMobile) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80 text-white">
      <h1 className="text-3xl font-bold mb-4">Usa un dispositivo móvil</h1>
      <p className="text-lg">
        Por favor, abre esta aplicación en un dispositivo móvil para una mejor experiencia.
      </p>
    </div>
  );
}
