import React from 'react';
import whitelogo from "../../../public/images/whitelogo.png"
import Image from 'next/image';
import Link from 'next/link';
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-md">
      <span className='flex flex-row border-b border-gray-700'>
        <span className='w-[80px] h-[80px]'>
        <Image src={whitelogo} alt="" className='object-cover'/>
        </span>
      <h2 className="text-2xl font-bold  pt-[20px]">Dashboard</h2>
      </span>
      <ul className="mt-6 space-y-4">
        <Link  href="/admin/dashboard" className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <p>Contact Leads</p>
        </Link>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <a href="/">Blogs</a>
        </li>
        <Link href="/admin/dashboard/portfolio" className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <p>Portfolio</p>
        </Link>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <a href="/">Testimonials</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
