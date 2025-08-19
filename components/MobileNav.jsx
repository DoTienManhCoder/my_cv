// components/MobileNav.jsx
"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        className="inline-flex items-center justify-center rounded-full h-10 w-10 ring-1 ring-white/15 hover:ring-white/30 bg-white/5"
        aria-label="Open menu"
      >
        <CiMenuFries className="text-[24px] text-accent" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[85%] sm:w-[380px] p-0 bg-primary text-white border-l border-white/10"
      >
        {/* Header */}
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <SheetHeader>
            <SheetTitle className="text-2xl font-semibold">
              <Link href="/" className="flex items-baseline gap-1">
                <span className="text-accent">ManhDo</span>
                <span className="text-accent">.</span>
              </Link>
            </SheetTitle>
          </SheetHeader>
        </div>

        {/* Nav list */}
        <nav className="px-6 py-6 flex flex-col gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    w-full px-4 py-3 rounded-lg text-base tracking-wide transition
                    ${active
                      ? "bg-accent/10 text-accent ring-1 ring-accent/40"
                      : "hover:bg-white/5 text-white/90"}
                    flex items-center justify-between
                  `}
                >
                  <span>{link.label}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      active ? "bg-accent" : "bg-white/30"
                    }`}
                  />
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
