// components/Nav.jsx
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 text-sm xl:text-base font-medium">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              relative px-3 py-2 rounded-md transition
              ${active ? "text-accent" : "text-white/90 hover:text-accent"}
              group
            `}
          >
            {link.label}
            <span
              className={`
                pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px]
                bg-accent rounded-full
                transform origin-left
                transition-[transform,opacity]
                ${active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
