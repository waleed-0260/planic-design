import React from "react";

const images = [
  { src: "/images/Architect.png", text: "Personalized Interior Design for Every Space" },
  { src: "/images/interior.jpg", text: "Architectural Layouts That Work" },
  { src: "/images/proc3.jpg", text: "Photo-Realistic 3D Renderings" },
  { src: "/images/project1.jpg", text: "Photo-Realistic 3D Renderings" },
  { src: "/images/Visulization.png", text: "Construction OnSite Supervision" },
];

const Expertise = () => {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full">Expertise</h2>

      {/* First Row */}
      <div className="flex gap-4 mb-4 my-[50px]">
        {/* First Image - double width */}
        <div className="flex-2 w-2/3 relative group overflow-hidden h-[300px] rounded-lg">
          <img
            src={images[0].src}
            alt={images[0].text}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow">
            {images[0].text}
          </div>
        </div>

        {/* Second Image - normal width */}
        <div className="flex-1 w-1/3 relative group overflow-hidden h-[300px] rounded-lg">
          <img
            src={images[1].src}
            alt={images[1].text}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow">
            {images[1].text}
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex gap-4">
        {[images[2], images[3], images[4]].map((img, index) => (
          <div
            key={index}
            className="w-1/3 relative group overflow-hidden h-[300px] rounded-lg"
          >
            <img
              src={img.src}
              alt={img.text}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow">
              {img.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
