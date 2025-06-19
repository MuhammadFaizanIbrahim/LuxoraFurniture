import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MarbleTableModel from "../models/Marble_table";

const MarbleTableCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 40 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <MarbleTableModel scale={[2.5, 2.5, 2.5]} position={[0, -3, 0]} />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default MarbleTableCanvas;
