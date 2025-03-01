"use client";

import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export default function SurveyDetailPage() {
  const surveyTitle =
    "Encuesta Demográfica: Perfil Ciudadano para un Santander Sostenible";

  // States for modal, loading, awarded points, etc.
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [awardedPoints, setAwardedPoints] = useState(0);

  // Track window size for confetti
  const [windowSize, setWindowSize] = useState({ width: 300, height: 300 });
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Generate random points between 50 and 150
    const randomPoints = Math.floor(Math.random() * 101) + 50;
    setAwardedPoints(randomPoints);

    // Simulate a short loading time
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1500);
  };

  const handleCloseModal = () => {
    setShowSuccess(false);
  };

  return (
    <div className="bg-white p-4 my-4">
      {/* Survey Title */}
      <h1 className="text-xl font-bold mb-4 text-center">{surveyTitle}</h1>

      {/* Survey Questions Container */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        {/* Question 1 */}
        <div>
          <label className="block font-semibold mb-1">¿Cuál es su género?</label>
          <div className="relative">
            <select className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none">
              <option>Femenino</option>
              <option>Masculino</option>
              <option>Otro</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Question 2 */}
        <div>
          <label className="block font-semibold mb-1">
            ¿En qué rango de edad se encuentra?
          </label>
          <div className="relative">
            <select className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none">
              <option>Menor de 18 años</option>
              <option>18-24 años</option>
              <option>25-44 años</option>
              <option>45-54 años</option>
              <option>55 años o más</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Question 3 */}
        <div>
          <label className="block font-semibold mb-1">
            ¿En qué zona o barrio de Santander reside?
          </label>
          <input
            type="text"
            placeholder="Cuatro Caminos"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Question 4 */}
        <div>
          <label className="block font-semibold mb-1">
            ¿Cuál es su modo de transporte principal para desplazarse?
          </label>
          <div className="relative">
            <select className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none">
              <option>Transporte público</option>
              <option>Bicicleta</option>
              <option>A pie</option>
              <option>Otro (especifique)</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Question 5 */}
        <div>
          <label className="block font-semibold mb-1">
            ¿Tiene alguna discapacidad o condición que afecte su movilidad?
          </label>
          <div className="relative">
            <select className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none">
              <option>No</option>
              <option>Sí</option>
              <option>Prefiero no decirlo</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#1A2D47] text-white font-semibold px-4 py-2 rounded shadow hover:bg-blue-800 transition-colors disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-md p-6 w-full max-w-sm text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-xl font-bold mb-2 text-green-600">
                ¡Encuesta completada!
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                ¡Gracias por tu participación! Has ganado{" "}
                <span className="font-bold text-green-600">
                  {awardedPoints} puntos
                </span>{" "}
                por completar esta encuesta.
              </p>
              <button
                onClick={handleCloseModal}
                className="bg-[#1A2D47] text-white px-4 py-2 rounded font-semibold"
              >
                Cerrar
              </button>
              {/* Confetti */}
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={200}
                recycle={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
