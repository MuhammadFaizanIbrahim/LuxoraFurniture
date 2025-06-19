import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SideTableModel from "../models/Side_table";

const SideTableCanvas = () => {
  return (
    <Canvas camera={{ position: [-1, 2, 6], fov: 40 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <SideTableModel scale={[2, 2, 2]} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI - 0.1}
        minPolarAngle={1}
      />
    </Canvas>
  );
};

export default SideTableCanvas;
