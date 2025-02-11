'use client';

import React from 'react';
import Link from "next/link";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <nav className="flex items-center justify-between w-full max-w-screen-xl xl:mx-60 md:mx-10 
        px-4 border border-violet-400/40 rounded-full h-14 bg-black/10 backdrop-blur-md">

        {/* Mobile-Only Link */}
        <div className={`md:hidden`}>
          <Link href="#" className="text-violet-400 lg:hover:text-neutral-200 py-2 pr-10">
            Services
          </Link>
        </div>

        {/* Mobile Menu Button / Close Button */}
        <button
          className="md:hidden text-violet-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 p-4 rounded-lg flex flex-col gap-4 items-center">

          </div>
        )}

        {/* Full Menu (Desktop Only) */}
        <div className="hidden md:flex items-center lg:mx-10 md:mx-2 gap-12 justify-center flex-1">
          <Link href="#" className="text-violet-400 hover:text-neutral-200 active:text-white py-6">
            Services
          </Link>
          <Link href="#" className="text-violet-400 hover:text-neutral-200 active:text-white py-6">
            Portfolio
          </Link>
          <Link href="#" className="text-violet-400 hover:text-neutral-200 active:text-white py-6">
            About
          </Link>
          <Link href="#" className="text-violet-400 hover:text-neutral-200 active:text-white py-6">
            Blog
          </Link>
          <Link href="#" className="text-violet-400 hover:text-violet-200 active:text-white py-6">
            Pricing
          </Link>
        </div>
      </nav>
  //_________________________________________________________________________________
    
    
    );
  }
  
  export default Navbar;