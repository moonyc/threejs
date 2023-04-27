import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useRef } from "react";

export default function Player()
{
    const body = useRef()
    
    const [ subscribeKeys, getKeys ] = useKeyboardControls()
    useFrame((state, delta) => 
    {
       const { forward, backward, leftward, rightward } = getKeys()
       
       const impulse = { x:0, y:0, z:0 }
       const torque = { x:0, y:0, z:0 }
 
       const impulseStrength = 0.6 * delta
       const torqueStrength = 0.2 * delta

       if(forward)
       { 
          impulse.z -= impulseStrength
          torque.x -= torqueStrength
       }
       if(rightward)
       {
          impulse.x += impulseStrength
          torque.z -= torqueStrength
       }
       if(backward)
       {
        impulse.z += impulseStrength
        torque.x += torqueStrength
       }
       if(leftward)
       {
        impulse.x -= impulseStrength
        torque.z += torqueStrength
       }

       body.current.applyImpulse(impulse)
       body.current.applyTorqueImpulse(torque)

       
    })

    return <>
        <RigidBody 
           ref={body}
           colliders="ball"
           position={[0, 1, 0]}
           restitution={0.2}
           friction={1}
        >
           <mesh castShadow>
               <icosahedronGeometry args={[ 0.3, 1 ]}/>
               <meshStandardMaterial flatShading color="mediumpurple"/>
            </mesh>
        </RigidBody>
    </>
}