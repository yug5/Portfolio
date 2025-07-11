"use client";
import {
  useScroll,
  useTransform,
  motion,
  
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Contact from "../contact";

interface TimelineEntry {
  
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Show only 5 by default
  const [showAll, setShowAll] = useState(false);
  const visibleData = showAll ? data : data.slice(0, 5);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, visibleData.length, showAll, data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div>
      <div
        className="w-full z-10 bg-gradient-to-b from-black to-[#020617] font-sans md:px-10 mb-5"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
  <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-bold">
    My Development Journey
  </h2>
  <p className="text-neutral-300 text-sm md:text-base max-w-xl">
    A timeline of my tech journey — from playful ideas to powerful builds
      </p>
</div>


        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {visibleData.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-gray-800 border border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
          {/* Show More Button */}
          {!showAll && data.length > 5 && (
            <div className="flex justify-center mt-8">
              <button
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
                onClick={() => {
                  setShowAll(true);
                  setTimeout(() => {
                    if (ref.current) {
                      // Use scrollHeight for full content height
                      setHeight(ref.current.scrollHeight);
                    }
                  }, 50); // Wait for DOM update
                }}
              >
                Show More
              </button>
            </div>
          )}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};
