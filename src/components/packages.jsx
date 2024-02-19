import React from 'react';
import Filters from './filters';
import PackageCard from './packagecard';
import '../styles.css';

const PackagesComponent = () => {
  return (
    <div className="absolute z-10 packages-container top-[45%] w-11/12 h-fit ml-20 right-16 lg:right-16 md:right-10 md:ml-20 sm:right-10 sm:ml-20 bg-white flex flex-col sm:flex-row">
      <div className="flex flex-col w-full">
        <div className="flex justify-start items-center p-4 border-b-2 border-gray-300 rounded-tl-3xl rounded-tr-3xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-20 md:space-x-60 sm:space-y-0">
            <h3 className="text-lg font-semibold sm:ml-10">Filters</h3>
            <button className="text-sm text-blue-500 hover:underline sm:ml-0 sm:mt-0 mt-2">
              Reset All
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8 md:space-x-16 sm:ml-4 md:ml-20 ml-20 mt-2 sm:mt-0">
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

        <div className="flex">
          <Filters />

          <div className="border-r-2 ml-4 sm:ml-14 border-[#C8C8C8]"></div>
          <div className="w-4 sm:w-8"></div>

          <div className="flex flex-wrap">
            <PackageCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PackagesComponent;
