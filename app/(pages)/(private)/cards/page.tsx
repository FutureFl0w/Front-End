import CardsMenu from "@/app/components/CardsMenu";
import CardsPageList from "@/app/components/CardsPageList";


export default function CardsPage() {
  // Mock data for cards
  const cardsData = [
    {
      id: 1,
      title: "Trimestral Joven - Roja",
      cardId: "ES20018",
      vencimiento: "31/03/2030",
      saldo: "Activada hasta el 31 de Marzo",
    },
    {
      id: 2,
      title: "Estándar Recargable - Gris",
      cardId: "BO 0110000",
      vencimiento: "31/03/2028",
      saldo: "5,73 €",
    },
  ];

  return (
    <div className="bg-white min-h-screen p-4">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold">Mis Tarjetas</h1>
        <CardsMenu />
      </div>

      {/* Cards List */}
      <CardsPageList cards={cardsData} />
    </div>
  );
}
