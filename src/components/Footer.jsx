// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="footer footer-center p-8 bg-base-200 text-base-content mt-12"
    >
      <div>
        <p className="font-semibold text-lg">Let's Connect</p>
        <p className="text-sm">
          Reach me at{" "}
          <a
            href="mailto:harshu886025@gmail.com"
            className="text-primary underline"
          >
            harshu886025@gmail.com
          </a>
        </p>
      </div>

      <div className="mt-4">
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/harshhudda"
            target="_blank"
            className="link link-hover"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/huddaharsh"
            target="_blank"
            className="link link-hover"
          >
            LinkedIn
          </a>
          <a
            href="https://codeforces.com/profile/harshhudda"
            target="_blank"
            className="link link-hover"
          >
            Codeforces
          </a>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>© 2025 Harsh Hudda. All rights reserved.</p>
      </div>
    </footer>
  );
}
