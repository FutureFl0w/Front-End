interface NotificationCard {
    id: number;
    text: string;
    date: string;
    category: string;
  }
  
  interface NotificationCardsListProps {
    cards: NotificationCard[];
  }
  
  // Returns the classes for background, border, and text color
  function getCategoryClasses(category: string) {
    switch (category.toLowerCase()) {
      case "tarjetas":
        // Light aqua
        return "bg-[#A6F6FF] border-[#72E2EB] text-black";
      case "viajes":
        // Light pink
        return "bg-[#FFD7D7] border-[#FFBABA] text-black";
      case "encuesta":
        // Light green
        return "bg-[#C4FEC3] border-[#A0E8A0] text-black";
      case "eventos":
        // Light purple
        return "bg-[#E0BBE4] border-[#C48DCB] text-black";
      default:
        // Fallback gray
        return "bg-gray-200 border-gray-300 text-black";
    }
  }
  
  
  export default function NotificationCards({ cards }: NotificationCardsListProps) {
    return (
      <ul className="space-y-2">
        {cards.map((card, idx) => (
          <li key={card.id}>
            <div className="flex items-start justify-between bg-white p-3">
              {/* Left: Notification Text */}
              <div className="w-2/3 pr-2">
                <span className="block font-medium text-sm">{card.text}</span>
              </div>
  
              {/* Right: Date & Category */}
              <div className="flex flex-col items-end w-1/3">
                <span className="text-xs text-gray-500 mb-1">{card.date}</span>
                <span
                  className={`
                    inline-flex items-center justify-center
                    min-w-[70px] px-2 py-1 border
                    rounded-full text-xs font-medium text-center
                    ${getCategoryClasses(card.category)}
                  `}
                >
                  {card.category}
                </span>
              </div>
            </div>
            {/* Insert an hr between cards, except after the last one */}
            {idx < cards.length - 1 && <hr className="border-t border-gray-300" />}
          </li>
        ))}
      </ul>
    );
  }
  