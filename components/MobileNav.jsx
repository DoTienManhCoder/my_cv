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
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>


      <SheetContent side="right" className="bg-primary text-white flex flex-col">
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile navigation</SheetTitle>
        </SheetHeader>

        <div className="mt-24 mb-10 text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-semibold">
              ManhDo<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="mt-10 text-center flex flex-col gap-4">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className={`px-2 py-3 text-lg transition-all ${
                    active
                      ? "text-accent font-medium"
                      : "text-white/90 hover:text-accent"
                  }`}
                >
                  {link.label}
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
