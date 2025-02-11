import React, { useEffect, useState } from "react";

const ChevronDown: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const requiresScroll = document.documentElement.scrollHeight > window.innerHeight;
      setVisible(requiresScroll && window.scrollY <= 10);
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setVisible(false);
      } else if (document.documentElement.scrollHeight > window.innerHeight) {
        setVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 ${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white animate-bounce-slow"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default ChevronDown;
