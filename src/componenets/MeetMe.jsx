import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tilt } from "react-tilt";

const MeetMe = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 15, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
    speed: 3000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div
      id="about"
      className="bg-cover md:py-0 py-2 md:pb-0 bg-center min-h-screen"
      style={{
        backgroundImage: "url('/images/bg1.jpg')",
        minHeight: "400px",
      }}
    >
      <div className="max-w-[1440px] m-auto md:p-10 p-2 flex md:flex-nowrap flex-wrap md:gap-8 items-center">
        <div className="w-full md:hidden block">
          <LazyLoadImage
            src="/images/NourhanPP.png"
            width="300"
            height="300"
            className="w-full"
            alt="Nourhan Profile Picture"
          />
        </div>
        <div className="w-full md:text-left text-center">
          <h2 className="lg:text-5xl text-3xl uppercase md:my-10 my-4 text-[#67625E] font-bold">
            meet me
          </h2>
          <p className="text-[#67625E] lg:text-lg md:text-base text-sm md:mb-8 mb-4">
            Hi there! I’m Nourhan Aknan, a designer based in Lebanon, fueled by
            a love for creative storytelling. I specialize in social media
            visuals, concept art, and building brand identities that capture
            hearts and minds. I believe in crafting experiences through design
            that feel both personal and powerful.
          </p>
          <p className="text-[#67625E]  lg:text-lg md:text-base text-sm md:mb-8 mb-4">
            As you explore my projects, I hope you’ll see the care and
            dedication I put into each piece. When you’re ready to turn your
            ideas into something extraordinary, feel free to reach out—I’d love
            to be a part of your creative journey!
          </p>
          <a href="#contact">
            <button className="lg:text-2xl rounded-md py-2 lg:px-6 px-3 md:text-base font-bold duration-300 transform hover:scale-105 hover:shadow-neon text-white bg-[#fe5239]">
              Let's Connect
            </button>
          </a>
        </div>
        <div className="w-full md:block hidden">
          <Tilt options={defaultOptions}>
            <LazyLoadImage
              src="/images/NourhanPP.png"
              width="100%"
              height="100%"
              className="w-full"
              alt="Nourhan Profile Picture"
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default MeetMe;
