import React from "react";

const CoreServices = () => {
  const items = [
    { src: "/images/service2.png", alt: "Service 1", caption: "Creative 3D Visualization Service" },
    { src: "/images/service4.png", alt: "Service 2", caption: "Architectural Rendering & Design" },
    { src: "/images/Visulization.png", alt: "Service 3", caption: "High-Res Marketing Visuals" },
  ];

  return (
<div className="w-[90%] my-[100px]">
  <div className="flex justify-between gap-2">
    {items.map((it, idx) => (
      <div
        key={idx}
        className="relative flex-1 h-[400px] overflow-hidden shadow-lg"
      >
        {/* Image */}
        <img
          src={it.src}
          alt={it.alt}
          className="w-full h-full object-cover transform transition-transform duration-300 ease-out hover:scale-105"
        />

        {/* Bottom caption overlay */}
        <div className="absolute left-0 right-0 bottom-0">
          <div className="bg-gradient-to-t from-black/65 via-black/30 to-transparent px-3 py-2">
            <p className="text-white text-sm font-semibold line-clamp-2">
              {it.caption}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default CoreServices;
