import React from 'react';
import '@fontsource/kumbh-sans/400.css';
import '@fontsource/kumbh-sans/700.css';
import Backgroundcard from '../backgroundcard/backgroundcard';
import Contactbutton from '../contactbutton/contactbutton';

interface CardProps {
    className?: string; // Optional className prop for custom styles
  }

const Welcomecard: React.FC<CardProps> = ({ className }) => {
    return (
      <div className="flex flex-col justify-center items-center text-center relative z-10">
      <Backgroundcard>
        <div className="w-full max-w-xl px-1">
            <h1 className="text-responsive font-bold text-white py-2">Jakob Dahlin</h1>
            <p className="tracking-responsive text-white 0 py-4">WEB DESIGN PORTFOLIO</p>
            <p className="my-12 mx-12">8+ years of experience in web design, specializing in 
                creating user-friendly websites for clients and affiliate marketing. 
                Skilled in optimizing UI design to improve SEO and enhance user experience (UX).</p>
          </div>
          <Contactbutton />
        </Backgroundcard>
        </div>
    );
  };

export default Welcomecard;