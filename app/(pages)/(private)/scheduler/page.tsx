"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface Trip {
  id: number;
  inicio: string;
  final: string;
  dias: string;
  salida: string;
}

export default function SchedulerPage() {
  // Generate mock data (50 trips)
  const generateMockTrips = (): Trip[] => {
    const trips: Trip[] = [];
    for (let i = 1; i <= 50; i++) {
      trips.push({
        id: i,
        inicio: i % 2 === 0 ? "Hogar" : "Oficina",
        final: i % 3 === 0 ? "PCTCAN" : "Centro",
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"][i % 5],
        salida: `${8 + (i % 5)}:${(i * 3) % 60 < 10 ? "0" : ""}${(i * 3) % 60} ${
          i % 2 === 0 ? "am" : "pm"
        }`,
      });
    }
    return trips;
  };

  const allTrips = useMemo(() => generateMockTrips(), []);
  const [currentPage, setCurrentPage] = useState(1);
  const tripsPerPage = 10;
  const totalPages = Math.ceil(allTrips.length / tripsPerPage);

  const currentTrips = useMemo(() => {
    const start = (currentPage - 1) * tripsPerPage;
    return allTrips.slice(start, start + tripsPerPage);
  }, [allTrips, currentPage, tripsPerPage]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-white p-4">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold">Viajes Programados</h1>
      </div>

      {/* Table Container */}
      <div className="border border-gray-300 mt-4 overflow-x-auto rounded-md">
        <table className="w-full table-auto text-left border-collapse">
          <thead className="border-b border-gray-300">
            <tr>
              <th className="py-2 px-2 text-sm font-medium text-gray-600">
                Inicio
              </th>
              <th className="py-2 px-2 text-sm font-medium text-gray-600">
                Final
              </th>
              <th className="py-2 px-2 text-sm font-medium text-gray-600">
                Día(s)
              </th>
              <th className="py-2 px-2 text-sm font-medium text-gray-600">
                Salida
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTrips.map((trip) => (
              <tr
                key={trip.id}
                className="border-b last:border-b-0 border-gray-100 bg-white"
              >
                <td className="py-2 px-2 text-sm">{trip.inicio}</td>
                <td className="py-2 px-2 text-sm">{trip.final}</td>
                <td className="py-2 px-2 text-sm">{trip.dias}</td>
                <td className="py-2 px-2 text-sm">{trip.salida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4 max-w-md mx-auto">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="text-sm text-gray-600">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
