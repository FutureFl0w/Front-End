"use client";

import { useEffect, useRef } from "react";
import { FaEllipsisV } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MoreOptionsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MoreOptions({ isOpen, onToggle }: MoreOptionsProps) {
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
    <div className="relative" ref={containerRef}>
      {/* Three dots button */}
      <button
        className="p-2 text-gray-500 hover:text-gray-700"
        onClick={onToggle}
      >
        <FaEllipsisV />
      </button>

      {/* Animated Submenu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md py-2 text-sm z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/cards/detail"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Ver Detalle
            </Link>
            <button
              onClick={() => alert("Recargar...")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Recargar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
