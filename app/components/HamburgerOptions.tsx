"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface HamburgerOptionsProps {
  isOpen: boolean;
  onToggle: () => void;
  notificationCount: number;
}

export default function HamburgerOptions({
  isOpen,
  onToggle,
  notificationCount,
}: HamburgerOptionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the menu if clicking outside the component
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        if (isOpen) {
          onToggle();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  // Define animation variants for the submenu
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="absolute right-0 mt-2" ref={containerRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-48 bg-white shadow-lg rounded-md py-2 text-sm z-50 text-black"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/notifications"
              className="relative block px-4 py-2 hover:bg-gray-100"
            >
              Notificaciones
              {notificationCount > 0 && (
                <span className="absolute top-2 right-4 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </Link>

            {/* New Encuestas link with purple badge */}
            <Link
              href="/rewards/surveys"
              className="relative block px-4 py-2 hover:bg-gray-100"
            >
              Encuestas
              <span className="absolute top-2 right-4 bg-purple-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                1
              </span>
            </Link>

            <Link
              href="/profile/settings"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Configuración de cuenta
            </Link>
            <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
              Cerrar sesión
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
