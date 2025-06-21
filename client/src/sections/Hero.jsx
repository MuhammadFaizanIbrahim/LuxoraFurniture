import React, { useState } from "react";
import heroVideo from "/video/furniture.mp4";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 flex justify-center mt-[100%]
       md:justify-start md:ml-55 md:mt-70
       h-full px-4 md:px-16 text-white font-[Times_New_Roman]">
        <div className="max-w-4xl text-center md:text-left">
          <h1 className="text-5xl md:6xl mb-8">
            We know what furniture brands need
          </h1>

          <button
            className={`w-36 sm:w-40 md:w-44 h-10 sm:h-11 px-4 py-2 font-semibold rounded-sm border border-white relative overflow-hidden 
              transition-colors duration-300 ease-in-out 
              ${hovered ? "bg-transparent text-white" : "bg-transparent text-white"}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span
              className={`absolute inset-0 flex items-center justify-center font-normal transition-transform duration-300
                ${
                  hovered
                    ? "animate-[textSlideUp_0.8s_ease-in-out]"
                    : "animate-[textSlideDown_0.8s_ease-in-out]"
                }`}
            >
              Contact Us
              <span
                className={`ml-2 transition-transform duration-200 ${
                  hovered ? "translate-x-1" : "translate-x-0"
                }`}
              >
                →
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
