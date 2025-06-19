import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function MarbleTableModel(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF("/models/marble_table.glb");
  useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, 1, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.02}
        >
          <group
            name="025c67379bee45c0b379f0f69257a467fbx"
            rotation={[-Math.PI, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="SCT_DrawerCover001">
                  <group name="Object_8" position={[0, 0, -24.728]}>
                    <mesh
                      name="SCT_DrawerCover001_Material_#4_0"
                      geometry={
                        nodes["SCT_DrawerCover001_Material_#4_0"].geometry
                      }
                      material={materials.Material_4}
                    />
                  </group>
                </group>
                <group
                  name="SCT_DrawerCover002"
                  rotation={[0, 0, -Math.PI / 2]}
                >
                  <group name="Object_17" position={[0, 0, -24.728]}>
                    <mesh
                      name="SCT_DrawerCover002_Material_#4_0"
                      geometry={
                        nodes["SCT_DrawerCover002_Material_#4_0"].geometry
                      }
                      material={materials.Material_4}
                    />
                  </group>
                </group>
                <group name="SCT_DrawerCover003" rotation={[0, 0, Math.PI]}>
                  <group name="Object_23" position={[0, 0, -24.728]}>
                    <mesh
                      name="SCT_DrawerCover003_Material_#4_0"
                      geometry={
                        nodes["SCT_DrawerCover003_Material_#4_0"].geometry
                      }
                      material={materials.Material_4}
                    />
                  </group>
                </group>
                <group name="SCT_DrawerCover004" rotation={[0, 0, Math.PI / 2]}>
                  <group name="Object_29" position={[0, 0, -24.728]}>
                    <mesh
                      name="SCT_DrawerCover004_Material_#4_0"
                      geometry={
                        nodes["SCT_DrawerCover004_Material_#4_0"].geometry
                      }
                      material={materials.Material_4}
                    />
                  </group>
                </group>
                <group name="SCT_base">
                  <group name="Object_5" position={[0, 0, -24.659]}>
                    <mesh
                      name="SCT_base_Material_#5_0"
                      geometry={nodes["SCT_base_Material_#5_0"].geometry}
                      material={materials.Material_5}
                    />
                  </group>
                </group>
                <group name="SCT_Drawer001">
                  <group name="Object_11" position={[0, 0, -24.728]}>
                    <mesh
                      name="SCT_Drawer001_Material_2_0"
                      geometry={nodes.SCT_Drawer001_Material_2_0.geometry}
                      material={materials.Material_2}
                    />
                  </group>
                </group>
                <group name="SCT_Drawer002" rotation={[0, 0, -Math.PI / 2]}>
                  <group name="Object_14" position={[0, 0, -24.728]}>
                    <mesh
                      name="SCT_Drawer002_Material_2_0"
                      geometry={nodes.SCT_Drawer002_Material_2_0.geometry}
                      material={materials.Material_2}
                    />
                  </group>
                </group>
                <group name="SCT_Drawer003" rotation={[0, 0, Math.PI]}>
                  <group name="Object_20" position={[0, 0, -24.728]}>
                    <mesh
                      name="SCT_Drawer003_Material_2_0"
                      geometry={nodes.SCT_Drawer003_Material_2_0.geometry}
                      material={materials.Material_2}
                    />
                  </group>
                </group>
                <group name="SCT_Drawer004" rotation={[0, 0, Math.PI / 2]}>
                  <group name="Object_26" position={[0, 0, -24.728]}>
                    <mesh
                      name="SCT_Drawer004_Material_2_0"
                      geometry={nodes.SCT_Drawer004_Material_2_0.geometry}
                      material={materials.Material_2}
                    />
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

useGLTF.preload("/models/marble_table.glb");
