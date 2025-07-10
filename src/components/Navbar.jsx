// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-slate-900/70 backdrop-blur-md fixed top-0 z-50 shadow-md">
      <div className="navbar-start avatar">
        <div className="ring-primary ring-offset-base-100 w-15 rounded-full ring-2 ring-offset-2">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFOnv0ZrFePHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727868994634?e=2147483647&v=beta&t=xI1wAUaChbbNq29mFuj8oz1FCosp2pUic4n3XJDlTeo"
            alt="Harsh Hudda"
          />
        </div>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Harsh Hudda</a>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#profiles">Profiles</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
