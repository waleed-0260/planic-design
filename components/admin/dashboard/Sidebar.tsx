import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-md">
      <h2 className="text-2xl font-bold p-4 border-b border-gray-700">Dashboard</h2>
      <ul className="mt-6 space-y-4">
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <a href="#contact-leads">Contact Leads</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <a href="#blogs">Blogs</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <a href="#posts">Posts</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
