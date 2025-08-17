"use client"
import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation';

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
];

const Nav = () => {

    const pathname = usePathname();
    return (
      <nav className="flex items-center gap-6 text-lg font-medium">
        {links.map((link, index) => {
          return (
            <Link href={link.href} key={index} className={`${link.href === pathname && "text-accent border-b-2 border-accent"} capitalize hover:text-accent transition-all font-medium`}>
              {link.label}
            </Link>
          );
        })}
      </nav>
    );
  };
  

export default Nav
