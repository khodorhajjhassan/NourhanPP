import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { brand } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Logo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-[#dc3a28] w-full m-auto overflow-hidden md:p-8 py-4 px-2">
      <div className="max-w-[1440px] m-auto  md:px-10 ">
        <h2 className="lg:text-5xl text-3xl uppercase md:mb-10 my-2 text-white font-bold md:text-left text-center">
          Satisfied Clients
        </h2>
      </div>
      <div className="">
        <Slider {...settings}>
          {brand.map((val) => (
            <div
              key={val.id}
              className="d-flex justify-center items-center content-center p-4"
            >
              <LazyLoadImage
                src={val.img}
                className={` ${
                  val.id == 7 ? "-translate-y-8" : ""
                }  md:w-48 md:h-36 w-32 h-24 object-contain `}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Logo;
