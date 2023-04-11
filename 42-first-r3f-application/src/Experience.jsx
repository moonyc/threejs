import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
export default function Experience()
{
    const cube = useRef()
    const group = useRef()
     useFrame((state, delta) => {
        cube.current.rotation.y += delta
        group.current.rotation.y += delta
     })
    return(
        <group ref={group}>
            <mesh ref={cube} rotation-y={Math.PI * 0.23 } position-x={ 2 } scale={[1.5, 1.5, 1.5]}>
               <boxGeometry /> 
               <meshBasicMaterial color="mediumpurple" />
            </mesh>
            <mesh position-x={ -2 } >
               <sphereGeometry />
               <meshBasicMaterial color="orange" />
            </mesh>
            <mesh position-y={ -1 } rotation-x={- Math.PI * 0.5} scale={10}>
               <planeGeometry />
               <meshBasicMaterial color="greenyellow" />
            </mesh>
        </group>
    )
}