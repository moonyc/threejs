import { useThree, useFrame, extend } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import CustomObject from "./CustomObject"

extend({ OrbitControls })
export default function Experience()
{
    const { camera, gl } = useThree()
    const cube = useRef()
    const group = useRef()
     useFrame((state, delta) => {

        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8

        // state.camera.lookAt(0, 0, 0)

        cube.current.rotation.y += delta
        // group.current.rotation.y += delta
     })
    return( 
    <>
        <orbitControls args={[ camera, gl.domElement ]}/>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={1.5}/> 
        <ambientLight intensity={0.5} />

        <group ref={group}>
            <mesh ref={cube} rotation-y={Math.PI * 0.23 } position-x={ 2 } scale={[1.5, 1.5, 1.5]}>
               <boxGeometry /> 
               <meshStandardMaterial color="mediumpurple" />
            </mesh>
            <mesh position-x={ -2 } >
               <sphereGeometry />
               <meshStandardMaterial color="orange" />
            </mesh>
        </group>
        <mesh position-y={ -1 } rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
        <CustomObject />

    </>
    )
}