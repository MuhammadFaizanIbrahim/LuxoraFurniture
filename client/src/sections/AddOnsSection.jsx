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
    <section className="bg-black h-[100vh] text-white py-12">
      <h2
        className="text-5xl font-normal mt-30 mb-30 text-center"
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
        className="cursor-grab overflow-x-scroll flex scroll-smooth snap-x snap-mandatory ml-70"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        <div className="min-w-[30%] h-[300px] mt-[200px] snap-start shrink-0 rounded-sm overflow-hidden bg-white/10">
          <img
            src="/images/chairs.webp"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-[20%] h-[500px] ml-4 snap-start shrink-0 rounded-sm overflow-hidden bg-white/10">
          <video
            src="/video/vfx.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-[30%] h-[300px] mt-[200px] ml-4 snap-start shrink-0 rounded-sm overflow-hidden bg-white/10">
          <img
            src="/images/branding.webp"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-[20%] h-[500px] ml-4 snap-start shrink-0 rounded-sm overflow-hidden bg-white/10">
          <video
            src="/video/services_chair.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-[30%] h-[300px] mt-[200px] ml-4 mr-10 snap-start shrink-0 rounded-sm overflow-hidden bg-white/10">
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
