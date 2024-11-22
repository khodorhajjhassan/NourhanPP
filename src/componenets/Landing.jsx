import React from "react";
import Home from "./home";
import Logo from "./Logo";
import MeetMe from "./MeetMe";
import SliderComponent from "./SliderComponent";
import Contact from "./Contact";
import Footer from "../layout/Footer";

const Landing = () => {
  return (
    <div>
      <Home />
      <Logo />
      <MeetMe />
      <SliderComponent />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
