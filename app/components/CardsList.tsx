"use client";

import { useState } from "react";
import MoreOptions from "./MoreOptions";

interface Card {
  id: number;
  name: string;
  detail: string;
}

interface CardsListProps {
  cards: Card[];
}

/**
 * Client component that renders the list of cards
 * and manages which "MoreOptions" menu is open.
 */
export default function CardsList({ cards }: CardsListProps) {
  // Tracks which card's menu is currently open (null if none)
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const handleToggleMenu = (cardId: number) => {
    // If you click the same card's dots again, it closes;
    // otherwise, it opens the new card and closes the previous one.
    setOpenCardId((prev) => (prev === cardId ? null : cardId));
  };

  return (
    <ul className="space-y-2">
      {cards.map((card) => (
        <li
          key={card.id}
          className="flex items-center justify-between bg-white p-2 rounded-md shadow-sm"
        >
          <div>
            <span className="block font-medium">{card.name}</span>
            <span className="block text-sm text-gray-500">{card.detail}</span>
          </div>
          <MoreOptions
            isOpen={openCardId === card.id}
            onToggle={() => handleToggleMenu(card.id)}
          />
        </li>
      ))}
    </ul>
  );
}
