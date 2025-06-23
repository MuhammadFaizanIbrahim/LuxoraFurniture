import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model as Sofa } from "../models/Sofa";
import WoodenFloor from "../components/WoodenFloor";
import CameraAnimator from "../components/CameraAnimator";
import { Suspense } from "react";
import * as THREE from "three";

const SofaConfigurator = () => {
  const [colors, setColors] = useState({});
  const [activePart, setActivePart] = useState("pillow");

  const handleColorChange = (part, color) => {
    setColors((prev) => ({
      ...prev,
      [part]: color,
    }));
  };

  const colorOptions = [
    { name: "Maroon", hex: "#800000" },
    { name: "Navy Blue", hex: "#000080" },
    { name: "Black", hex: "#000000" },
    { name: "Golden", hex: "#FFD700" },
  ];

  const parts = ["pillow", "seat", "base"];

  return (
    <div id="sofa-section" className="w-full h-screen relative">
      <div
        id="configurator-ui"
        className="
          absolute z-10 p-4 rounded-md shadow-lg 
          h-40 w-[350px] sm:w-[380px] md:w-[460px] 
          top-[75%] sm:top-[50%] md:top-160 lg:top-180 
          left-[50%] transform -translate-x-1/2 
          opacity-100 scale-100
          bg-white/70 backdrop-blur-md
        "
      >
        <div className="flex justify-between mb-4 border-b">
          {parts.map((part) => (
            <button
              key={part}
              onClick={() => setActivePart(part)}
              className={`flex-1 py-2 text-sm md:text-md font-normal capitalize transition-colors duration-200 ${
                activePart === part
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500"
              }`}
            >
              {part}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {colorOptions.map((color) => (
            <button
              key={color.hex}
              onClick={() => handleColorChange(activePart, color.hex)}
              className={`w-full h-10 sm:h-12 rounded-sm border-2 transition-all duration-200 ${
                colors[activePart] === color.hex
                  ? "border-black scale-105"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        <div
          id="configurator-text"
          className="
            absolute left-1/2 transform -translate-x-1/2 
            text-7xl sm:text-6xl md:text-8xl lg:text-[10rem] 
            top-28 sm:top-12 md:top-30 lg:top-10 
            font-bold text-[#111112]
            text-center
          "
          style={{
            lineHeight: 2,
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Configurator
        </div>
      </div>

      <div className="h-screen">
        <Canvas
          shadows
          camera={{ position: [0, 10, 0], fov: 45 }}
          onCreated={({ scene }) => {
            scene.fog = new THREE.FogExp2(0xf6f6f6, 0.115);
            scene.background = new THREE.Color(0xf6f6f6);
          }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            position={[2, 6, 2]}
            intensity={5}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={15}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <Suspense fallback={null}>
            <WoodenFloor />
            <Sofa colors={colors} />
          </Suspense>
          <CameraAnimator />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 3.5}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default SofaConfigurator;
