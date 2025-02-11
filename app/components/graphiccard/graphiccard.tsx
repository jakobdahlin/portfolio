"use client";

import React from 'react';
import '@fontsource/kumbh-sans/400.css';
import '@fontsource/kumbh-sans/700.css';
import Backgroundcard from '../backgroundcard/backgroundcard';
import Carousel from '../carousel/carousel';
import Image from 'next/image';


interface CardProps {
    className?: string;
  } 

const settings = {
    dots: true, 
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeeed: 2000,
    cssEase: "linear"
};

const Graphiccard: React.FC<CardProps> = ({ className }) => {
    return (
        <Backgroundcard>
        <div className="container mx-auto z-10">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* ROLLING LOGOS */}
            <div className="py-2 px-3 col-span-12 lg:col-span-12 border-neutral-700 border 
  lg:rounded-2xl md:rounded-2xl transition-all duration-300 shadow-neutral-900 
  md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
  lg:hover:shadow-lg rounded-2xl flex flex-col justify-center items-center gap-4">
  
  <h2 className="text-white font-bold text-center">Buttons</h2>
  
  <div className="w-full px-4">
    <Carousel />
  </div>
</div>
      
            {/* BUTTONS 2/3 */}
            <div className="col-span-12 lg:col-span-8 p-3 border-neutral-700 border md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl lg:rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold text-left">Business Cards</h2>
              <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4 lg:flex-wrap">
                <img className="w-full h-auto" src="/graphic/businesscards/bc1.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="/graphic/businesscards/bc4.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="/graphic/businesscards/bc7.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="/graphic/businesscards/bc8.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="/graphic/businesscards/bc3.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="/graphic/businesscards/bc2.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="/graphic/businesscards/bc5.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="/graphic/businesscards/bc6.jpg" alt="businesscard" />
              </div>
            </div>
      
            {/* TYPOGRAPHY 1/3 */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Letterheads</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:flex-wrap">
                <img className="w-full h-auto" src="/graphic/letterheads/letterhead2.jpg" alt="letterhead2" />
                <img className="w-full h-auto" src="/graphic/letterheads/letterhead3.jpg" alt="letterhead3" />
              </div>
            </div>
      
            {/* ENVELOPES */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Envelopes</h2>
              <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-4 lg:flex-wrap">
              <img className="w-full h-auto" src="/graphic/envelopes/envelope1.jpg" alt="envelope1" />
              <img className="w-full h-auto" src="/graphic/envelopes/envelope2.jpg" alt="envelope2" />
              <img className="w-full h-auto" src="/graphic/envelopes/envelope3.jpg" alt="envelope3" />
              <img className="w-full h-auto" src="/graphic/envelopes/envelope4.jpg" alt="envelope4" />
              <img className="w-full h-auto" src="/graphic/envelopes/envelope5.jpg" alt="envelope5" />
              </div>
            </div>

            {/* OTHER CONTENT */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Menues</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 lg:flex-wrap">
              <img className="w-full h-auto" src="/graphic/menues/MENU1.jpg" alt="menu1" />
              <img className="w-full h-auto" src="/graphic/menues/MENU2.jpg" alt="menu2" />
              </div>
            </div>
      
            {/* OTHER CONTENT */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Brochures</h2>
              <div className="grid grid-cols-1 gap-4 lg:flex-wrap">
              <img className="w-full h-auto" src="/graphic/brochures/brochure1.png" alt="nyc-palette" />
              <img className="w-full h-auto" src="/graphic/brochures/brochure2.png" alt="nyc-palette" />
              </div>
            </div>

            <div className="py-2 px-3 col-span-12 lg:col-span-12 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
            <h2 className="text-white font-bold text-left">Album Covers</h2>
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 lg:flex-wrap">
                <img className="w-full h-auto" src="/graphic/albums/album1.png" alt="album1" />
                <img className="w-full h-auto" src="/graphic/albums/album2.png" alt="album2" />
                <img className="w-full h-auto" src="/graphic/albums/album3.png" alt="album3" />

                
              </div>
            </div>
      
            {/* COLOR PALETTES */}
            <div className="col-span-12 lg:col-span-12 lg:row-span-3 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Color Palettes</h2>
              <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:flex-wrap">
                <img className="w-full h-auto rounded-xl" src="/palettes/1.png" alt="nyc-palette" />
                <img className="w-full h-auto rounded-xl" src="/palettes/2.png" alt="costarica-palette" />
                <img className="w-full h-auto rounded-xl" src="/palettes/3.png" alt="nyc-palette" />
                <img className="w-full h-auto rounded-xl" src="/palettes/4.png" alt="costarica-palette" />
                <img className="w-full h-auto rounded-xl" src="/palettes/5.png" alt="nyc-palette" />
                <img className="w-full h-auto rounded-xl" src="/palettes/6.png" alt="costarica-palette" />
              </div>
            </div>
          </div>
        </div>
      </Backgroundcard>
      
  )
  };

export default Graphiccard;