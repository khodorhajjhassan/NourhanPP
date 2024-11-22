import React from "react";
import AnimatedCursor from "react-animated-cursor";

const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const Cursor = () => {
  return (
    !isMobileDevice() && (
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="236, 77, 74"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "#EC4D4A",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
    )
  );
};

export default Cursor;
