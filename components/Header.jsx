import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import Nav from './Nav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-4xl font-semibold">
            ManhDo<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop navigation and Hire me */}

        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button className="ml-4" variant="outline">
                Hire me
              </Button>
            </Link>

        </div>


        {/* mobile navigation */}
        <div className="xl:hidden">
        
        </div>


      </div>
    </header>
  )
}

export default Header
