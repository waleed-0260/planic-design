import React from 'react'

const TextAnimation = () => {
  return (
<div className="group overflow-hidden w-full">
  <h1
    className="text-7xl font-bold name transition-all duration-300 group-hover:text-black my-[50px] whitespace-nowrap"
    style={{
      WebkitTextStroke: "1px black",
      color: "transparent",
      WebkitTextFillColor: "transparent",
    }}
  >
    Customize flexible decoration
  </h1>
</div>
  )
}

export default TextAnimation