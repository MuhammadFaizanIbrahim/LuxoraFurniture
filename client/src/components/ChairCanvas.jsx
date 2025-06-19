import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Chair from "../models/Chair";

const ChairCanvas = ({ opacityRef, rotationRef, scaleRef, lightRef }) => {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      <Suspense fallback={null}>
        <Chair
          opacityRef={opacityRef}
          rotationRef={rotationRef}
          scaleRef={scaleRef}
          lightRef={lightRef}
        />
        <Environment preset="studio" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Suspense>
    </Canvas>
  );
};

export default ChairCanvas;
