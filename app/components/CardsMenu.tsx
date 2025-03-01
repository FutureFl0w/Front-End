"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CardsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showImportForm, setShowImportForm] = useState(false);
  const [cardType, setCardType] = useState("Estándar Recargable");
  const [cardId, setCardId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showImportSuccess, setShowImportSuccess] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu if clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImportClick = () => {
    setIsOpen(false);
    setShowImportForm(true);
  };

  const handleSubmitImport = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a loading delay (e.g., API call)
    setTimeout(() => {
      setIsLoading(false);
      setShowImportForm(false);
      setShowImportSuccess(true);
      // Reset the form fields
      setCardType("Estándar Recargable");
      setCardId("");
    }, 1500);
  };

  return (
    <>
      {/* Main Menu */}
      <div className="relative" ref={menuRef}>
        <button
          className="p-2 text-gray-600 hover:text-gray-800"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FaEllipsisV />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute right-0 mt-2 w-[120px] bg-white border border-gray-200 rounded shadow-md z-50"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              <Link
                href="/cards/add"
                className="block px-3 py-2 text-sm hover:bg-gray-100"
              >
                Añadir nueva
              </Link>
              <button
                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                onClick={handleImportClick}
              >
                Importar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Import Form Modal */}
      <AnimatePresence>
        {showImportForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-md p-6 w-full max-w-sm"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h2 className="text-lg font-bold mb-4">Importar Tarjeta</h2>
              <form onSubmit={handleSubmitImport} className="space-y-4">
                <div>
                  <label htmlFor="cardType" className="block mb-1 font-semibold">
                    Tipo de tarjeta
                  </label>
                  <div className="relative">
                    <select
                      id="cardType"
                      className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
                      value={cardType}
                      onChange={(e) => setCardType(e.target.value)}
                    >
                      <option>Estándar Recargable</option>
                      <option>Peque Tus de 4 a 7</option>
                      <option>Familia Numerosa</option>
                      <option>Trimestral Joven</option>
                      <option>
                        Personas con Discapacidad igual o superior al 33% y el 64%
                      </option>
                    </select>
                    <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="cardId" className="block mb-1 font-semibold">
                    Card ID
                  </label>
                  <input
                    type="text"
                    id="cardId"
                    placeholder="Ingrese Card ID"
                    value={cardId}
                    onChange={(e) => setCardId(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Extra option for taking/uploading a photo if card is not "Estándar Recargable" */}
                {cardType !== "Estándar Recargable" && (
                  <div>
                    <label className="block mb-1 font-semibold">
                      Foto de la tarjeta
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full text-sm text-gray-600 file:mr-2 file:py-2 file:px-3 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                )}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowImportForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded text-sm"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1A2D47] text-white rounded text-sm"
                    disabled={isLoading}
                  >
                    {isLoading ? "Importando..." : "Importar"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showImportSuccess && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-md p-6 w-full max-w-sm text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h2 className="text-xl font-bold mb-4">¡Tarjeta Importada!</h2>
              <p className="mb-4 text-sm text-gray-600">
                Tu tarjeta ha sido importada con éxito. Revisa tu perfil para ver
                los detalles.
              </p>
              <button
                onClick={() => setShowImportSuccess(false)}
                className="bg-[#1A2D47] text-white px-4 py-2 rounded font-semibold"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
