'use client';
import React, { useState, useEffect, useRef } from 'react';
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        setShow(true);
        lastScroll.current = 0;
        return;
      }
      if (currentScroll > lastScroll.current) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="div"
        className="bg-black/80 text-white flex items-center px-6 py-3 rounded-full shadow-lg "
      >
        <div className="hidden md:flex space-x-7 text-lg font-semibold">
          <a onClick={() => scrollToId("home")}  className="hover:text-gray-400">Home</a>
          <a onClick={() => scrollToId("about")}   className="hover:text-gray-400">About</a>
          <a onClick={() => scrollToId("tech")}   className="hover:text-gray-400">Tech</a>
          <a onClick={() => scrollToId("projects")}   className="hover:text-gray-400">Projects</a>
          <a onClick={() => scrollToId("contact")}   className="hover:text-gray-400">Contact</a>
        </div>

        <div className="md:hidden flex items-center  ">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </HoverBorderGradient>

      {menuOpen && (
        <div className="md:hidden mt-2  bg-black/90 text-white rounded-lg shadow-lg px-6 py-4 space-y-4 text-center text-base font-medium">
          <a href="#home" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">Contact</a>
          <a href="#blog" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">Blog</a>
        </div>
      )}
    </div>
  );
}
