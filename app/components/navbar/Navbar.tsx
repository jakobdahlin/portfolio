'use client';

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <nav className="w-full max-w-screen-lg mx-auto px-8 mt-5 mb-4">
      <div className="flex items-center justify-between mx-auto max-w-screen-lg">
        {/* Mobile Logo */}
        <a href="/">
        <div className="sm:hidden flex items-center">
          <img src="/logos/JDIDWi.png" alt="Logo" className="h-8" />
        </div>
        </a>

        {/* Desktop Links Left */} 
        <div className="hidden sm:flex items-center gap-32 flex-1">
          <Link href="/about" className="text-white hover:text-neutral-500">
            About
          </Link>
          <Link href="/webdesign" className="text-white hover:text-neutral-500">
          Web Design
          </Link>
        </div>

        {/* Desktop Logo */}
        <a href="/">
          <div className="hidden sm:flex items-center transform duration-200 hover:rotate-12 justify-center cursor-pointer">
            <img src="/logos/JDIDWi.png" alt="Logo" className="h-8" />
          </div>
        </a>

        {/* Desktop Links Right */}
        <div className="hidden sm:flex items-center gap-32 flex-1 justify-end">
          <Link href="/graphicdesign" className="text-white hover:text-neutral-500">
            Graphic Design
          </Link>
          <Link href="/photography" className="text-white hover:text-neutral-500">
            Photography
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden text-center">
          <div className="flex flex-col items-start gap-6 p-4 text-white">
            <Link
              href="/about"
              className="w-full p-2 rounded animate-pulse"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/webdesign"
              className="w-full p-2 rounded animate-pulse"
              onClick={closeMenu}
            >
              Web Design
            </Link>
            <Link
              href="/graphicdesign"
              className="w-full p-2 rounded animate-pulse"
              onClick={closeMenu}
            >
              Graphic Design
            </Link>
            <Link
              href="/photography"
              className="w-full p-2 rounded animate-pulse"
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
