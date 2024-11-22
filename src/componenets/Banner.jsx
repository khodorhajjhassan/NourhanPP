import React, { useEffect } from "react";

const Banner = ({ setIsLoaded }) => {
  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="w-full h-full relative z-10 overflow-hidden">
      <video
        src="/Banner.mp4"
        autoPlay
        loop
        muted
        className="w-full md:block hidden"
        onCanPlayThrough={handleVideoLoad}
      ></video>
      <video
        src="/mobile-banner.mp4"
        autoPlay
        loop
        muted
        className="w-full md:hidden block"
        onCanPlayThrough={handleVideoLoad}
      ></video>

      <div className="absolute p-4 overflow-hidden w-full md:left-[68%] md:top-[65%] sm:top-[50%] sm:right-[0%] top-[50%] left-[64%] transform -translate-x-1/2 flex flex-row lg:gap-x-8 gap-x-4 justify-center items-center">
        <a href="#about">
          <button className="lg:text-2xl rounded-md py-2 lg:px-6 px-3 md:text-base sm:text-sm text-[8px] font-bold duration-300 transform hover:scale-105  text-white bg-[#fe5239]">
            Learn More
          </button>
        </a>
        <a href="#contact">
          <button className="lg:text-2xl rounded-md py-2 lg:px-6 px-3 md:text-base sm:text-sm text-[8px] font-bold duration-300 transform hover:scale-105  text-white bg-[#fe5239]">
            Get in Touch
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
