import React, { useRef } from "react";

const AddOnsSection = () => {
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    scrollRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    scrollRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    const slider = scrollRef.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 1.5;
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  return (
    <section className="bg-black text-white py-10 sm:py-12 h-[80vh] sm:h-[100vh]">
      <h2
        className="text-5xl font-normal mt-12 mb-12 sm:mt-20 sm:mb-20 text-center"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Add-ons
      </h2>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="cursor-grab overflow-x-scroll flex scroll-smooth snap-x snap-mandatory ml-4 md:l-4 lg:ml-70 "
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        <div className="min-w-[70%] sm:min-w-[40%] md:min-w-[30%] h-[270px] sm:h-[300px] mt-[132px] sm:mt-[150px] md:mt-[200px] snap-start shrink-0 rounded-sm overflow-hidden bg-white/10">
          <img
            src="/images/chairs.webp"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-[60%] sm:min-w-[30%] md:min-w-[20%] h-[400px] sm:h-[400px] md:h-[500px] ml-4 snap-start shrink-0 rounded-sm overflow-hidden bg-white/10">
          <video
            src="/video/vfx.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-[70%] sm:min-w-[40%] md:min-w-[30%] h-[270px] sm:h-[300px] mt-[132px] sm:mt-[150px] md:mt-[200px] ml-4 snap-start shrink-0 rounded-sm overflow-hidden bg-white/10">
          <img
            src="/images/branding.webp"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-[60%] sm:min-w-[30%] md:min-w-[20%] h-[400px] sm:h-[400px] md:h-[500px] ml-4 snap-start shrink-0 rounded-sm overflow-hidden bg-white/10">
          <video
            src="/video/services_chair.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-[70%] sm:min-w-[40%] md:min-w-[30%] h-[270px] sm:h-[300px] mt-[132px] sm:mt-[150px] md:mt-[200px] ml-4 mr-6 snap-start shrink-0 rounded-sm overflow-hidden bg-white/10">
          <video
            src="/video/shootings.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;
