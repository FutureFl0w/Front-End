import { FaTools } from "react-icons/fa";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-6xl text-gray-500 mb-6">
        <FaTools />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        ¡Ups! Página no encontrada
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        La página que buscas está en construcción o no existe. Estamos trabajando
        duro para mejorar nuestro sitio. Por favor, regresa al inicio o intenta
        más tarde.
      </p>
      <Link
        href="/profile"
        className="text-blue-600 hover:underline text-lg font-medium"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
