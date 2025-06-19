import React from "react";
import { useTexture } from "@react-three/drei";

const WoodenFloor = () => {
  const woodTextures = useTexture({
    map: "/textures/wood1/laminate_floor_02_diff_4k.jpg",
    normalMap: "/textures/wood1/laminate_floor_02_nor_gl_4k.jpg",
    roughnessMap: "/textures/wood1/laminate_floor_02_rough_4k.jpg",
    displacementMap: "/textures/wood1/laminate_floor_02_disp_4k.png",
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20, 128, 128]} />
      <meshStandardMaterial
        {...woodTextures}
        displacementScale={0.1}
        roughness={0.001}
        metalness={0.1}
      />
    </mesh>
  );
};

export default WoodenFloor;
