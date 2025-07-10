// src/components/Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "BuySmart – AI E-commerce Platform",
      description:
        "A MERN stack e-commerce platform with OpenAI-powered product suggestions, Stripe payments, and CRUD dashboard.",
      live: "https://buysmart-2uox.onrender.com",
      github: "https://github.com/harshhudda/buysmart",
    },
    {
      title: "Real-Time Chat App",
      description:
        "Built with MERN, Zustand, and Socket.io. Supports 1:1 messaging, media sharing, and real-time communication.",
      live: "https://chat-app-8mca.onrender.com",
      github: "https://github.com/harshhudda/chat-app",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing projects and profiles, built with React, Tailwind, and Framer Motion.",
      live: "https://portfolio-m8gj.onrender.com",
      github: "https://github.com/harshhudda/portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 bg-gradient-to-br from-[#0f172a] to-[#1e1e2e]"
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Animated Grid of Cards */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
