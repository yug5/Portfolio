"use client";
import About from "@/components/about";
import NavBar from "@/components/navBar";
import Tech from "@/components/tech";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Projects from "@/components/projects";
import { FadeInSection } from "@/components/ui/FadeIn";
import Contact from "@/components/contact";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import Blank from "@/components/blank";
import CursorTrail from "@/components/cursorTrail";

export default function Home() {
  return (
    <div className="text-white bg-black">
      <NavBar />
      <CursorTrail />
      <FadeInSection>
        <HeroParallax products={products} />
      </FadeInSection>
      <About />
      <div id="tech" className="sticky top-0 z-0 shadow-2xl">
        <Tech />
        
      </div>
      <div className="z-10">
        <Projects />
    
      </div>
    </div>
  );
}

export const products = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/_yug_shrimali_/",
    thumbnail: "img/insta.png",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/yug-shrimali/",
    thumbnail: "img/linkedin.png",
  },
  {
    title: "GitHub",
    link: "https://github.com/yug5",
    thumbnail: "img/github.png",
  },
  {
    title: "GeekForGeeks",
    link: "https://www.geeksforgeeks.org/user/yug_ud/",
    thumbnail: "img/gfg.png",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/yug_shrimali",
    thumbnail: "img/twitter.png",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/_yug_shrimali_/",
    thumbnail: "img/insta.png",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/yug-shrimali/",
    thumbnail: "img/linkedin.png",
  },
  {
    title: "GitHub",
    link: "https://github.com/yug5",
    thumbnail: "img/github.png",
  },
  {
    title: "GeekForGeeks",
    link: "https://www.geeksforgeeks.org/user/yug_ud/",
    thumbnail: "img/gfg.png",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/yug_shrimali",
    thumbnail: "img/twitter.png",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/_yug_shrimali_/",
    thumbnail: "img/insta.png",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/yug-shrimali/",
    thumbnail: "img/linkedin.png",
  },
  {
    title: "GitHub",
    link: "https://github.com/yug5",
    thumbnail: "img/github.png",
  },
  {
    title: "GeekForGeeks",
    link: "https://www.geeksforgeeks.org/user/yug_ud/",
    thumbnail: "img/gfg.png",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/yug_shrimali",
    thumbnail: "img/twitter.png",
  },
];

