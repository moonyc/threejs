import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { Text } from '@react-three/drei'

import { boxGeometry, floor1Material } from "./threeVariables"

export default function BlockEnd({ position = [0,0,0]}) 
{
    const hamburger = useGLTF('./hamburger.glb')
    hamburger.scene.children.forEach((mesh) => {
      mesh.castShadow = true
    })
    return <group position={position}>
     <Text
    font="./bebas-neue-v9-latin-regular.woff"
    scale={ 2 }
    position={ [ 0, 2.25, 2 ] }
     >
    FINISH
    <meshBasicMaterial toneMapped={ false } />
    </Text>
     <mesh
       material={floor1Material}
       geometry={boxGeometry} 
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