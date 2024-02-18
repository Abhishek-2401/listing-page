import React from 'react';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="logo container mx-auto flex items-center justify-between">
        <div className="logo-img flex items-center ml-4">
          <div className="h-10 w-60"></div>
        </div>

        <div className="lg:flex items-center space-x-4 mr-20">
          <div className="relative rounded-full bg-white-100 border border-black px-2 py-1 search-bar">
            <div className="search-icon"></div>
            <input
              type="text"
              placeholder="Search Destinations"
              className="w-full rounded-full focus:outline-none search-input"
            />
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-violet">Honeymoon</a>
            <a href="#" className="text-black">Friends/Family</a>
            <a href="#" className="text-black">Solo</a>
          </div>

          <button className="bg-custom-green text-black font-medium px-4 py-1.5 rounded-lg hover:bg-black hover:text-[#1ed760]">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
