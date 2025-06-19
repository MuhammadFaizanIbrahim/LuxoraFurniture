import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CameraAnimator = () => {
  const { camera } = useThree();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        camera.position,
        { x: 0, y: 10, z: 0 },
        {
          x: 0,
          y: 1.5,
          z: 5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "#sofa-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
          onUpdate: () => camera.lookAt(0, 0.8, 0),
        }
      );

      gsap.fromTo(
        "#configurator-text",
        { scale: 3.5, y: 20 },
        {
          scale: 0.3,
          y: -100,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "#sofa-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.to("#configurator-ui", {
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#sofa-section",
          start: "bottom bottom",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [camera]);

  return null;
};

export default CameraAnimator;
