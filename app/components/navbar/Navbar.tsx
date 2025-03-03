'use client';

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full max-w-screen-lg mx-auto px-8 mt-5 mb-4">
      <div className="flex items-center justify-between mx-auto max-w-screen-lg">
        <a href="/">
        <div className="md:hidden flex items-center">
          <img src="/logos/JDIDWi.png" alt="Logo" className="h-8" />
        </div>
        </a>

        <div className="hidden md:flex items-center gap-32 flex-1">
          <Link href="/about" className="text-white hover:text-neutral-500">
            About
          </Link>
          <Link href="/webdesign" className="text-white hover:text-neutral-500">
          Web Design
          </Link>
        </div>

        <a href="/">
          <div className="hidden md:flex mx-4 items-center transform duration-200 hover:rotate-12 justify-center cursor-pointer">
            <img src="/logos/JDIDWi.png" alt="Logo" className="h-8 transition-transform 
      duration-100 transform lg:hover:scale-95" />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-28 flex-1 justify-end">
          <Link href="/graphicdesign" className="text-white hover:text-neutral-500">
            Graphic Design
          </Link>
          <Link href="/photography" className="text-white hover:text-neutral-500">
            Photography
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white"
          >
            <svg
              className={`w-8 h-8 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden text-center">
          <div className="flex flex-col items-start gap-6 p-4 text-white">
            <Link
              href="/about"
              className="w-full p-2 rounded sm:animate-pulse hover:text-neutral-400"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/webdesign"
              className="w-full p-2 rounded animate-pulse hover:text-neutral-400"
              onClick={closeMenu}
            >
              Web Design
            </Link>
            <Link
              href="/graphicdesign"
              className="w-full p-2 rounded animate-pulse hover:text-neutral-400"
              onClick={closeMenu}
            >
              Graphic Design
            </Link>
            <Link
              href="/photography"
              className="w-full p-2 rounded animate-pulse hover:text-neutral-400"
              onClick={closeMenu}
            >
              Photography
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
