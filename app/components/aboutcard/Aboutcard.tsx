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
    Jakob's talent isn't just limited to digital design; he's also 
    made a name for himself in architectural photography. His work 
    has gained a lot of recognition, especially in New York City, 
    though his reach goes well beyond that. He's known for capturing 
    both residential and commercial real estate, giving buildings a new 
    sense of life and personality through his creative eye.
    </p>
    <p className="text-neutral-500 text-left pb-2">
    His portfolio is packed with iconic landmarks like the Woolworth Building, 
    Empire State Building, Four Seasons Private Residences, 
    The Textile Building, and The News Building. People in cities like New York, 
    Los Angeles, and Stockholm have praised his skill in showcasing the grandeur 
    and intricate details of these structures. It's that ability to blend 
    artistry and architecture that really sets him apart.
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
    Jakob's reputation as an architectural photographer took off even more after 
    his work was featured on Million Dollar Listing: New York. 
    That exposure opened doors to collaborations with top real estate brands 
    and gave his work global visibility.
    </p>
    <p className="text-neutral-500 text-left pb-2">
    His talent has even caught the eye of major international companies like IKEA, 
    who have showcased his photography. This kind of recognition has cemented his 
    status as one of the go-to names in architectural photography.
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
    Jakob Dahlin brings together his talent for architectural photography with a 
    strong passion for UI/UX, graphic, and web design. He's always pushing 
    himself to learn, experimenting with new tools, apps, and coding languages 
    to stay ahead in these ever-changing fields. For him, it's all about growth 
    and staying on top of his game.
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
    Jakob is all about crafting websites that are both user-friendly and visually 
    captivating, striking a balance between functionality and aesthetics. 
    His graphic design background gives him the edge to design interfaces 
    that feel simple yet leave a lasting impression.
    </p>
    <p className="text-neutral-500 text-left pb-2">
    For him, brand and user research are key. He believes that to create a successful 
    product—whether it's a site or something else—it needs to align with the brand's 
    identity while also truly resonating with its users. That attention to both form 
    and function is what makes his work stand out.
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
    Jakob is fueled by a nonstop drive to learn. Whether it's picking up a new 
    design tool, testing out the latest apps, or exploring different coding languages, 
    he's always up for a challenge. He approaches problems with a "why not?" attitude, 
    ready to try new things and learn from the experience.
    </p>
    <p className="text-neutral-500 text-left pb-2">
    This commitment to growth allows him to consistently deliver fresh, innovative 
    solutions that meet the needs of both his clients and their audiences. For Jakob, 
    it's all about staying ahead of the curve and pushing creative boundaries.
</p>
  </div>

</div>
    );
  };

export default Aboutcard;