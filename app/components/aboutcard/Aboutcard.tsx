"use client";

import React from 'react';
import '@fontsource/kumbh-sans/400.css';
import '@fontsource/kumbh-sans/700.css';
import Backgroundcard from '../backgroundcard/backgroundcard';

interface CardProps {
    className?: string; // Optional className prop for custom styles
  } 

const Aboutcard: React.FC<CardProps> = ({ className }) => {
    return (
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10">

 <div className="lg:row-span-1 p-3">              {/* BOX 1 */}
  <div className="flex justify-center items-center">
    <img 
      className="flex items-center justify-center w-72 sm:max-w-xs md:max-w-sm lg:max-w-md object-cover transition-transform duration-300 lg:hover:scale-105 md:hover:scale-105" 
      src="https://www.dropbox.com/scl/fi/fd8w8iyiwlzhmd49wv72r/portrait.jpg?rlkey=23zngtal1t7d4b6h8z7wuvrxc&raw=1" 
      alt="jakob" 
    />
  </div>
</div>


<div className="lg:row-span-2 p-3 border border-neutral-800 
  lg:border lg:border-neutral-700 lg:rounded-xl 
  md:border md:rounded-2xl md:border-neutral-700 
  transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
  lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg">           {/* BOX 2 */}
    <h2 className="text-white text-left p-2">
      Renowned architectural photographer in New York City
    </h2>
    <p className="text-neutral-500 text-left pb-2">
      Jakob's expertise extends beyond digital design into the world of architectural photography, 
      where he has earned wide recognition for his work in New York City and beyond. 
      He specializes in both residential and commercial real estate, bringing buildings to 
      life through his unique perspective.
    </p>
    <p className="text-neutral-500 text-left pb-2">
      His portfolio includes iconic buildings like the Woolworth Building, Empire State Building, 
      Four Seasons Private Residences, The Textile Building, and The News Building. 
      Jakob's ability to highlight the architectural details and grandeur of these buildings 
      has garnered acclaim in New York, Los Angeles, and Stockholm, Sweden.
    </p>
  </div>

  <div className="lg:row-span-2 p-3 border rounded-2xl border-neutral-800 
  lg:border lg:border-neutral-700 lg:rounded-xl 
  md:border md:rounded-xl md:border-neutral-700
  transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
  lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg">           {/* BOX 3 */}
    <h2 className="text-white text-left pb-2">
      Featured on Million Dollar Listing: New York
    </h2>
    <p className="text-neutral-500 text-left pb-2">
    Jakob's talent as an architectural photographer gained further recognition after being 
    featured on Million Dollar Listing: New York. This spotlight led to collaborations with 
    leading brands in the real estate industry and global exposure for his work.
    </p>
    <p className="text-neutral-500 text-left pb-2">
    His photography has even been showcased by international retailer like IKEA, solidifying 
    his reputation as a sought-after architectural photographer.
    </p>
  </div>


  <div className="p-3 border rounded-xl border-neutral-800 
  lg:border lg:border-neutral-700 lg:rounded-x 
  md:border md:rounded-xl md:border-neutral-700
  transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
  lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg">           {/* BOX 4 */}
    <h2 className="text-white text-left pb-2">
      Jakob Dahlin and design
    </h2>
    <p className="text-neutral-500 text-left pb-2">
    Jakob Dahlin combines his skills in architectural photography with a passion for UI/UX design, 
    graphic design, and web design. He is constantly exploring new tools, applications, and 
    coding languages to expand his expertise and stay at the forefront of these fields.
    </p>
  </div>


  <div className="sm:col-span-2 lg:col-span-3 p-3 border rounded-2xl border-neutral-800 
  lg:border lg:border-neutral-700 lg:rounded-2xl 
  md:border md:rounded-2xl md:border-neutral-700
  transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
  lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg">           {/* BOX 5 */}
  <h2 className="text-white text-left pb-2">
  Connecting UI/UX, graphic design, and web design
    </h2>
    <p className="text-neutral-500 text-left pb-2">
    Jakob is deeply invested in creating user-friendly, visually engaging websites that merge 
    functionality with aesthetics. His background in graphic design builds on his ability to 
    create interfaces that are not only intuitive but also simple but impactful. 
    Brand and User research is crucial in order to create a product, or whatever it might be, 
    that aligns with the brand but also speaks to its user.
    </p>
  </div>


  <div className="sm:col-span-2 lg:col-span-3 p-3 border rounded-2xl border-neutral-800 
  lg:border lg:border-neutral-700 lg:rounded-x 
  md:border md:rounded-2xl md:border-neutral-700
  transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-neutral-900 md:hover:shadow-lg 
  lg:hover:border-neutral-500 lg:hover:shadow-neutral-900 lg:hover:shadow-lg">            {/* BOX 6 */}
  <h2 className="text-white text-left pb-2">
  Always learning and evolving
    </h2>
    <p className="text-neutral-500 text-left pb-2">
    Jakob is driven by a constant desire to learn, whether it's mastering a new design tool, 
    experimenting with the latest applications, or diving into coding languages. 
    He approaches challenges with a "yes" mindset, always willing to give things a 
    shot and potentially learn something along the way. This dedication to growth enables 
    him to deliver creative, forward-thinking solutions that meet the demands of 
    both clients and audiences.
    </p>
  </div>

</div>
    );
  };

export default Aboutcard;