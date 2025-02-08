import React, { useEffect, useRef, useState } from "react";

const ScrollColorText: React.FC = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const words = `Planic Design is a prominent architectural firm based in Islamabad, 
  established in 2018. The firm has undertaken projects throughout Pakistan 
  and in London. Its headquarters are located in Gulberg Green, Islamabad. 
  “We craft spaces that not only meet the needs but inspire and enrich the daily lives of those 
  who inhabit them. We design with purpose. Creating an innovative design leaving a timeless impact”.`.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!isInView) return;

      if (wordIndex < words.length) {
        setWordIndex((prev) => prev + 1);
      } else {
        document.body.style.overflow = "auto"; // Unlock scroll after all words change color
      }
    };

    if (isInView) {
      document.body.style.overflow = "hidden"; // Lock scrolling
      window.addEventListener("wheel", handleScroll);
    } else {
      document.body.style.overflow = "auto"; // Unlock if section is not in view
    }

    return () => window.removeEventListener("wheel", handleScroll);
  }, [isInView, wordIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
    ref={sectionRef}
    className="h-screen flex items-center justify-center bg-white p-10"
  >
    <div className="max-w-3xl text-center text-lg font-medium leading-relaxed">
      {words.map((word, index) => (
        <span
          key={index}
          className={`transition-colors duration-200 ${
            index < wordIndex ? "text-black" : "text-gray-400"
          }`}
        >
          {word}{" "}
        </span>
      ))}
    </div>
  </section>
  );
};

export default ScrollColorText;
