"use client";

import { FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface CardData {
  id: number;
  title: string;
  cardId: string;
  vencimiento: string;
  saldo: string;
}

interface CardsListProps {
  cards: CardData[];
}

export default function CardsPageList({ cards }: CardsListProps) {
  const router = useRouter();

  const handleViewDetails = (cardId: number) => {
    router.push(`/cards/details/${cardId}`);
  };

  return (
    <div className="space-y-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white border border-gray-200 rounded p-3 shadow-sm"
        >
          {/* Title & Eye Icon */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-sm">{card.title}</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => handleViewDetails(card.id)}
            >
              <FaEye size={24} />
            </button>
          </div>

          {/* Card Details */}
          <p className="text-xs text-gray-700">
            <span className="block">ID {card.cardId}</span>
            <span className="block">
              <strong>Vencimiento</strong> {card.vencimiento}
            </span>
            <span className="block">
              <strong>Saldo</strong> {card.saldo}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
