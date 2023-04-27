import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export default function BlockEnd({ position = [0,0,0], material, geometry}) 
{
    const hamburger = useGLTF('./hamburger.glb')
    hamburger.scene.children.forEach((mesh) => {
      mesh.castShadow = true
    })
    return <group position={position}>
     <mesh
       material={material}
       geometry={geometry} 
       scale={[4, 0.2, 4]}
       position={[0, 0, 0]} 
       receiveShadow
    />
    <RigidBody
       type="fixed"
       colliders="hull"
       restitution={0.2}
       friction={0}
       position={[0,0.25,0]}
    >
        <primitive object={hamburger.scene} scale={0.2}/>
    </RigidBody>
    </group>
}