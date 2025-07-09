// src/components/Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "BuySmart – AI E-commerce Platform",
      description: "A MERN stack e-commerce platform with OpenAI-powered product suggestions, Stripe payments, and CRUD dashboard.",
      live: "https://buysmart-2uox.onrender.com",
      github: "https://github.com/harshhudda/buysmart",
    },
    {
      title: "Real-Time Chat App",
      description: "Built with MERN, Zustand, and Socket.io. Supports 1:1 messaging, media sharing, and real-time communication.",
      live: "https://chat-app-8mca.onrender.com",
      github: "https://github.com/harshhudda/chat-app",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and profiles, built with React, Tailwind, and Framer Motion.",
      live: "#", // replace with actual link
      github: "https://github.com/harshhudda/portfolio",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
