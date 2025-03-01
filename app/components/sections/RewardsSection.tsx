"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar, FaArrowRight } from "react-icons/fa";
import "swiper/css";

export default function RewardsSection() {
  const mockRewards = [
    { id: 1, src: "/mock/rewards/mock-1.webp", alt: "Recompensa 1", cost: 500 },
    { id: 2, src: "/mock/rewards/mock-2.webp", alt: "Recompensa 2", cost: 750 },
    { id: 3, src: "/mock/rewards/mock-3.webp", alt: "Recompensa 3", cost: 1000 },
  ];

  const carouselData = [...mockRewards, ...mockRewards];

  return (
    <section className="bg-[#1A2D47] p-4 text-white my-5">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-semibold">Recompensas</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm">1600</span>
          <FaStar className="text-[#80F8FE]" />
          <Link href="/rewards" className="flex items-center gap-2 hover:underline">
            <span className="text-[12px]">Ver más</span>
            <FaArrowRight fontSize={24} />
          </Link>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="mt-4">
        <Swiper
          loop={true}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {carouselData.map((reward, index) => (
            <SwiperSlide key={`${reward.id}-${index}`}>
              <Link
                href="#"
                className="block relative bg-white rounded-md shadow-md text-black overflow-hidden"
              >
                <Image
                  src={reward.src}
                  alt={reward.alt}
                  width={200}
                  height={150}
                  className="rounded-md object-cover w-full h-auto"
                />
                {/* Overlay covering part of the bottom of the image */}
                <div className="absolute bottom-0 left-0 w-full bg-[#D9FDFF] bg-opacity-90 p-2">
                  <h3 className="text-sm font-semibold">{reward.alt}</h3>
                  <p className="text-xs text-gray-600">Costo: {reward.cost} pts</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
