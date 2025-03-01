import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import CardsList from "../CardsHomeList";

export default function CardsSection() {
  // Mock data for demonstration
  const mockCards = [
    { id: 1, name: "Tarjeta Gris", detail: "5.73 €" },
    { id: 2, name: "Tarjeta Roja", detail: "Trimestre activo" },
    { id: 3, name: "Tarjeta Gris", detail: "8.23 €" },
  ];

  return (
    <section className="p-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">Mis Tarjetas</h3>
        {/* "Agregar Tarjeta" link (plus icon) */}
        <Link href="/cards" className="flex items-center gap-2 hover:underline">
            <span className="text-[12px]">Ver más</span>
            <FaArrowRight fontSize={24} />
          </Link>
      </div>

      <CardsList cards={mockCards} />
    </section>
  );
}
