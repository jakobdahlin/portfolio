import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css',
  ],
  safelist: [
    'mt-[clamp(-6rem,5vw,20rem)]',
    'text-neutral-500',
  ],
  theme: {
    letterSpacing: {
      responsive: 'clamp(0px, 1vw, 15px)',
    },
    extend: {
    
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        moveSlideshow: {
          "100%": { transform: "translateX(-50%)" },
        },

        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        
        },
      },
      animation: {
        moveSlideshow: "moveSlideshow 15s linear infinite",
        fadeInDown: 'fadeInDown 0.5s ease-in-out',
        'bounce-slow': 'bounce-slow 2s infinite',
        slowPulse: 'pulse 5s ease-in-out infinite',
      },

      clipPath: {
        'triangle': 'polygon(0 0, 100% 0, 100% 100%)',
      },

      typography: {
        DEFAULT: {
          css: {
            color: 'inherit', // Remove global color conflicts
          },
        },
      },
      fontSize: {
        responsive: 'clamp(30px, 4vw, 60px)',
      },
      boxShadow: {
        custom: '0px 30px 40px 0px rgba(0, 0, 0, 0.50)',
      },
      colors: {
        ...require('tailwindcss/colors'), // Include default colors
        backgroundImage: {
          'radial-top': 'radial-gradient(circle at top, #ff7eb3, #ff758c, #ff5858)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
