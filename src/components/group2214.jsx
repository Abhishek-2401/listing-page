import React from "react";
import Packages from '../components/packages.jsx'
import "../styles.css";

const Group2214 = () => {
  return (
    <div className="">
      <div
        className="bg-cover bg-center bg-img relative"
        style={{ backgroundImage: "url(bagpacker-bg.png)" }}
      >
        
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>

        <div className="text-content absolute inset-0 flex items-center justify-between p-4 sm:p-8">
          <div className="text-white ml-4 sm:ml-12 mb-8 sm:mb-24">
            <h1 className="text-xl sm:text-3xl font-bold">Munnar</h1>
            <p className="text-base sm:text-lg font-normal">
              Plan your dream trip with campfly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group2214;
