import { useState, useEffect, useRef } from "react";
import { galleryData } from "../data";
import { ColorRing } from "react-loader-spinner";
import { Mousewheel, Pagination, Keyboard } from "swiper/modules";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loadingStates, setLoadingStates] = useState({});
  const swiperRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("q");
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  const filteredImages =
    selectedCategory === "all"
      ? galleryData.flatMap((item) => item.images)
      : galleryData.find((item) => item.category === selectedCategory)
          ?.images || [];

  useEffect(() => {
    filteredImages.forEach((image) => {
      const preloadNormal = new Image();
      preloadNormal.src = image.normal;

      const preloadResponsive = new Image();
      preloadResponsive.src = image.responsive;
    });
  }, [filteredImages]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  };

  const handleImageLoad = (index) => {
    setLoadingStates((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageClick = (description) => {
    if (description) {
      Swal.fire({
        title: "Image Description",
        text: description,
        icon: "info",
        confirmButtonText: "Close",
        backdrop: `
          rgba(0,0,0,0.4)
          left top
          no-repeat
        `,
      });
    }
  };

  return (
    <div>
      {/* Navigation for category selection */}
      <nav className="md:p-6 p-4 z-20 flex w-full md:justify-around md:text-base text-sm justify-between md:gap-0 gap-10 items-center fixed top-0 left-0 bg-white shadow-neon2 overflow-x-auto scrollbar-hide">
        <a
          href="/"
          className={`tracking-wider italic font-bold capitalize cursor-pointer md:hover:scale-110 duration-200 ${
            selectedCategory === "Home"
              ? "text-[#fe5239]"
              : "text-secondary-500 hover:text-[#fe5239]"
          }`}
        >
          Home
        </a>
        <button
          className={`tracking-wider italic font-bold capitalize cursor-pointer md:hover:scale-110 duration-200 ${
            selectedCategory === "all"
              ? "text-[#fe5239]"
              : "text-secondary-500 hover:text-[#fe5239]"
          }`}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        {galleryData.map((item) => (
          <button
            key={item.category}
            className={`tracking-wider italic font-bold capitalize cursor-pointer md:hover:scale-110 duration-200 ${
              selectedCategory === item.category
                ? "text-[#fe5239]"
                : "text-secondary-500 hover:text-[#fe5239]"
            }`}
            onClick={() => handleCategoryChange(item.category)}
          >
            {item.category}
          </button>
        ))}
      </nav>

      <div className="mt-[4rem]">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination, Keyboard]}
          className="mySwiper h-[calc(100vh_-_4rem)]"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {filteredImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="w-full h-[calc(100vh_-_4rem)] relative">
                {image.description && (
                  <div
                    className="absolute top-10 text-white  text-4xl left-4 z-30 "
                    onClick={() => handleImageClick(image.description)}
                  >
                    <BsFillInfoCircleFill />
                  </div>
                )}
                {!loadingStates[index] && (
                  <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="color-ring-loading"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  </div>
                )}

                <LazyLoadImage
                  src={image.normal}
                  alt={image.description}
                  className={`w-full h-full object-cover md:block hidden ${
                    loadingStates[index] ? "" : "hidden"
                  }`}
                  onLoad={() => handleImageLoad(index)}
                />

                <LazyLoadImage
                  src={image.responsive}
                  alt={image.description}
                  className={`h-full w-full object-cover md:hidden block ${
                    loadingStates[index] ? "" : "hidden"
                  }`}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Gallery;
