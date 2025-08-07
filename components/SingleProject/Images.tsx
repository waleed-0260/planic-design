import React from 'react'

const Images = ({panel, master, rendering, additional, mapImage}:any) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-[90%] my-[50px]">
      {/* First Row: Two Images */}
      <div className="md:col-span-1 col-span-2">
        {panel && 
        <img src={panel} alt="Panel" className="w-full h-auto " />
        }
      </div>
      <div className="md:col-span-1 col-span-2">
        {master &&
        <img src={master} alt="Master" className="w-full h-auto " />
}
      </div>

      {/* Second Row: One Image */}
      <div className="col-span-2">
 {mapImage &&
        <img src={mapImage} alt="Master" className="w-full h-auto " />
 }
      </div>

      <div className="col-span-2">
        {rendering && <img src={rendering} alt="Master" className="w-full h-auto " />}
      </div>

      {/* Third Row: One Image */}
      <div className="col-span-2">
        {additional &&
        <img
        src={additional}
        alt="Additional"
        className="w-full h-auto "
        />
      }
      </div>
    </div>  )
}

export default Images