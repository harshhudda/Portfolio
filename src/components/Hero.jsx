// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <div id="hero" className="relative h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
          <div></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          {/* Heading */}
          <motion.h1
            className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sky-900">Harsh Hudda</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mx-auto mb-8 max-w-2xl text-lg text-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Third-year B.Tech student at IIT BHU, passionate about full-stack web development and competitive programming. Experienced in building and deploying MERN stack projects with integrations like Stripe, OpenAI API, and Cloudinary.
          </motion.p>

          {/* Buttons with Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Resume */}
            <motion.a
              href="/Harsh_Hudda_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium bg-sky-900 text-white hover:bg-sky-800 transition"
            >
              <FaFileAlt className="text-lg" />
              View Resume
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/huddaharsh"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium bg-indigo-500 text-white hover:bg-indigo-400 transition"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/harshhudda"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium bg-gray-600 text-white hover:bg-gray-500 transition"
            >
              <FaGithub className="text-lg" />
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
