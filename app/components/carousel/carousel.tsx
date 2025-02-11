import React, { useEffect, useRef } from "react";

const Carousel: React.FC = () => {
  const items = [
    "/logos/Nexel.png",
    "/logos/JAKOBD_W.png",
    "/logos/Pixl.png",
    "/logos/Orion.png",
    "/logos/CodeProbe.png",
    "/logos/Arqitect.png",
    "/logos/Flareon.png",
    "/logos/Codera.png",
    "/logos/Syncra.png",
  ];

  const scrollingItems = [...items, ...items];
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 0.5; // Adjust scroll speed

  // Map specific image heights
  const customHeights: { [key: string]: string } = {
    Pixl: "60px",
    Orion: "65px",
  };

  useEffect(() => {
    const container = containerRef.current;
    let position = 0;
    let animationFrameId: number;

    const scroll = () => {
      if (container) {
        position -= scrollSpeed;
        container.style.transform = `translateX(${position}px)`;

        const itemWidth = container.scrollWidth / 2;
        if (Math.abs(position) >= itemWidth) {
          position = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative mx-auto overflow-hidden transform translate-z-0">
          <div
        ref={containerRef}
        className="flex items-center h-[50px] w-full"
        style={{ width: "max-content" }}
      >
        {scrollingItems.map((url, index) => {
          // Extract the image name
          const imageName = url.split("/").pop()?.split(".")[0] || "";
          const imageHeight = customHeights[imageName] || "50px"; // Default height: 50px

          return (
            
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center px-[10px]"
              style={{ minWidth: "150px" }}
            >
              <img
                src={url}
                alt={`Logo ${index + 1}`}
                style={{
                  height: imageHeight, // Dynamic height
                  width: "auto",
                }}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
