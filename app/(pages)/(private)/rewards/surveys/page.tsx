"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RewardsSection from "@/app/components/sections/RewardsSection";

// Mocked list of active surveys
const surveys = [
  {
    id: 1,
    title: "Encuesta Demográfica: Perfil Ciudadano para un Santander Sostenible",
  },
  {
    id: 2,
    title: "Movilidad Activa en Santander: Evaluación de Ciclovías y Espacios Peatonales",
  },
  {
    id: 3,
    title: "Sostenibilidad Urbana en Santander: Opiniones sobre Zonas de Bajas Emisiones y Peajes",
  },
];

export default function SurveysPage() {
  return (
    <div className="bg-white flex flex-col">
      {/* Top Section with background */}
      <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden">
        <Image
          src="/backgrounds/survery-top.svg"
          alt="Survey Top Background"
          fill
          className="object-cover object-center block m-0 p-0"
        />
        {/* Overlay text */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center text-black mt-4">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">
            ¡Bienvenidos a las Encuestas!
          </h1>
          <p className="text-sm sm:text-base max-w-md leading-relaxed">
            ¡Participa y gana! Al completar nuestras encuestas, acumulas puntos 
            que se transforman en recompensas increíbles. Además, tu opinión es clave 
            para que Santander evolucione y se adapte a sus verdaderas necesidades. 
            ¡Únete al cambio y haz que tu voz cuente!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-6 max-w-xl mx-auto w-full">
        {/* Placeholder for your future rewards component */}
        <RewardsSection />

        {/* Active Surveys Section */}
        <h2 className="text-base sm:text-lg font-semibold mt-8 px-4">
          Encuestas Activas
        </h2>
        <div className="space-y-3 p-4">
          {surveys.map((survey) => (
            <Link href={`/rewards/surveys/${survey.id}`} key={survey.id} className="block">
              <motion.div
                className="bg-white rounded shadow-sm border border-gray-200 p-3 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-sm sm:text-base text-gray-700">
                  {survey.title}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
