"use client";

import React from 'react';
import '@fontsource/kumbh-sans/400.css';
import '@fontsource/kumbh-sans/700.css';
import Designbuttons from '../designbuttons/designbuttons';
import Backgroundcard from '../backgroundcard/backgroundcard';
import Calculator from '../calculator/calculator';
import LoginCard from '../LoginCard/LoginCard';
import NavigationBars from '../NavigationBars/NavigationBars';
import CardDesign1 from '../CardDesign1/CardDesign1';
import CardDesign2 from '../CardDesign2/CardDesign2';
import Carousel from '../carousel/carousel';
import Navbar from '../navbar/Navbar';


interface CardProps {
    className?: string;
  } 

const Designcard: React.FC<CardProps> = ({ className }) => {
    return (
        <Backgroundcard>

  <div className="col-span-12 lg:row-span-1 p-3 border-neutral-700 border rounded-2xl 
  transition-all duration-300 shadow-neutral-900 
  flex flex-col items-center gap-4 mb-4">
    <h2 className="text-white font-bold">Skills</h2>
  </div>

  <div className="w-full lg:col-span-12 md:col-span-12 sm:col-span-12 
  transition-all duration-300 shadow-neutral-900 
  rounded-xl grid grid-cols-1 flex-col sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

  <div className="p-3 border-neutral-700 border rounded-2xl shadow-neutral-900 
  md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
  lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg 
  flex flex-col items-center gap-4 transition-all duration-300 pb-6">
     <h2 className="text-white font-bold">Front-End Dev</h2>
     <h3 className="text-neutral-500 font-bold">CORE TECHNOLOGIES</h3>
     <ul className="list-none text-center">
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">HTML</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">CSS</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">JavaScript</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">TypeScript</li>
    </ul>
    <h3 className="text-neutral-500 font-bold">FRAMEWORKS</h3>
     <ul className="list-none text-center">
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">React</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Next.js</li>
    </ul>
    <h3 className="text-neutral-500 font-bold">STYLING & ANIMATION</h3>
     <ul className="list-none text-center">
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Tailwind CSS</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">CSS Modules</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Framer Motion</li>
    </ul>
    <h3 className="text-neutral-500 font-bold">BUILD TOOLS</h3>
     <ul className="list-none text-center">
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Webpack</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Vite</li>
    </ul>
  </div>
  
  <div className="p-3 border-neutral-700 border rounded-2xl shadow-neutral-900 
  md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
  lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg 
  flex flex-col items-center gap-4 transition-all duration-300 pb-6">
     <h2 className="text-white font-bold">Development Tools</h2>
     <h3 className="text-neutral-500 font-bold">VERSION CONTROL & DEPLOYMENT</h3>
     <ul className="list-none text-center">
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Git</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Github</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Github Actions</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Vercel</li>
    </ul>
    <h3 className="text-neutral-500 font-bold">IDE & PLATFORMS</h3>
     <ul className="list-none text-center">
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Visual Studio Code</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Adobe Dreamweaver</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Rapidweaver</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">CodePen</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Parallels Desktop</li>
    </ul>
    <h3 className="text-neutral-500 font-bold">PROJECT MANAGEMENT</h3>
     <ul className="list-none text-center">
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Trello</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Asana</li>
    </ul>
  </div>

  <div className="p-3 border-neutral-700 border rounded-2xl shadow-neutral-900 
  md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
  lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg 
  flex flex-col items-center gap-4 transition-all duration-300 pb-6">
     <h2 className="text-white font-bold">Design UI/UX</h2>
     <h3 className="text-neutral-500 font-bold">DESIGN TOOLS</h3>
     <ul className="list-none text-center">
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Adobe Photoshop</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Adobe Illustrator</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Figma</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Canva</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">InVision</li>
    </ul>
    <h3 className="text-neutral-500 font-bold">WEB & DIGITAL DESIGN TOOLS</h3>
     <ul className="list-none text-center">
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Visual Studio Code</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Adobe Dreamweaver</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Rapidweaver</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">CodePen</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Microsoft Office Suite</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Pages, Numbers, Keynote</li>
    </ul>
  </div>
  
  <div className="p-3 border-neutral-700 border rounded-2xl shadow-neutral-900 
  md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
  lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg 
  flex flex-col items-center gap-4 transition-all duration-300 pb-6">
<h2 className="text-white font-bold">Other</h2>
     <h3 className="text-neutral-500 font-bold">OTHER TECHNICAL SKILLS</h3>
     <ul className="list-none text-center">
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">API Integration</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Responsive Design</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Performance Optimization</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Google Analytics</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Google Search Console</li>
    </ul>
    <h3 className="text-neutral-500 font-bold">UX & SOFT SKILLS</h3>
     <ul className="list-none text-center">
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Visual Communication</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Attention to Detail</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Storytelling</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Time Management</li>
    <li className="hover:text-white text-neutral-600 text-center transition-all duration-300 transform hover:scale-110">Client Communication</li>
    </ul>
  </div>
  </div>

  <div className="col-span-12 lg:row-span-1 p-3 border-neutral-700 border rounded-2xl 
  transition-all duration-300 shadow-neutral-900 
  flex flex-col items-center gap-4 mb-4">
    <h2 className="text-white font-bold">Portfolio</h2>
  </div>
  <div className="col-span-12 lg:row-span-1 p-3 border-neutral-700 border rounded-2xl 
  transition-all duration-300 shadow-neutral-900 
  flex flex-col items-center gap-4 mb-4">
    <h2 className="text-white font-bold text-left">Navigation Bars</h2>
    <div className="w-full flex items-center rounded-xl justify-center h-32 overflow-hidden px-4 md:mx-4 sm:px-10 
      bg-[url('https://i.ibb.co/spyCsBbS/1958-71.jpg')] bg-cover bg-center">
    <NavigationBars />
    </div>
    </div>

<div className="z-10 w-full">

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 w-full">
<div className="py-2 px-4 col-span-12 lg:col-span-12 border-neutral-700 border 
  lg:rounded-2xl md:rounded-2xl transition-all duration-300 shadow-neutral-900 
  md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
  lg:hover:shadow-lg rounded-2xl flex flex-col justify-center items-center gap-4">
  <h2 className="text-white font-bold text-center">Infinite Carousel</h2>
  <div className="w-full">
    <Carousel />
  </div>
</div>

<div className="col-span-12 lg:row-span-1 p-3 border-neutral-700 border rounded-2xl 
  transition-all duration-300 shadow-neutral-900 
  flex flex-col items-center gap-4 pb-2 mb-4">
    <h2 className="text-white font-bold">Button Design</h2>
    <Designbuttons />
  </div>
</div>

<div className="w-full mx-auto lg:col-span-12 md:col-span-12 sm:col-span-12 
  transition-all duration-300 shadow-neutral-900 
  rounded-2xl grid grid-cols-1 gap-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

  <div className="p-3 border-neutral-700 border rounded-2xl shadow-neutral-900 
    md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
    lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg 
    flex flex-col items-center gap-4 transition-all duration-300">
    <h2 className="text-white font-bold">Card 1</h2>
    <CardDesign1 /> 
  </div>

  <div className="p-3 border-neutral-700 border rounded-2xl shadow-neutral-900 
    md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
    lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg 
    flex flex-col items-center gap-4 transition-all duration-300">
    <h2 className="text-white font-bold">Card 2</h2>
    <CardDesign2 />
  </div>

    <div className="p-3 border-neutral-700 border rounded-2xl 
      transition-all duration-300 shadow-neutral-900 
      md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
      lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg 
      flex flex-col items-center gap-4">
      <h2 className="text-white font-bold">Calculator</h2>
      <Calculator />
    </div>

    <div className="p-3 px-8 py-20 border-neutral-700 border rounded-2xl 
      shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
      lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg 
      flex flex-col items-center justify-center gap-4 transition-all duration-300 relative overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover opacity-70" autoPlay loop muted playsInline>
        <source src="/lights.mp4" type="video/mp4" />
      </video>
      <LoginCard />
    </div>
  </div>
</div>

  </div>
  </Backgroundcard>

  )
  };

export default Designcard;