"use client";

import React, { useRef } from "react";
import { useInView } from "motion/react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function About() {
  const words =
    "I’m someone who sees coding as more than just syntax — it’s a powerful way to bring ideas to life and turn imagination into interactive experiences. Every challenge feels like a new level in an RPG, where learning, experimentation, and creativity go hand in hand. I’m especially drawn to clean design, smooth interactions, and building things that not only work well but feel right to use. Whether I’m refining a detail, solving a tricky bug, or exploring a new technology, I thrive in the process of creating meaningful, user-first experiences. I’m always exploring, always improving, and always ready to bring energy, focus, and curiosity to whatever I build next."
    const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: true });

  return (
    <div id="about" className="flex flex-col overflow-hidden bg-gradient-to-b from-black to-[#020617]" ref={containerRef}>
      <div className="absolute h-[90vh] mt-[25vh] mx-[10vw] w-[80vw] scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                About Me
              </span>
            </h1>
          </>
        }
      >
        <div className="max-w-5xl mx-auto text-white bg-black p-4 md:p-10 relative">
          {isInView && <TextGenerateEffect words={words} />}

          {/* 
          <a
            href="/cv.pdf" // Place your cv.pdf in the public/ folder
            download
            className="fixed md:absolute bottom-0 right-0 md:-bottom-20 md:-right-2 z-20 px-6 py-3 rounded-full bg-white/10 border border-white/30 backdrop-blur-md text-white font-semibold shadow-lg hover:bg-white/20 transition-all duration-200"
            style={{ fontFamily: 'inherit' }}
          >
            Download CV
          </a> */}
        </div>
      </ContainerScroll>
    </div>
  );
}
