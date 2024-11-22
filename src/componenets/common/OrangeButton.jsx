import React from "react";

const OrangeButton = ({ link, content }) => {
  return (
    <>
      <a href={link}>
        <button className="lg:text-xl rounded-md py-2 lg:px-6 px-3 md:text-base font-bold duration-300 transform hover:scale-105 hover:shadow-neon text-white bg-[#fe5239]">
          {content}
        </button>
      </a>
    </>
  );
};

export default OrangeButton;
