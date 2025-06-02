"use client";
import React from "react";
import { motion } from "framer-motion";

type SlotTextProps = {
  text: string;
  delayPerChar?: number; 
};

export default function FlipText({ text, delayPerChar = 0.1 }: SlotTextProps) {
  const letters = text.split("");

  return (
    <div className="flex gap-1">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ delay: i * delayPerChar, duration: 0.4 }}
          className="text-4xl text-center md:text-[6rem] font-bold mt-1 leading-none"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
