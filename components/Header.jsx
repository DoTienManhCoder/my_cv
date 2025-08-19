// components/Header.jsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header
      className="
        sticky top-0 z-50
        bg-primary/50 backdrop-blur-md
        border-b border-white/10
        text-white
      "
    >
      <div className="container mx-auto flex items-center justify-between h-16 xl:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <h1 className="text-2xl xl:text-3xl font-semibold px-2">
            <span className="text-accent">ManhDo</span>
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          <Button
            asChild
            size="sm"
            className="bg-accent hover:bg-accent/85 text-white shadow-md rounded-full px-5 uppercase tracking-wide"
          >
            <Link href="/contact">Hire me</Link>
          </Button>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
