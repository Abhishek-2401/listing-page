
import React from 'react';

const Footer = () => {
  return (
    <footer className="  bg-black z-1  py-5 ">
      <div className="container mx-auto mt-16 mb-16 flex flex-col md:flex-row justify-between items-center">
       
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 md:ml-24">
          <div className="flex flex-col items-start mb-4">
            <div className="mb-2">
              <img src="logo-white.png" alt="Logo" className="w-full" />
            </div>
            <p className="text-white">Embark on a journey where every step is a story, and every destination is a chapter waiting to be written.</p>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-2xl text-white mr-4"><img src="footer-insta-icon.png" alt="Instagram" /> </a>
            <a href="#" className="text-2xl text-gray-600 mr-4"><img src="footer-fb-icon.png" alt="Facebook" /></a>
            <a href="#" className="text-2xl text-gray-600"><img src="footer-yt-icon.png" alt="YouTube" /></a>
          </div>
        </div>

        
        <div className="h-40 border-l border-white mx-4 hidden md:block"></div>

        
        <div className="w-full text-base md:w-1/2 lg:w-1/4 mb-4 md:mb-0 flex flex-col md:flex-row md:justify-between">
          <ul className="list-none w-full md:w-1/2 space-y-6 md:space-y-6 md:flex md:flex-col md:items-start">
            <li className="mb-2"><a href="#" className="text-white">Home</a></li>
            <li className="mb-2"><a href="#" className="text-white">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-white">Contact Us</a></li>
          </ul>
          <ul className="list-none w-full md:w-1/2 space-y-6 md:space-y-6 md:flex md:flex-col md:items-start">
            <li className="mb-2"><a href="#" className="text-white">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="text-white">Terms & Conditions</a></li>
            <li className="mb-2"><a href="#" className="text-white">Cancellation and Refund Policy</a></li>
          </ul>
        </div>

       
        <div className="h-40 border-l border-white mx-4 hidden md:block"></div>

        
        <div className="w-full  md:w-1/2 lg:w-1/4 md:mr-20">
          <p className="text-2xl text-white mb-4">Unleash the magic of exploration straight to your inbox</p>
          <div className="flex items-center">
            <input type="email" placeholder="Enter your mail id" className="py-2 px-4 border border-white bg-transparent rounded-l-lg" />
            <button type="submit" className="bg-custom-green text-black py-3 px-4 -ml-px border-custom-green focus:outline-none rounded-r-lg hover:bg-black hover:text-[#1ed760]">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;