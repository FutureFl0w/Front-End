"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import { FaMap, FaUser, FaAward, FaCalendarAlt } from "react-icons/fa";
import { TbCardsFilled } from "react-icons/tb";

interface NavLink {
  href: string;
  Icon: IconType;
  alt: string;
}

export default function Footer() {
  const pathname = usePathname();

  const links: NavLink[] = [
    { href: "/profile", Icon: FaUser, alt: "Profile" },
    { href: "/scheduler", Icon: FaCalendarAlt, alt: "Scheduler" },
    { href: "/cards", Icon: TbCardsFilled, alt: "Cards" },
    { href: "/maps", Icon: FaMap, alt: "Maps" },
    { href: "/rewards", Icon: FaAward, alt: "Rewards" },
  ];

  return (
    <footer className="bg-[#1A2D47] p-6">
      <nav className="flex justify-around">
        {links.map((link) => {
          const active = pathname.includes(link.href);
          return (
            <Link key={link.href} href={link.href}>
              <link.Icon
                size={24}
                color={active ? "#86F9FF" : "#FFFFFF"}
                className="cursor-pointer"
                aria-label={link.alt}
              />
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}
