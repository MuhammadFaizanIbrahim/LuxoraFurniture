import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function SideTableModel(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF("/models/side_table.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations.length > 0) {
      animations.forEach((clip) => {
        const action = actions[clip.name];
        if (action) {
          action.reset().play().setLoop(THREE.LoopRepeat, Infinity);
        }
      });
    }
  }, [actions, animations]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[1.5, 0.3, 5]}
      rotation={[-0.05, -Math.PI / 1.1, 0]}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={20}
        >
          <group
            name="35afef2a7a61476cb4b0496270bcdf25fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="group1">
                  <group name="side_table">
                    <group name="drawer1" position={[3.975, 3.303, 5.408]}>
                      <group name="polySurface541" position={[0, 0, 0.063]}>
                        <mesh
                          name="polySurface541_bedside_wood2_0"
                          geometry={
                            nodes.polySurface541_bedside_wood2_0.geometry
                          }
                          material={materials.bedside_wood2}
                        />
                        <mesh
                          name="polySurface541_side_rail_0"
                          geometry={nodes.polySurface541_side_rail_0.geometry}
                          material={materials.side_rail}
                        />
                      </group>
                      <group
                        name="polySurface553"
                        position={[0.034, 0.011, -1.275]}
                      >
                        <mesh
                          name="polySurface553_cupboard_wood1_0"
                          geometry={
                            nodes.polySurface553_cupboard_wood1_0.geometry
                          }
                          material={materials.cupboard_wood1}
                        />
                      </group>
                    </group>
                    <group name="drawer2" position={[3.975, 2.474, 5.408]}>
                      <group name="polySurface541_1" position={[0, 0, 0.063]}>
                        <mesh
                          name="polySurface541_bedside_wood2_0_1"
                          geometry={
                            nodes.polySurface541_bedside_wood2_0_1.geometry
                          }
                          material={materials.bedside_wood2}
                        />
                        <mesh
                          name="polySurface541_side_rail_0_1"
                          geometry={nodes.polySurface541_side_rail_0_1.geometry}
                          material={materials.side_rail}
                        />
                      </group>
                      <group
                        name="polySurface553_1"
                        position={[0.034, 0.011, -1.275]}
                      >
                        <mesh
                          name="polySurface553_cupboard_wood1_0_1"
                          geometry={
                            nodes.polySurface553_cupboard_wood1_0_1.geometry
                          }
                          material={materials.cupboard_wood1}
                        />
                      </group>
                    </group>
                    <group name="drawer3" position={[3.975, 1.645, 5.408]}>
                      <group name="polySurface541_2" position={[0, 0, 0.063]}>
                        <mesh
                          name="polySurface541_bedside_wood2_0_2"
                          geometry={
                            nodes.polySurface541_bedside_wood2_0_2.geometry
                          }
                          material={materials.bedside_wood2}
                        />
                        <mesh
                          name="polySurface541_side_rail_0_2"
                          geometry={nodes.polySurface541_side_rail_0_2.geometry}
                          material={materials.side_rail}
                        />
                      </group>
                      <group
                        name="polySurface553_2"
                        position={[0.034, 0.011, -1.275]}
                      >
                        <mesh
                          name="polySurface553_cupboard_wood1_0_2"
                          geometry={
                            nodes.polySurface553_cupboard_wood1_0_2.geometry
                          }
                          material={materials.cupboard_wood1}
                        />
                      </group>
                    </group>
                    <group name="bodt">
                      <mesh
                        name="bodt_bedside_wood1_0"
                        geometry={nodes.bodt_bedside_wood1_0.geometry}
                        material={materials.bedside_wood1}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/side_table.glb");
