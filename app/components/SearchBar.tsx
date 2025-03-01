"use client";

import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (query.trim().length > 0) {
        router.push(`/maps?search=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <div className="flex items-center gap-2 bg-white rounded-md px-3 py-2 shadow-sm border border-gray-200">
      {/* Text Input */}
      <input
        type="text"
        placeholder="Empieza tu aventura"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-grow outline-none text-gray-700"
      />
      {/* Search Icon */}
      <FaSearch className="text-[#1A2D47]" />
    </div>
  );
}
