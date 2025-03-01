"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function LocalBusinessesSection() {
  // Mock data for demonstration
  const businesses = [
    {
      id: 1,
      name: "El Gato con Balcón",
      tagline: "Moda y diseño",
      image: "/mock/local_business/mock-3.webp",
      query: "El Gato con Balcón",
    },
    {
      id: 2,
      name: "El Machi Santanderino",
      tagline: "Rabas y cerveza",
      image: "/mock/local_business/mock-2.webp",
      query: "El Machi Santanderino",
    },
    {
      id: 3,
      name: "Mesón Rampalay",
      tagline: "Platos combinados",
      image: "/mock/local_business/mock-1.webp",
      query: "Mesón Rampalay",
    },
  ];

  // Duplicate the array to show more slides and emphasize looping
  const carouselData = [...businesses, ...businesses];

  return (
    <section className="bg-[#1A2D47] text-white p-4 mt-2">
      <h2 className="text-lg font-semibold mb-4">
        ¿Te apetece algo más local?
      </h2>

      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        style={{ height: "150px" }}
      >
        {carouselData.map((biz, index) => (
          <SwiperSlide key={`${biz.id}-${index}`}>
            <Link
              href={`/maps?search=${encodeURIComponent(biz.query)}`}
              className="block bg-white rounded-md shadow-md text-black overflow-hidden"
            >
              <Image
                src={biz.image}
                alt={biz.name}
                width={200}
                height={150}
                className="object-cover w-full h-auto"
              />
              <div className="p-2 bg-[#D9FDFF]">
                <h3 className="text-sm font-semibold">{biz.name}</h3>
                <p className="text-xs text-gray-600">{biz.tagline}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
