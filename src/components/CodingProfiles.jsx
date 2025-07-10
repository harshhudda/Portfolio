// src/components/CodingProfiles.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCodeBranch } from "react-icons/fa";

export default function CodingProfiles() {
  return (
    <section
      id="profiles"
      className="py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#0d1117] text-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Coding Profiles
      </motion.h2>

      {/* Summary paragraph */}
      <motion.p
        className="text-slate-400 max-w-xl mx-auto mb-10 text-sm sm:text-base leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Passionate about problem-solving, I've solved over{" "}
        <span className="text-white font-medium">700+ problems</span> across
        platforms and participated in several global contests. I'm currently
        rated <span className="text-violet-300 font-medium">1526</span> on{" "}
        <span className="text-white font-medium">Codeforces</span> and
        consistently practice on <span className="text-white font-medium">LeetCode</span> and{" "}
        <span className="text-white font-medium">CodeChef</span>.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Codeforces */}
        <a
          href="https://codeforces.com/profile/harshhudda"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-4 border border-violet-500 text-violet-400 rounded-lg hover:bg-violet-500 hover:text-white transition-all duration-300 shadow-sm"
        >
          <FaCode className="text-xl" />
          Codeforces
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/harshhudda"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-4 border border-yellow-400 text-yellow-300 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-sm"
        >
          <FaCodeBranch className="text-xl" />
          LeetCode
        </a>
      </motion.div>
    </section>
  );
}
