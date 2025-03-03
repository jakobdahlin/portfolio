import React from 'react';
import '@fontsource/kumbh-sans/400.css';
import '@fontsource/kumbh-sans/700.css';
import Backgroundcard from '../backgroundcard/backgroundcard';
import Contactbutton from '../contactbutton/contactbutton';

interface CardProps {
    className?: string;
  }

const Welcomecard: React.FC<CardProps> = ({ className }) => {
    return (
      <div className="flex flex-col justify-center items-center text-center relative z-10">
      <Backgroundcard>
        <div className="w-full max-w-4xl">
            <h1 className="text-responsive font-bold text-white py-2">Jakob Dahlin</h1>
            <p className="tracking-responsive text-white py-4">DESIGN PORTFOLIO</p>
            
            <p className="mt-2 mb-4 mx-2">15+ years in graphic design and 10 years in web design, creating marketing materials for both digital and print. Specialized in developing user-friendly websites and web applications with focus on single-page experiences and affiliate marketing blogs. Skilled in UI design optimization to enhance SEO and improve UX. </p>
          </div>
          <div className="flex justify-center items-center">
    <img 
      className="flex items-center justify-center w-72 sm:max-w-xs md:max-w-sm lg:max-w-md 
      object-cover" 
      src="/logos/JAKOBD_W.png" 
      alt="jakob" 
    />
  </div>
          <Contactbutton />
        </Backgroundcard>
        </div>
    );
  };

export default Welcomecard;