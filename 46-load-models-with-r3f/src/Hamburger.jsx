/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Hamburger(props) {
  const { nodes, materials } = useGLTF("./hamburger-draco.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
      />
      <mesh
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[0, 2.817294, 0]}
      />
      <mesh
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[0, 1.771107, 0]}
      />
      <mesh
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[0, 3.04, 0]}
      />
    </group>
  );
}

useGLTF.preload("./hamburger-draco.glb");
