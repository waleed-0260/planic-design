import React, { useEffect, useRef, useState } from "react";

const ScrollColorText: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0); // Tracks the scroll progress
  const containerRef = useRef<HTMLDivElement | null>(null); // Ref for the container holding the paragraph

  // Paragraph text split into words
  const words = "Planic Design is your partner in creating inspiring spaces that reflect your unique style. From conceptual design to project completion, we deliver innovation, functionality, and artistry at every step.".split(
    " "
  );

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const paragraphHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Only calculate progress when the section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          const visibleRatio =
            Math.min(windowHeight - rect.top, paragraphHeight) / paragraphHeight;

          setScrollProgress(Math.min(Math.max(visibleRatio, 0), 1)); // Clamp values between 0 and 1
        } else {
          setScrollProgress(0); // Reset progress when section is out of view
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate how many words to color based on the scroll progress
  const visibleWordsCount = Math.floor(scrollProgress * words.length);

  return (
    <div className="flex flex-col my-[50px] lg:mx-0 mx-5">
      {/* Section with dynamic paragraph */}
      <div
        ref={containerRef}
        className="h-screen flex items-center justify-center bg-[#F5EFE6] overflow-hidden"
      >
        <p className="lg:w-[50%] flex flex-wrap leading-relaxed text-2xl text-[#CBA2B2]">
          {words.map((word, index) => (
            <span
              key={index}
              style={{
                color: index < visibleWordsCount ? "#000000" : "#CBA2B2",
                transition: "color 0.2s ease",
              }}
              className="mr-2"
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ScrollColorText;
