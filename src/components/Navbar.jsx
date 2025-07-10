// src/components/Navbar.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="navbar bg-slate-900/70 backdrop-blur-md fixed top-0 z-50 shadow-md">
      {/* Avatar */}
      <div className="navbar-start avatar ml-2">
        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="/Profile-pic.jpeg" alt="Harsh Hudda" />
        </div>
      </div>

      {/* Title */}
      <div className="navbar-center text-white font-bold text-lg">
        <span className="hidden md:inline">Harsh’s Portfolio</span>
        <span className="md:hidden">Portfolio</span>
      </div>

      {/* Dropdown */}
      <div className="navbar-end relative">
        <div
          className="dropdown dropdown-end"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <AnimatePresence>
            {isHovering && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 z-50 w-40 p-2 shadow-xl bg-white/90 backdrop-blur-md rounded-lg text-sm text-gray-500 font-medium"
              >
                <li>
                  <a href="#hero" className="block px-3 py-2 rounded hover:bg-base-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="block px-3 py-2 rounded hover:bg-base-200">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#profiles" className="block px-3 py-2 rounded hover:bg-base-200">
                    Profiles
                  </a>
                </li>
                <li>
                  <a href="#contact" className="block px-3 py-2 rounded hover:bg-base-200">
                    Contact
                  </a>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
