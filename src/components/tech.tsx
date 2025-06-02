"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Icon } from "@iconify/react";

export default function Tech() {
  const techIcons = [
    { name: "C", icon: "logos:c" },
    { name: "Next.js", icon: "logos:nextjs" },
    { name: "React", icon: "logos:react" },
    { name: "Java", icon: "logos:java" },
    { name: "Python", icon: "logos:python" },
    { name: "Firebase", icon: "logos:firebase" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "MySQL", icon: "logos:mysql" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "Android", icon: "logos:android-icon" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "HTML5", icon: "logos:html-5" },
    { name: "", icon: "" },
    { name: "CSS3", icon: "logos:css-3" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "GitHub", icon: "logos:github-icon" },
    { name: "Socket.IO", icon: "logos:socket-io" },
  ];

  return (
    <div id="tech" className="bg-[#020617] min-h-screen flex flex-col items-center justify-center px-6">
      

      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-20"
        >
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full cursor-pointer hover:scale-110 transition-transform duration-300"
              title={tech.name}
            >
              <Icon icon={tech.icon} width={80} height={80} className="text-white" />
              <span className="text-sm text-gray-300 mt-2 text-center">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </LampContainer>
     
    </div>
  );
}

