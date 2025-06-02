"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div>

    <div
      className="w-full z-10 bg-gradient-to-b from-black to-[#020617] font-sans md:px-10 mb-[40vh]"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
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
              
              {item.content}{" "}
            </div>
          </div>
        ))}
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
    
      </div>
          
  );
};

export function ContactMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);

  // Button will follow mouse inside the section
  const handleSectionMouseMove = (e: React.MouseEvent) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setBtnPos({ x: x * 0.15, y: y * 0.15 }); // adjust multiplier for sensitivity
  };

  const handleSectionMouseLeave = () => setBtnPos({ x: 0, y: 0 });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center w-full py-16 relative"
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
    >
      {/* Creative Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center drop-shadow-lg">
        Contact <span className="text-blue-400">Me</span>
      </h2>
      <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2 text-center">
        Yug Shrimali
      </h3>
      <p className="text-neutral-300 text-lg md:text-xl mb-8 max-w-2xl text-center">
        🚀 Let’s build something amazing together! Whether you have an idea, a project, or just want to say hi, I’m always excited to connect with creative minds and passionate people.
      </p>

      {/* Magnetic Button that follows mouse in section */}
      <motion.button
        className="relative z-10 px-12 py-6 mb-12 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white text-2xl font-bold shadow-2xl overflow-hidden border-4 border-transparent hover:border-blue-400 transition-all"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
        }}
        onClick={() => setIsOpen(true)}
        animate={{ x: btnPos.x, y: btnPos.y, scale: isOpen ? 0.95 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span className="relative z-20">Let's Talk!</span>
        {/* Animated background blobs */}
        <motion.span
          className="absolute -top-10 -left-10 w-32 h-32 bg-purple-400 opacity-30 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 opacity-30 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.button>

      {/* Creative Modal Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black" // changed here
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-[#232347] to-[#181830] rounded-3xl shadow-2xl p-10 w-full max-w-xl mx-4"
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Animated floating blobs */}
              <motion.div
                className="absolute -top-12 -left-12 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-2xl pointer-events-none"
                animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-2xl pointer-events-none"
                animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              />

              <button
                className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg transition"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center drop-shadow-lg">
                Let's Connect!
              </h2>
              <p className="text-neutral-300 text-base md:text-lg mb-8 max-w-xl text-center">
                🚀 Drop your message and I'll get back to you soon!
              </p>
              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault();
                  setIsOpen(false);
                  // You can add your form submission logic here
                }}
              >
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="name" className="text-gray-300 font-semibold">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="p-3 rounded-xl bg-[#232347] border border-blue-500/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="email" className="text-gray-300 font-semibold">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="p-3 rounded-xl bg-[#232347] border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    placeholder="you@email.com"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="text-gray-300 font-semibold">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="p-3 rounded-xl bg-[#232347] border border-blue-500/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Type your message..."
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-bold text-lg shadow-xl hover:scale-105 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send ✉️
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full mt-16 text-center text-gray-400 text-sm opacity-80">
        &copy; {new Date().getFullYear()} yug shrimali
      </footer>
      
    </div>
  );
}
