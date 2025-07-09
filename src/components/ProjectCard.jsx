// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ title, description, live, github }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="card-body">
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="card-actions justify-end mt-4">
          {live && (
            <a href={live} target="_blank" className="btn btn-primary btn-sm">
              Live Demo
            </a>
          )}
          {github && (
            <a href={github} target="_blank" className="btn btn-outline btn-sm">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
