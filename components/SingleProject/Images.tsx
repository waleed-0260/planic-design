import React from 'react'

const Images = ({panel, master, rendering, additional}:any) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-[90%] my-[50px]">
      {/* First Row: Two Images */}
      <div className="col-span-1">
        <img src={panel} alt="Panel" className="w-full h-auto rounded-lg" />
      </div>
      <div className="col-span-1">
        <img src={master} alt="Master" className="w-full h-auto rounded-lg" />
      </div>

      {/* Second Row: One Image */}
      <div className="col-span-2">
        <img src={rendering} alt="Master" className="w-full h-auto rounded-lg" />
      </div>

      {/* Third Row: One Image */}
      <div className="col-span-2">
        <img
          src={additional}
          alt="Additional"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>  )
}

export default Images