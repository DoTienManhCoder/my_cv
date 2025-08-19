"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload, FiMail } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <>
    <section className="relative h-full">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-accent/60 via-purple-500/50 to-cyan-400/60" />
        <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-indigo-500/60 via-fuchsia-500/40 to-amber-400/50" />
      </div>

      <div className="container mx-auto h-full">
        <div
          className="
            flex flex-col justify-center items-center
            xl:flex-row xl:justify-between xl:items-start
            xl:pt-10 xl:pb-24 py-14
          "
        >
          {/* Text block */}
          <div className="w-full xl:w-1/2 text-center xl:text-left order-2 xl:order-none">
            {/* role badge */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-sm tracking-wide">Software Developer</span>
            </div>

            <h1 className="h1 mb-6">
              Hello, I&apos;m <br />
              <span className="text-accent drop-shadow-sm">Do Tien Manh</span>
            </h1>

            <p className="max-w-[560px] mx-auto xl:mx-0 mb-8 text-white/80 leading-relaxed">
              I build delightful, performant interfaces and scalable systems.
              Experienced in modern web stacks (React/Next.js, TypeScript) and
              product-minded engineering to ship features that matter.
            </p>

            {/* CTA buttons */}
            <div
              className="
    flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6
    items-center sm:items-center
    justify-center xl:justify-start
  "
            >
              {/* Primary */}
              <Button
                asChild
                size="lg"
                className="
                  uppercase flex items-center gap-2 border-white/30 border 
                 hover:bg-accent/50 text-accent rounded-full
                  shadow-lg shadow-accent/40 transition-all duration-300
                  
                "
                aria-label="Download my CV"
              >
                <Link href="/cv/Do_Tien_Manh_CV.pdf" download>
                  Download CV
                  <FiDownload
                    className="
                      text-2xl ml-2
                      text-yellow-300 drop-shadow-md 
                      group-hover:translate-y-0.5 group-hover:scale-110
                      transition-transform duration-300
                    "
                  />
                </Link>
              </Button>

              {/* Secondary */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="
      uppercase flex items-center gap-2 hover:bg-accent/50 rounded-full
      border-white/30 text-white shadow-lg shadow-accent/40
    "
                aria-label="Go to contact page"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>

            {/* Socials: mobile center → desktop left */}
            <Socials
              align="center"
              xlAlign="start"
              size="md"
              className="mb-8 xl:mb-0"
            />
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">

          <Photo />
          </div>
        </div>
      </div>
      {/* Decorative background blobs */}
      <Stats />
    </section>

    
    </>
  );
};

export default Home;
