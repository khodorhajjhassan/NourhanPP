import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gallery } from "../data";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SliderComponent = () => {
  const settingss = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();

  const handleImageClick = (category) => {
    navigate(`/gallery?q=${category}`);
  };

  return (
    <div
      className="bg-[url('/images/bg2.jpg')] w-full m-auto overflow-hidden md:p-8 md:pb-24  py-10 px-4 min-h-96"
      id="gallery"
    >
      <div className="max-w-[1440px] m-auto  md:px-10 p-2">
        <h2 className="lg:text-5xl text-3xl uppercase md:mb-10 my-2 text-[#67625E] font-bold md:text-left text-center">
          Gallery
        </h2>
      </div>
      <div className="max-w-[1440px] m-auto md:p-0 p-4">
        <Slider {...settingss}>
          {gallery.map((val) => (
            <div
              key={val.id}
              className="outline-none relative group overflow-hidden"
            >
              <div className="d-flex w-full rounded-xl h-96 justify-center items-center content-center md:p-4 p-2 outline-none">
                <LazyLoadImage
                  src={val.img}
                  width="1920"
                  height="1080"
                  className=" w-full h-full object-cover rounded-xl shadow-orange "
                  alt=""
                />
              </div>
              {/* <div className="absolute left-8 bottom-2 xl:text-[26px] lg:text-lg group-hover:hidden">
                <h2 className="font-bold mb-4 text-[#fe5239] capitalize">{val.title}</h2>
              </div> */}
              <div
                className="absolute bottom-0 left-0 w-full h-full rounded-xl text-white p-6 z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                style={{ backgroundColor: "#0000009f" }}
              >
                <div className="text-white flex flex-col justify-between h-full">
                  <div>
                    <h2 className="font-bold mb-4 xl:text-[26px] capitalize lg:text-lg text-lg text-white">
                      {val.title}
                    </h2>
                    <h2 className="font-bold mb-4 xl:text-[18px] lg:text-lg text-sm">
                      {val.description}
                    </h2>
                  </div>
                  <div>
                    <a
                      href="#"
                      onClick={() => handleImageClick(val.href.split("=")[1])}
                    >
                      <button className="lg:text-base text-sm rounded-md py-2 lg:px-6 px-3 md:text-base font-bold duration-300 transform hover:scale-105 hover:shadow-neon text-white bg-[#fe5239]">
                        View More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
