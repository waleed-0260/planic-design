import React from 'react'

const Explanation = () => {
  return (
    <div className='flex flex-col w-[70%] my-[80px] space-y-9'>
        <h1 className='md:text-[52px] text-2xl'>Lorem ipsum dolor sit amet.</h1>
        <p className='text-md textColor'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam earum pariatur quam vero sunt fugit quisquam deleniti vitae, atque saepe reiciendis, modi quasi tempore corporis. Possimus natus quo praesentium corrupti molestias, quisquam perspiciatis incidunt illo, laudantium illum accusamus cumque eveniet hic ab quas. Maxime explicabo doloremque iste earum aliquam iure officiis cupiditate laboriosam in ipsa? Iusto excepturi hic vero officiis sunt! Blanditiis minus praesentium quae ipsam magnam quos? Illum.</p>
        <div className='flex flex-row space-x-5'>
          <button className='button'>Projects</button>
          <button className='button'>People</button>
          <button className='button'>Contact</button>
          <button className='button'>Vacancies</button>

        </div>
    </div>
  )
}

export default Explanation