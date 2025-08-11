import React from "react";

const Creativity = ({images}:any) => {



  return (
    <div className="w-[90%] grid grid-cols-2 gap-4 my-[80px] ">
      {/* Left column */}
 <div className="flex flex-col gap-4 mt-[20px]"> {/* Increased top margin */}
  {images.slice(0, 2).map((img:any, i:any) => (
    <div
      key={i}
      className="relative h-[500px] overflow-hidden rounded-lg" // now each takes half naturally
    >
      <img
        src={img.src}
        alt="Creative Work"
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Text */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-2xl">
          {img.heading}
        </p>
        <p className="text0md">
        {img.text}
        </p>
      </div>
    </div>
  ))}
</div>


      {/* Right column */}
      <div className="flex flex-col gap-4">
        {images.slice(2).map((img:any, i:any) => (
          <div
            key={i}
            className="relative h-[500px] overflow-hidden rounded-lg"
          >
            <img
              src={img.src}
              alt="Creative Work"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Text */}
             <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-2xl">
          {img.heading}
        </p>
        <p className="text0md">
        {img.text}
        </p>
      </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creativity;
