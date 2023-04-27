import { RigidBody } from '@react-three/rapier'
import { useRef, useState } from 'react'
import { useFrame} from '@react-three/fiber'
import * as THREE from 'three'


export default function BlockAxe({ position = [0,0,0], material, geometry, obstacleMaterial}) 
{
    const obstacle = useRef()
    const [ timeOffset] = useState(()=> Math.random() * Math.PI * 2)

    useFrame((state) => 
    {
        const time = state.clock.getElapsedTime()
        const x = Math.sin(time + timeOffset) * 1.25
        obstacle.current.setNextKinematicTranslation({x: position[0] + x,y: position[1], z: position[2]})
    })

    return <group position={position}>
     <mesh
       material={material}
       geometry={geometry} 
       scale={[4, 0.2, 4]}
       position={[0, -0.1, 0]} 
       receiveShadow
    />
    <RigidBody 
       ref={obstacle}
       type="kinematicPosition"
       restitution={0.2}
       friction={0}
       >
    <mesh 
      material={obstacleMaterial}
      geometry={geometry}
      position={[0, 0.8, 0]}
      scale={[1.5, 1.5, 0.3]}
      castShadow
      receiveShadow
    /> 
    </RigidBody>
    </group>
}