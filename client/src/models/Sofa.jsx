import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model({ lightRef, rotationRef, colors = {} }) {
  const { nodes, materials } = useGLTF("/models/sofa.glb");
  const group = useRef();
  const light = useRef();

  const clonedMaterials = useMemo(() => {
    return {
      pillow: materials.sofa.clone(),
      seat: materials.sofa.clone(),
      base: materials.sofa.clone(),
    };
  }, [materials]);

  useEffect(() => {
    if (colors.pillow) clonedMaterials.pillow.color.set(colors.pillow);
    if (colors.seat) clonedMaterials.seat.color.set(colors.seat);
    if (colors.base) clonedMaterials.base.color.set(colors.base);
  }, [colors, clonedMaterials]);

  useFrame(() => {
    if (group.current)
      group.current.rotation.y = rotationRef?.current?.value || 0;
    if (light.current) light.current.intensity = lightRef?.current?.value || 0;
  });

  return (
    <group ref={group} dispose={null}>
      <pointLight ref={light} position={[2, 2, 2]} intensity={0} />

      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.5}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
          <mesh
            geometry={nodes.pillow1_sofa_0.geometry}
            material={clonedMaterials.pillow}
            position={[-10.388, 69.642, -39.681]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.pillow3_sofa_0.geometry}
            material={clonedMaterials.pillow}
            position={[-12.765, 70.121, 39.045]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.small_pillow_sofa_0.geometry}
            material={clonedMaterials.pillow}
            position={[-13.094, 66.863, 0.486]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.pillow2_sofa_0.geometry}
            material={clonedMaterials.pillow}
            position={[-34.326, 69.717, -2.692]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.sofa_seat_sofa_0.geometry}
            material={clonedMaterials.seat}
            position={[4.477, 46.151, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.sofa_sofa_0.geometry}
            material={clonedMaterials.base}
            position={[-0.015, 39.889, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/sofa.glb");
