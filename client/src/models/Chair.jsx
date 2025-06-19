import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Chair = ({ opacityRef, rotationRef, scaleRef, lightRef }) => {
  const { scene } = useGLTF("/models/chair.glb");
  const group = useRef();
  const light = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.transparent = true;
        child.material.opacity = 0;
      }
    });
  }, [scene]);

  useFrame(() => {
    const scale = scaleRef.current?.value || 1;
    group.current.scale.set(scale, scale, scale);

    if (group.current && rotationRef?.current) {
      group.current.rotation.y = rotationRef.current.value || 0;
    }

    const opacity = opacityRef.current?.value || 0;
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.opacity = opacity;
      }
    });

    if (light.current && lightRef?.current) {
      light.current.intensity = lightRef.current.value || 0;
    }
  });

  return (
    <group ref={group} scale={2} position={[0, -1.2, 2.4]}>
      <primitive object={scene} />
      <pointLight
        ref={light}
        position={[2, 2, 2]}
        intensity={0}
        color={"#ffffff"}
      />
    </group>
  );
};

export default Chair;
