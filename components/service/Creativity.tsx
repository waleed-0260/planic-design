import React from "react";

const Creativity = ({images}:any) => {



  return (
    <div className="w-[90%] grid md:grid-cols-2 grid-cols-1 gap-4 my-[80px] ">
      {/* Left column */}
 <div className="flex flex-col gap-4 mt-[20px]"> {/* Increased top margin */}
  {images.slice(0, 2).map((img:any, i:any) => (
  <div
  key={i}
  className="relative h-[500px] overflow-hidden rounded-lg group"
>
  {/* Image */}
  <img
    src={img.src}
    alt="Creative Work"
    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

  {/* Text */}
  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
    <p className="text-2xl ">{img.heading}</p>
    <p className="text-md">{img.text}</p>
  </div>
</div>

  ))}
</div>


      {/* Right column */}
      <div className="flex flex-col gap-4">
        {images.slice(2).map((img:any, i:any) => (
         <div
  key={i}
  className="relative h-[500px] overflow-hidden rounded-lg group"
>
  {/* Image */}
  <img
    src={img.src}
    alt="Creative Work"
    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

  {/* Text */}
  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
    <p className="text-2xl ">{img.heading}</p>
    <p className="text-md">{img.text}</p>
  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default Creativity;
