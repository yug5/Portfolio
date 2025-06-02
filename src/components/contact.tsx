"use client";
import { AnimatePresence, motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react'

export default function Contact() {
  return (
    <div className="bg-black h-[10vh]">
      <ContactMe />
      <footer className="w-full mt-16 text-center text-gray-400 text-sm opacity-80">
        &copy; {new Date().getFullYear()} yug shrimali
      </footer>
    </div>
  );
}


export function ContactMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [sent, setSent] = useState(false);

  // Button will follow mouse inside the section
  const handleSectionMouseMove = (e: React.MouseEvent) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setBtnPos({ x: x * 0.28, y: y * 0.28 }); // increased multiplier for farther movement
  };

  const handleSectionMouseLeave = () => setBtnPos({ x: 0, y: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_xh4dvwg',    // your EmailJS service ID
        'template_hopm0gk',   // your EmailJS template ID
        formRef.current,
        'GFxXIf5bkm487VUoz'   // your EmailJS public key
      )
      .then(
        () => {
          setIsOpen(false); // Close the "Let's Connect" modal
          setSent(true);    // Show the Thank You popup
          formRef.current?.reset(); // Optionally reset the form
        },
        () => { // removed 'error' parameter
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col z-50 items-center justify-center w-full relative  bottom-0"
      id='contact'
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

      <motion.button
        className="relative justify-center items-center text-center z-10 px-6 py-3 md:px-12 md:py-6 mb-12 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white text-2xl font-bold shadow-2xl overflow-hidden border-4 border-transparent hover:border-blue-400 transition-all"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
        }}
        onClick={() => setIsOpen(true)}
        animate={{
          x: btnPos.x,
          y: [btnPos.y, btnPos.y - 12, btnPos.y, btnPos.y + 12, btnPos.y],
          scale: isOpen ? 0.95 : 1,
        }}
        transition={{
          x: { type: "spring", stiffness: 400, damping: 12 }, // faster follow
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          },
          scale: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        <span className="relative z-20">Let&apos;s Talk!</span>
        
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
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
                Let&apos;s Connect!
              </h2>
              <p className="text-neutral-300 text-base md:text-lg mb-8 max-w-xl text-center">
                🚀 Drop your message and I&apos;ll get back to you soon!
              </p>
              <form
                ref={formRef}
                className="space-y-6"
                onSubmit={handleSubmit}
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
                    name="name"
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
                    name="email"
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
                    name="message"
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

      {/* Thank You Popup - always outside modal AnimatePresence */}
      {sent && <ThankYouPopup onClose={() => setSent(false)} />}

      {/* Footer */}
      
    </div>
  );
}

const ThankYouPopup = React.memo(function ThankYouPopup({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(onClose, 1000);
    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-[#232347] to-[#181830] rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center max-w-xs w-full border-2 border-blue-600">
        <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 shadow-lg text-white text-2xl font-bold hover:bg-red-600 transition"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-extrabold text-blue-400 mb-2 text-center drop-shadow-lg">
          Thank you!
        </h2>
        <p className="text-neutral-200 text-lg text-center mb-2">
          I will contact you soon.
        </p>
      </div>
    </div>
  );
});