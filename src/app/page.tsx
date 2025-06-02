"use client";
import About from "@/components/about";
import NavBar from "@/components/navBar";
import Tech from "@/components/tech";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Projects from "@/components/projects";
import { FadeInSection } from "@/components/ui/FadeIn";

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
      <div id="tech" className="sticky -top-24 z-0 shadow-2xl">
        <Tech />
        
      </div>
      <div className="z-10">
        <Projects />
    
      </div>
    </div>
  );
}

const products = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/_yug_shrimali_/",
    thumbnail: "img/insta.png",
  },
  {
    title: "HackerRank",
    link: "https://www.hackerrank.com/yugshrimali82",
    thumbnail: "img/hackerRank.png",
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
    title: "CodeForce",
    link: "https://codeforces.com/profile/yugshrimali",
    thumbnail: "img/codeforces.png",
  },
  {
    title: "Medium",
    link: "https://medium.com/@yugshrimali82",
    thumbnail: "img/medium.png",
  },
  
  {
    title: "Figma",
    link: "https://www.figma.com/",
    thumbnail: "img/figma.png",
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
    title: "protfolio",
    link: "https://yugshrimali.vercel.app/",
    thumbnail: "img/port.png",
  },
  {
    title: "Gmail",
    link: "https://www.geeksforgeeks.org/user/yug_ud/",
    thumbnail: "img/gmail.png",
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com",
    thumbnail: "img/youtube.png",
  },
  {
    title: "vercel",
    link: "https://vercel.com/",
    thumbnail: "img/vercel.png",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/_yug_shrimali_/",
    thumbnail: "img/insta.png",
  },
  {
    title: "Stack Overflow",
    link: "https://stackoverflow.com/users/22162622/yug-shrimali",
    thumbnail: "img/stackoverflow.png",
  },
  // {
  //   title: "Twitter",
  //   link: "https://twitter.com/yug_shrimali",
  //   thumbnail: "img/x.png",
  // },
  
  
  

];

