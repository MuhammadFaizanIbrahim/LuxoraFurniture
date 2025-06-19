import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ChairAnimator = ({ opacityRef, rotationRef, scaleRef, lightRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    tl.set(".overlay", { opacity: 1 });
    tl.to(".overlay", { opacity: 0, duration: 1 }, "start+=0.4");

    tl.to(".showcase-text", { y: -100, opacity: 1, duration: 1 }, "start+=0.1");

    tl.to(opacityRef.current, { value: 1, duration: 0.1 }, "<");

    tl.to(lightRef.current, { value: 4, duration: 1 }, "start+=0.6");

    tl.to(rotationRef.current, { value: -Math.PI / 4, duration: 1 }, ">+0.3"); // Rotate starts slightly after model appears

    tl.to(scaleRef.current, { value: 1.3, duration: 1 }, ">+0.1");

    tl.to(".box-container", { opacity: 1, scale: 1, duration: 1 }, "<+0.3");
    tl.to(".box-text", { y: -50, opacity: 1, duration: 1 }, "<");

    tl.to(opacityRef.current, { value: 0, duration: 0.1 }, "end");
    // tl.to(rotationRef.current, { value: 0, duration: 1 }, "<");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-[300vh] relative">
      <div className="overlay absolute inset-0 bg-black opacity-0 z-10 pointer-events-none transition-opacity duration-700" />
      <div className="showcase-text absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-5xl opacity-0 z-20">
        Discover the Chair
      </div>
      <div className="box-container absolute inset-0 flex items-center justify-center z-30 opacity-0 scale-75">
        <div className="border-4 border-white w-[300px] h-[400px] flex items-center justify-center">
          <div className="box-text text-white text-xl opacity-0">
            Premium Finish
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairAnimator;
