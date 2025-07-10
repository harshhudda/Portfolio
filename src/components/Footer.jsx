// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0f172a] text-gray-300 px-6 py-10 border-t border-slate-700"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-center sm:text-left">
        {/* Contact Info */}
        <div>
          <p className="text-xl font-semibold text-white mb-1">
            Let's Connect
          </p>
          <p className="text-sm">
            Reach me at{" "}
            <a
              href="mailto:harshu886025@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              harshu886025@gmail.com
            </a>
          </p>
        </div>

        {/* Social Links with Icons */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm">
          <a
            href="https://github.com/harshhudda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/huddaharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
          <a
            href="https://codeforces.com/profile/harshhudda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaCode className="text-lg" />
            Codeforces
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-xs text-center text-gray-500">
        © 2025 Harsh Hudda. All rights reserved.
      </div>
    </footer>
  );
}
