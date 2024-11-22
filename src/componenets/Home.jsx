import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import Banner from "./Banner";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 flex flex-col justify-center items-center z-50 bg-[#6D6865]">
          <div className="loader mb-2 ">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
          <div className="text-center text-white italic">Loading...</div>
        </div>
      )}

      <div className={isLoaded ? "block" : "hidden"}>
        <Navbar />
        <Banner setIsLoaded={setIsLoaded} />
      </div>
    </>
  );
};

export default Home;
