import React from 'react';

const Main = () => {
  return (
    <div className="w-[90%] flex md:flex-row flex-col justify-between items-start my-[60px] md:space-x-9 md:space-y-0 space-y-3">
      <div className="flex-1">
        <p className=" text-xl text-justify leading-relaxes">
          At Planic Design, we turn ideas into inspiring spaces. Our portfolio showcases a diverse
          range of projects across residential, commercial, and office interiors—each crafted with
          a focus on elegance, functionality, and client vision. Explore our work to see how we
          bring design concepts to life.
        </p>
      </div>
      <div className="flex flex-col flex-1 space-y-4 textColor text-md">
        <p className='textColor hover:text-black cursor-pointer'>Architecture Planning</p>
        <p className='textColor hover:text-black cursor-pointer'>Interior Design</p>
        <p className='textColor hover:text-black cursor-pointer'>3D Visualization</p>
        <p className='textColor hover:text-black cursor-pointer'>Renovation & Fit out</p>
      </div>
    </div>
  );
};

export default Main;
