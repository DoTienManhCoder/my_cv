"use client";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

/* -------- DATA -------- */
const about = {
  title: "About Me",
  description:
    "I am a passionate web developer with a focus on creating dynamic and responsive web.",
  info: [
    { fieldName: "Name", fieldValue: "Do Tien Manh" },
    { fieldName: "Phone", fieldValue: "(+84) 353 830 397" },
    { fieldName: "Email", fieldValue: "dotienmanh070104@gmail.com" },
    { fieldName: "Address", fieldValue: "HoChiMinh, Vietnam" },
    { fieldName: "Github", fieldValue: "https://github.com/DoTienManhCoder" },
    {
      fieldName: "LinkedIn",
      fieldValue: "https://www.linkedin.com/in/do-tien-manh-7b0a1b1b6/",
    },
  ],
};

// 👉 Experience nên là công ty / vai trò / nhiệm vụ
const experience = {
  icon: "assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I’ve contributed to projects across frontend and full-stack, focusing on performance and clean UI.",
  items: [
    {
      company: "Side Project – Portfolio",
      position: "Frontend Developer (React/Next.js)",
      duration: "2024 – Present",
    },
    {
      company: "Freelance",
      position: "Full-stack Developer (Next.js/Node.js/MongoDB)",
      duration: "2024",
    },
    {
      company: "Open Source",
      position: "Contributor (UI Components/Tailwind)",
      duration: "2023 – 2024",
    },
  ],
};

// 👉 Education mới là trường / bằng cấp
const education = {
  icon: "assets/resume/cap.svg",
  title: "My Education",
  description:
    "Formal training and self-learning focused on web technologies and software engineering fundamentals.",
  items: [
    {
      institution: "University of Science",
      position: "B.Sc. in Computer Science",
      duration: "2022 – Present",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Core stack for building responsive, maintainable, and performant web apps.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ],
};

/* -------- COMPONENT -------- */
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 0.2, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">

        <Tabs
          defaultValue="experience"
          className="grid grid-cols-1 xl:grid-cols-3"
        >

          <TabsList className="col-span-1 flex flex-col w-full max-w-[420px] xl:max-w-none mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          

          <div className="col-span-2 min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience">
              <div className="flex flex-col text-center gap-6 xl:text-left xl:mx-6 mt-6 xl:mt-0">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[420px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 pr-2">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-6 rounded-xl flex flex-col justify-between items-center lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education">
              <div className="flex flex-col text-center gap-6 xl:text-left xl:mx-6 mt-6 xl:mt-0">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[420px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 pr-2">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-6 rounded-xl flex flex-col justify-between items-center lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.institution}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                          <p className="text-white/60">{item.position}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills">
              <div className="flex flex-col items-center xl:items-start xl:mx-6 mt-6 xl:mt-0">
                <h2 className="text-3xl font-bold mb-3">{skills.title}</h2>
                <p className="text-white/70 mb-6 max-w-[600px] text-center xl:text-left">
                  {skills.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <TooltipProvider key={index} delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="flex flex-col items-center justify-center bg-[#232329] rounded-xl w-[150px] h-[150px] group ">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize text-sm text-center">
                            {skill.name}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left xl:mx-6 mt-6 xl:mt-0"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[730px] gap-16 mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    const formatUrl = (url) => {
                      try {
                        const u = new URL(url);
                        return u.hostname.replace("www.", "") + u.pathname;
                      } catch {
                        return url;
                      }
                    };

                    const isLink =
                      item.fieldName === "Github" ||
                      item.fieldName === "LinkedIn";

                    return (
                      <li
                        key={index}
                        className="flex items-center gap-4 justify-center xl:justify-start"
                      >
                        <span className="text-accent shrink-0">
                          {item.fieldName}:
                        </span>
                        {isLink ? (
                          <a
                            href={item.fieldValue}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-accent underline break-all"
                          >
                            {formatUrl(item.fieldValue)}
                          </a>
                        ) : (
                          <span className="text-white/70 break-words break-all text-left">
                            {item.fieldValue}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
