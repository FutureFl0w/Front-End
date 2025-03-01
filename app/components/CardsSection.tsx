import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import CardsList from "./CardsList";

export default function CardsSection() {
  // Mock data for demonstration
  const mockCards = [
    { id: 1, name: "Tarjeta Gris", detail: "5.73 €" },
    { id: 2, name: "Tarjeta Roja", detail: "Trimestre activo" },
    { id: 3, name: "Tarjeta Gris", detail: "8.23 €" },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-semibold">Mis Tarjetas</h3>
        {/* "Agregar Tarjeta" link (plus icon) */}
        <Link
          href="/cards/add"
          className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1A2D47] text-white"
        >
          <FaPlus />
        </Link>
      </div>

      <CardsList cards={mockCards} />
    </section>
  );
}
