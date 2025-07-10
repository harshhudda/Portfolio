// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ title, description, live, github }) {
  return (
    <div className="card bg-white/5 backdrop-blur-md border border-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl">
      <div className="card-body p-6">
        <h2 className="card-title text-lg font-semibold text-white">{title}</h2>
        <p className="text-sm text-slate-300 leading-relaxed">{description}</p>

        <div className="card-actions justify-end mt-6 flex flex-wrap gap-2">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-400 transition"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm border border-slate-500 text-slate-200 hover:bg-slate-700 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
