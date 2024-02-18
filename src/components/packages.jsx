// PackagesComponent.js
import React from 'react';
import Filters from './filters';
import PackageCard from './packagecard'; 
import '../styles.css';


const PackagesComponent = () => {
  return (
    <div className="absolute z-10 packages-container top-[45%] w-11/12 h-fit ml-20 right-16 bg-white flex">
      {/* Left Container */}
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex justify-start items-center bg-white p-4 border-b-2 border-gray-300 rounded-tl-3xl rounded-tr-3xl">
          {/* Div 1: Filters heading and reset button */}
          <div className="flex items-center space-x-60">
            <h3 className="text-lg font-semibold ml-10">Filters</h3>
            <button className="text-sm text-blue-500 hover:underline">Reset All</button>
          </div>
          
          {/* Border between Filters heading and other buttons */}

          {/* Div 2: Four heading buttons */}
          <div className="flex space-x-24 justify-start ml-20">
            <button className="text-sm text-gray-600 hover:text-black hover:font-bold relative">
              All Packages <span className="text-[#787878] text-xs">(12)</span>
            </button>
            <button className="text-sm text-gray-600 hover:text-black hover:font-bold relative">
              Adventure <span className="text-[#787878] text-xs">(12)</span>
            </button>
            <button className="text-sm text-gray-600 hover:text-black hover:font-bold relative">
              Mountain <span className="text-[#787878] text-xs">(12)</span>
            </button>
            <button className="text-sm text-gray-600 hover:text-black hover:font-bold relative">
              Homestay <span className="text-[#787878] text-xs">(12)</span>
            </button>
          </div>
        </div>

        {/* Filters Component and PackageCard Component in the same parent div */}
        <div className="flex ">
          {/* Filters Component */}
          <Filters />

          <div className="border-r-2 ml-14 border-[#C8C8C8]"></div>
          <div className="w-8"></div>

          {/* PackageCard Component */}
          <div className="flex flex-wrap">
            {/* Importing and rendering PackageCard */}
            <PackageCard />
          </div>
        </div>

      </div>
     </div>
     
    
  );
};

export default PackagesComponent;