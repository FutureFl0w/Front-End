"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import Lottie with SSR disabled.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ExtraInfoSection() {
  const [busAnimation, setBusAnimation] = useState<any>(null);

  useEffect(() => {
    async function fetchAnimation() {
      const response = await fetch("/lottie/bus.json");
      const data = await response.json();
      setBusAnimation(data);
    }
    fetchAnimation();
  }, []);

  return (
    <section
      className="relative w-full min-h-[250px] bg-cover bg-center text-black"
      style={{
        backgroundImage: "url('/backgrounds/extra-info.webp')",
      }}
    >
      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0" />

      {/* Content container */}
      <div className="relative z-10 max-w-3xl mx-auto p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-4">¡Conoce más a Santander!</h2>
        <p className="mb-4">
          Tenemos varios sitios webs a los que puedes descubrir algunas joyas de nuestra ciudad:
        </p>
        <ul className="space-y-2 text-lg">
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="https://santander.info"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              santander.info
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="https://descubresantander.es"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              descubresantander.es
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="https://santander.es"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              santander.es
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="https://turismo.santander.es"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              turismo.santander.es
            </a>
          </motion.li>
        </ul>
      </div>

      {/* Lottie animation at the bottom (e.g., bus or bicycle) */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 pointer-events-none">
        {busAnimation && (
          <Lottie
            animationData={busAnimation}
            loop={true}
            autoplay={true}
            style={{ background: "transparent" }}
            className="w-full h-full"
          />
        )}
      </div>
    </section>
  );
}
