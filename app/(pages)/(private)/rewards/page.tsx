import { FaStar } from "react-icons/fa";
import InteractiveRewardsList from "@/app/components/InteractiveRewardsList";

export default function Page() {
  const userPoints = 1600;

  const rewards = [
    {
      id: 1,
      title: "Goiko",
      description: "10% en cualquier hamburguesa de Goiko solo en domicilio",
      cost: 2890,
      src: "/mock/rewards/mock-1.webp",
    },
    {
      id: 2,
      title: "Museo Marítimo del Cantábrico",
      description: "Una entrada gratuita a menores de 16 años",
      cost: 4200,
      src: "/mock/rewards/mock-2.webp",
    },
    {
      id: 3,
      title: "Pizzería Britannia",
      description: "Tener 30% de descuento en nuestras pizzas seleccionadas",
      cost: 3150,
      src: "/mock/rewards/mock-3.webp",
    },
    {
      id: 4,
      title: "TUS",
      description: "5 viajes gratis en nuestro servicio TUS",
      cost: 3780,
      src: "/mock/rewards/mock-1.webp",
    },
    {
      id: 5,
      title: "Little Bobby",
      description: "5 partidas de mesa de Billar",
      cost: 2700,
      src: "/mock/rewards/mock-2.webp",
    },
    {
      id: 6,
      title: "El Gato en el Balcón",
      description: "2% de descuento en Chaquetas y Gabardinas",
      cost: 3350,
      src: "/mock/rewards/mock-3.webp",
    },
  ];

  return (
    <div className="bg-white text-black p-4">
      {/* Points and Title Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Recompensas</h2>
        <div className="flex items-center space-x-2">
          <span className="text-lg">{userPoints}</span>
          <FaStar className="text-[#80F8FE]" />
        </div>
      </div>

      <InteractiveRewardsList rewards={rewards} userPoints={userPoints} />
    </div>
  );
}
