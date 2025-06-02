"use client";
import React, { useEffect, useRef } from "react";

const TRAIL_LENGTH = 16;
const BASE_SIZE = 20; 

export default function CursorTrail() {
  const dots = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({
      x: 0,
      y: 0,
      size: BASE_SIZE,
      el: null as HTMLDivElement | null,
    }))
  );
  const mouse = useRef({ x: 0, y: 0 });
  const frame = useRef(0);

  useEffect(() => {
    // Hide the default cursor everywhere, even on clickable elements
    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    // Create dot elements
    dots.current.forEach((dot, i) => {
      const el = document.createElement("div");
      el.className =
        "pointer-events-none fixed z-[9999] bg-white rounded-full opacity-80 transition-transform duration-75";
      el.style.width = `${BASE_SIZE - (i * (BASE_SIZE / TRAIL_LENGTH))}px`;
      el.style.height = `${BASE_SIZE - (i * (BASE_SIZE / TRAIL_LENGTH))}px`;
      el.style.left = "0px";
      el.style.top = "0px";
      el.style.transform = "translate(-50%, -50%)";
      document.body.appendChild(el);
      dot.el = el;
    });

    const animate = () => {
      let { x, y } = mouse.current;
      dots.current.forEach((dot, i) => {
        if (i === 0) {
          // First dot snaps to mouse (acts as cursor)
          dot.x = x;
          dot.y = y;
        } else {
          // Other dots trail smoothly
          const prev = dots.current[i - 1];
          dot.x += (prev.x - dot.x) * 0.35;
          dot.y += (prev.y - dot.y) * 0.35;
        }
        // Size decreases with index
        const size = BASE_SIZE - (i * (BASE_SIZE / TRAIL_LENGTH));
        dot.el!.style.width = `${size}px`;
        dot.el!.style.height = `${size}px`;
        dot.el!.style.left = `${dot.x}px`;
        dot.el!.style.top = `${dot.y}px`;
        dot.el!.style.opacity = `${0.8 - i * (0.5 / TRAIL_LENGTH)}`;
      });
      frame.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      dots.current.forEach((dot) => {
        if (dot.el) document.body.removeChild(dot.el);
      });
      cancelAnimationFrame(frame.current);
      // Restore cursor
      document.body.style.cursor = "";
      document.documentElement.style.cursor = "";
    };
  }, []);

  return null;
}
