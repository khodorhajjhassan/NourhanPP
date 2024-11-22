import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleImageClick = (category) => {
    navigate(`/gallery?q=${category}`);
  };

  return (
    <div className="w-full absolute top-0 left-0 z-50">
      <div className="flex justify-around items-center xl:p-6 lg:p-4 p-2 ">
        <a href="#" className="text-white font-semibold xl:text-lg lg:text-sm">
          <img
            width="144"
            height="80"
            src="/images/ETC.png"
            className="lg:w-36  w-20"
            alt=""
          />
        </a>
        <div className="flex md:gap-10 gap-4">
          <a
            href="#about"
            className="text-white md:block  xl:text-2xl lg:text-lg md:text-base text-xs capitalize hover:text-[#fe5239] hover:scale-110 duration-300"
          >
            About
          </a>
          <a
            href="#gallery"
            className="text-white md:block  xl:text-2xl lg:text-lg md:text-base text-xs capitalize hover:text-[#fe5239] hover:scale-110 duration-300"
          >
            project
          </a>
          <a
            href="#"
            onClick={() => handleImageClick("all")}
            className="text-white md:block  xl:text-2xl lg:text-lg md:text-base text-xs capitalize hover:text-[#fe5239] hover:scale-110 duration-300"
          >
            gallery
          </a>
          <a
            href="#contact"
            className="text-white md:block  xl:text-2xl lg:text-lg md:text-base text-xs capitalize hover:text-[#fe5239] hover:scale-110 duration-300"
          >
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
