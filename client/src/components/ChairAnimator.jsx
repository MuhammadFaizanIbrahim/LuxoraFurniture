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
    tl.to(".overlay", { opacity: 0, duration: 1 }, "start+=1.5");

    tl.to(opacityRef.current, { value: 1, duration: 0.1 }, "start+=0.1");

    tl.to(lightRef.current, { value: 4, duration: 1 }, "start+=0.6");

    tl.to(rotationRef.current, { value: -Math.PI / 4, duration: 1 }, "start+=1.5");
    tl.to(scaleRef.current, { value: 1.3, duration: 1 }, "start+=1.5");

    tl.to(".text-block-1", { opacity: 1, y: -1000, duration: 3 }, "start+=0.2");
    // tl.to( ".text-block-1", { opacity: 1, y: -1000, duration: 0.1 }, "start+=2");

    tl.to(".text-block-2", { opacity: 1, y: -500, duration: 1 }, "start+=2.5");

    tl.to(".box-animator", { opacity: 1, duration: 0.1 }, "start+=2.5");
    tl.to(".rounded-box", { scale: 1, duration: 1, ease: "power2.out" }, "start+=2.5");

    tl.to(".text-block-2", { opacity: 0, y: -500, duration: 1 }, "start+=3.5");
    tl.to(".box-animator", { opacity: 0, duration: 0.3 }, "start+=3.5");

    tl.to(opacityRef.current, { value: 0, duration: 0.1 }, "start+=3.7");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-full">
      <div className="overlay absolute inset-0 bg-black opacity-0 z-10 pointer-events-none transition-opacity duration-700" />
      <div className="text-block-1 absolute top-[25%] left-[50%] transform -translate-x-1/2 w-1/3 text-center z-[60] opacity-0">
        <h2 className="text-white text-4xl font-semibold mb-4">
          The quality of furniture brand <br /> online presence is crucial
        </h2>
        <p className="text-white text-lg">
          What if we told you that your brand's website can offer customers an
          experience nearly as immersive as visiting a showroom?
        </p>
      </div>

      <div className="text-block-2 absolute top-[25%] left-[50%] transform -translate-x-1/2 w-[42%] text-center z-[60] opacity-0">
        <p className="text-black text-[38px] font-normal">
          We provide cutting-edge technologies <br /> to showcase your products
          on your website, setting you apart from the competition.
        </p>
      </div>    
      <div className="box-animator absolute top-[18%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[770px] z-[65] opacity-0 pointer-events-none">
  <div className="rounded-box relative w-full h-full border-[1px] border-black rounded-3xl scale-0 origin-top transition-transform duration-700">
    
    <div className="absolute top-5 left-0 w-full px-4 flex justify-between items-center">
      
      <div className="flex gap-2">
        <div className="w-4 h-4 rounded-full border border-black" />
        <div className="w-4 h-4 rounded-full border border-black" />
        <div className="w-4 h-4 rounded-full border border-black" />
      </div>

      <div className="w-100 h-4 bg-black rounded-sm" />

      <div className="flex gap-2">
        <div className="w-4 h-4 rounded-sm border border-black" />
        <div className="w-4 h-4 rounded-sm border border-black" />
        <div className="w-4 h-4 rounded-sm border border-black" />
      </div>
    </div>

  </div>
</div>

    </section>
  );
};

export default ChairAnimator;
