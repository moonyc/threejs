import { RigidBody } from '@react-three/rapier'
import { useRef, useState } from 'react'
import { useFrame} from '@react-three/fiber'

import { floor2Material, obstacleMaterial, boxGeometry } from './threeVariables'


export default function BlockLimbo({ position = [0,0,0]}) 
{
    const obstacle = useRef()
    const [ timeOffset] = useState(()=> Math.random() * Math.PI * 2)
   
    useFrame((state) => 
    {
        const time = state.clock.getElapsedTime()
        const y = Math.sin(time + timeOffset) + 1.15
        obstacle.current.setNextKinematicTranslation({ x: position[0],y: position[1] + y, z: position[2] })
    })

    return <group position={position}>
     <mesh
       material={floor2Material}
       geometry={boxGeometry} 
       scale={[4, 0.2, 4]}
       position={[0, -0.1, 0]} 
       receiveShadow
    />
    <RigidBody 
       ref={obstacle}
       type="kinematicPosition"
       position={[0, 0.3, 0]}
       restitution={0.2}
       friction={0}
       >
    <mesh 
      material={obstacleMaterial}
      geometry={boxGeometry}
      scale={[3.5, 0.3, 0.3]}
      castShadow
      receiveShadow
    /> 
    </RigidBody>
    </group>
}