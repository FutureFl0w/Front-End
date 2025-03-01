import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface Trip {
    id: number;
    inicio: string;
    final: string;
    dias: string;
    salida: string;
}

export default function SchedulerSection() {
    // Mock data for demonstration
    const mockTrips: Trip[] = [
        { id: 1, inicio: "Hogar", final: "PCTCAN", dias: "Lunes", salida: "8:57 am" },
        { id: 2, inicio: "Hogar", final: "PCTCAN", dias: "Martes", salida: "12:31 pm" },
        {
            id: 3,
            inicio: "PCTCAN",
            final: "Manuel Llane...",
            dias: "Martes",
            salida: "6:15 pm",
        },
    ];

    return (
        <section className="bg-white p-4 mb-8">
            {/* Header Row */}
            <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">Viajes Programados</h3>
                <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-500">Los más recientes</span>
                    <Link href="/scheduler" className="text-gray-500 hover:text-gray-700">
                        <FaArrowRight fontSize={24} />
                    </Link>
                </div>
            </div>

            {/* Table Container */}
            <div className="border border-gray-300 mt-4 overflow-x-auto rounded-md">
                <table className="w-full table-auto text-left border-collapse">
                    {/* Table Head */}
                    <thead className="border-b border-gray-300">
                        <tr>
                            <th className="py-2 px-2 text-sm font-medium text-gray-600">Inicio</th>
                            <th className="py-2 px-2 text-sm font-medium text-gray-600">Final</th>
                            <th className="py-2 px-2 text-sm font-medium text-gray-600">Día(s)</th>
                            <th className="py-2 px-2 text-sm font-medium text-gray-600">Salida</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {mockTrips.map((trip) => (
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
        </section>
    );
}
