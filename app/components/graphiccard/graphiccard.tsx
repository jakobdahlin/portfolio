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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            <div className="py-2 px-3 col-span-12 lg:col-span-12 border-neutral-700 border 
  lg:rounded-2xl md:rounded-2xl transition-all duration-300 shadow-neutral-900 
  md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
  lg:hover:shadow-lg rounded-2xl flex flex-col justify-center items-center gap-4 bg-black">
  
  <h2 className="text-white font-bold text-center">Buttons</h2>
  
  <div className="w-full px-4">
    <Carousel />
  </div>
</div>
      
            {/* Business Cards */}
            <div className="col-span-12 lg:col-span-8 p-3 border-neutral-700 border md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl lg:rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold text-left">Business Cards</h2>
              <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4 lg:flex-wrap">
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302118/bc1_wthta3.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302124/bc4_af83hp.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302126/bc7_kvaio1.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302133/bc8_zcfuop.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302118/bc3_dmuk6t.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302118/bc2_jrsmf9.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302125/bc5_zeabs6.jpg" alt="businesscard" />
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302125/bc6_jbbyue.jpg" alt="businesscard" />
              </div>
            </div>
      
            {/* Letterheads */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Letterheads</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:flex-wrap">
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302147/letterhead2_bjgya8.jpg" alt="letterhead2" />
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302148/letterhead3_wgshq3.jpg" alt="letterhead3" />
              </div>
            </div>
      
            {/* Envelopes */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Envelopes</h2>
              <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-4 lg:flex-wrap">
              <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302136/envelope1_evao1g.jpg" alt="envelope1" />
              <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302137/envelope2_wfut70.jpg" alt="envelope2" />
              <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302137/envelope3_z3th3k.jpg" alt="envelope3" />
              <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302142/envelope4_dhgec4.jpg" alt="envelope4" />
              <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302143/envelope5_kzqk5p.jpg" alt="envelope5" />
              </div>
            </div>

            {/* Menues */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Menues</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 lg:flex-wrap">
              <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302153/MENU1_utzt7t.jpg" alt="menu1" />
              <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302153/MENU2_egdipl.jpg" alt="menu2" />
              </div>
            </div>
      
            {/* Brochures */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Brochures</h2>
              <div className="grid grid-cols-1 gap-4 lg:flex-wrap">
              <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302103/brochure1_ldonsh.png" alt="nyc-palette" />
              <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302104/brochure2_jpbq57.png" alt="nyc-palette" />
              </div>
            </div>

            <div className="py-2 px-3 col-span-12 lg:col-span-12 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
            <h2 className="text-white font-bold text-left">Album Covers</h2>
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 lg:flex-wrap">
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302087/album1_vjcg0i.png" alt="album1" />
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302088/album2_khqafv.png" alt="album2" />
                <img className="w-full h-auto" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302088/album3_qmaemw.png" alt="album3" />

                
              </div>
            </div>
      
            {/* Color Palettes */}
            <div className="col-span-12 lg:col-span-12 lg:row-span-3 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Color Palettes</h2>
              <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:flex-wrap">
                <img className="w-full h-auto rounded-xl" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302049/1_xdu8uc.png" alt="nyc-palette" />
                <img className="w-full h-auto rounded-xl" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302049/2_zfmhqq.png" alt="costarica-palette" />
                <img className="w-full h-auto rounded-xl" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302049/3_gsj9le.png" alt="nyc-palette" />
                <img className="w-full h-auto rounded-xl" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302050/4_mdy7ed.png" alt="costarica-palette" />
                <img className="w-full h-auto rounded-xl" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302050/5_rixswf.png" alt="nyc-palette" />
                <img className="w-full h-auto rounded-xl" src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302050/6_y5qnus.png" alt="costarica-palette" />
              </div>
            </div>
          </div>
        </div>
      </Backgroundcard>
      
  )
  };

export default Graphiccard;