// src/components/CodingProfiles.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-16 bg-base-100 text-center px-4">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Coding Profiles
      </motion.h2>

      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a
          href="https://codeforces.com/profile/harshhudda"
          target="_blank"
          className="btn btn-outline btn-primary"
        >
          Codeforces
        </a>
        <a
          href="https://leetcode.com/harshhudda"
          target="_blank"
          className="btn btn-outline btn-primary"
        >
          LeetCode
        </a>
      </motion.div>
    </section>
  );
}
