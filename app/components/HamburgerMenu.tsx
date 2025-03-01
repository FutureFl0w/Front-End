"use client";

import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import HamburgerOptions from "@/app/components/HamburgerOptions";

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const notificationCount = 2; // Example: 2 notifications

  return (
    <div className="relative">
      <Hamburger toggled={menuOpen} toggle={setMenuOpen} color="#fff" size={30} />
      {/* Show badge on hamburger when menu is closed */}
      {!menuOpen && notificationCount > 0 && (
        <div className="absolute bottom-0 left-0 transform -translate-x-1/4 -translate-y-1/4 flex items-center justify-center bg-red-500 text-white rounded-full w-5 h-5 text-xs">
          {notificationCount}
        </div>
      )}
      <HamburgerOptions
        isOpen={menuOpen}
        onToggle={() => setMenuOpen((prev) => !prev)}
        notificationCount={notificationCount}
      />
    </div>
  );
}
