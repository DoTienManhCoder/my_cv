"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "E-commerce",
    myAgent: "Frontend",
    title: "Project web",
    description:
      "Developed and optimized the frontend of an e-commerce website using React, and TailwindCSS, focusing on responsive design, seamless user experience, and integration with RESTful APIs for real-time product, cart, and checkout functionalities.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb1.png",
    live: "https://manzy-store-38lv.onrender.com/",
    github: "https://github.com/Web-Team-Manzy/Manzy-Store?tab=readme-ov-file",
  },
  {
    num: "02",
    category: "fullstack",
    myAgent: "Frontend",
    title: "Project 2",
    description: "A modern and interactive dashboard designed to visualize data and manage workflows efficiently.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb2.png",
    live: "https://dashboard-dun-nine-51.vercel.app/",
    github: "https://github.com/DoTienManhCoder/dashboard",
  },
  {
    num: "03",
    category: "Portfolio",
    myAgent: "Sole Developer",
    title: "Project personal",
    description:
      "Built a personal portfolio website with React, Next.js, and TailwindCSS to showcase projects, skills, and experience. Designed a responsive and modern UI with smooth animations, optimized performance, and integrated contact form functionality to enhance personal branding.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb3.png",
    live: "https://example.com/project-one",
    github: "https://github.com/DoTienManhCoder/my_cv",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* my agent */}
              <h3 className="text-xl font-semibold text-white/80">
                My role in this project was{" "}
                <span className="text-accent font-bold italic underline decoration-accent/50">
                  {project.myAgent}
                </span>
              </h3>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove ,*/}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border-b border-white/20"></div>

              {/* button */}
              <div className="flex items-center gap-4">
                {/* Live button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white/5 group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white/5 group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[560px] relative group flex items-center justify-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image */}
                      <div className="relative w-full h-full bg-primary flex items-center justify-center">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slide button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
