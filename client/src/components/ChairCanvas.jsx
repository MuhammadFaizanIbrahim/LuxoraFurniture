import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Chair from "../models/Chair";

const ChairCanvas = ({ opacityRef, rotationRef, scaleRef, lightRef }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Canvas
      style={{
        width: "100%",
        height: isMobile ? "80vh" : "100vh",
      }}
    >
      <Suspense fallback={null}>
        <Chair
          opacityRef={opacityRef}
          rotationRef={rotationRef}
          scaleRef={scaleRef}
          lightRef={lightRef}
          isMobile={isMobile}
          isTablet={isTablet} 
        />
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Suspense>
    </Canvas>
  );
};

export default ChairCanvas;
