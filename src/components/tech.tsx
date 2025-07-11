"use client";
import React from "react";
import { motion} from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Icon } from "@iconify/react";


export default function Tech() {
  const techIcons = [
    { name: "C", icon: "logos:c" },
    { name: "Java", icon: "logos:java" },
    { name: "Next.js", icon: "logos:nextjs" },
    { name: "Kotlin", icon: "logos:kotlin" },
    { name: "Python", icon: "logos:python" },
    { name: "Firebase", icon: "logos:firebase" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "React", icon: "logos:react" },
    { name: "MySQL", icon: "logos:mysql" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "Android", icon: "logos:android-icon" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "HTML5", icon: "logos:html-5" },
    { name: "CSS3", icon: "logos:css-3" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "Socket.IO", icon: "logos:socket-io" },
    { name: "GitHub", icon: "logos:github-icon" },
    { name: "PHP", icon: "logos:php" },
    { name: "Linux", icon: "logos:linux-tux" },
    


  ];

  return (
    <div
      id="tech1"
      className="scroll-m-24 bg-[#020617] flex flex-col items-center justify-center w-full px-2 sm:px-6 py-8 sm:py-12"
    >
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-4 md:gap-12 "
        >
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300
      basis-1  md:basis-1/6"
              title={tech.name}
            >
              <Icon
                icon={tech.icon}
                className="text-white w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24"
              />
              <span className="hidden md:block text-xs md:text-sm text-gray-300 mt-2 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </LampContainer>
    </div>
  );
}

