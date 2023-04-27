import { RigidBody } from '@react-three/rapier'
import { useRef, useState } from 'react'
import { useFrame} from '@react-three/fiber'
import * as THREE from 'three'


export default function BlockSpinner({ position = [0,0,0], material, geometry, obstacleMaterial}) 
{
    const obstacle = useRef()
    const [speed ] = useState(()=> (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1 ))

    useFrame((state) => 
    {
        const time = state.clock.getElapsedTime()
        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0))
        obstacle.current.setNextKinematicRotation(rotation)
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
       position={[0, 0.3, 0]}
       restitution={0.2}
       friction={0}
       >
    <mesh 
      material={obstacleMaterial}
      geometry={geometry}
      scale={[3.5, 0.3, 0.3]}
      castShadow
      receiveShadow
    /> 
    </RigidBody>
    </group>
}