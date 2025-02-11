"use client";

import React, { ReactNode } from 'react';
import '@fontsource/kumbh-sans/400.css';
import '@fontsource/kumbh-sans/700.css';

interface CardProps {
    className?: string;
    children?: ReactNode;
  }

  const Backgroundcard: React.FC<CardProps> = ({ className, children }) => {
    return (
<div
  className={`rounded-3xl p-6 mx-1 w-full ${className || ''} mt-[clamp(-6rem,10vw,20rem)]`}
  style={{ maxWidth: '1440px' }}
>
    <div
          className="
          relative flex flex-col items-center 
          justify-center rounded-3xl border border-transparent p-4 text-center shadow-custom"
        >
          {/* Gradient background */}
        <div
            style={{
              background: `
                border-box linear-gradient(145deg,
                  rgba(100, 100, 100), 
                  rgba(50, 50, 50),
                  rgba(37, 37, 37),
                  rgba(37, 37, 37)
              `,
            }}
            className="
            absolute inset-0 rounded-3xl transition-all duration-100 
    bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))]"
          />
          {/* Neutral-800 foreground */}
          <div className="absolute inset-[1px] bg-neutral-800 rounded-3xl pointer-events-none" />
          <div className="relative z-10 w-full">{children}</div>
          </div>
        </div>
)
}

export default Backgroundcard;