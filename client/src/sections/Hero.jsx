import React from "react";
import heroVideo from "/video/furniture.mp4";

const Hero = () => {
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

      <div className="relative z-20 flex items-center justify-center h-full text-center text-white px-4">
        <div>
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
            Luxora Furniture
          </h1>
          <p className="text-lg md:text-2xl">Crafted Elegance in Every Grain</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
