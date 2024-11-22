import React from "react";
import { socailMedia } from "../data";

const Footer = () => {
  return (
    <footer className="bg-[#fe5239] bg-cover bg-center text-white py-6 px-2 md:text-left text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm ">
          © 2024 ETC. All Rights Reserved. Design by{" "}
          <span className="font-extrabold">ETC</span> built by{" "}
          <span className="font-extrabold">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/khodor-hajj-hassan-42769a234"
            >
              Khodor Hajj Hassan
            </a>
          </span>
          .
        </p>

        <div className="flex gap-4 space-x-4 mt-4 md:mt-0">
          {socailMedia.map((val, index) => (
            <div key={index}>
              <a
                target="_blank"
                href={val.link}
                className="duration-300 hover:scale-110 text-xl"
              >
                {val.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
