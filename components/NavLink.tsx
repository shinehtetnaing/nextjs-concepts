"use client";

import { navlinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-x-5 text-[14px]">
        {navlinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-zinc-400 transition ${
                pathname === link.href ? "text-zinc-900" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLink;
