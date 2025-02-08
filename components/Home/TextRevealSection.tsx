import { useEffect, useRef, useState } from "react";

export default function TextRevealSection() {
  const sectionRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const words = `Planic Design is a prominent architectural firm based in Islamabad, 
  established in 2018. The firm has undertaken projects throughout Pakistan 
  and in London. Its headquarters are located in Gulberg Green, Islamabad. 
  “We craft spaces that not only meet the needs but inspire and enrich the daily lives of those 
  who inhabit them. We design with purpose. Creating an innovative design leaving a timeless impact”.`.split(" ");

  useEffect(() => {
    const handleScroll = (event:any) => {
      event.preventDefault(); // Stop default scrolling behavior

      if (event.deltaY > 0 && wordIndex < words.length) {
        // Scrolling down → Reveal words
        setWordIndex((prev) => prev + 1);
      } else if (event.deltaY < 0 && wordIndex > 0) {
        // Scrolling up → Hide words
        setWordIndex((prev) => prev - 1);
      }

      if (wordIndex === words.length) {
        document.body.style.overflow = "auto"; // Unlock scrolling after all words turn black
        window.removeEventListener("wheel", handleScroll);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.overflow = "hidden"; // Lock scroll when section is in view
          window.addEventListener("wheel", handleScroll, { passive: false });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleScroll);
    };
  }, [wordIndex]);

  return (
    <div className="w-full bg-[#f1eee9] h-full">

    <section ref={sectionRef} className=" flex items-center justify-center  p-10 py-[20px] z-50 relative bg-[#f1eee9]">
      <div className="max-w-3xl text-center text-2xl font-medium leading-relaxed">
        {words.map((word, index) => (
          <span
            key={index}
            className={`transition-colors duration-200 ${
              index < wordIndex ? "text-black " : "text-gray-400"
            }`}
            >
            {word}{" "}
          </span>
        ))}
      </div>
    </section>
            </div>
  );
}
