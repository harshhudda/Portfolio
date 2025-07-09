// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-base-100 pt-20 px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Harsh Hudda
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mt-4 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Full-Stack Developer | Competitive Programmer | ECE @ IIT BHU
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a href="/Harsh_Hudda_Resume.pdf" target="_blank" className="btn btn-primary">View Resume</a>
        <a href="https://github.com/harshhudda" target="_blank" className="btn btn-outline">GitHub</a>
        <a href="https://www.linkedin.com/in/huddaharsh" target="_blank" className="btn btn-outline">LinkedIn</a>
      </motion.div>
    </section>
  );
}
