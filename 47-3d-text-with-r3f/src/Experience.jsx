import { Center, Text3D, OrbitControls, useMatcapTexture } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const material = new THREE.MeshMatcapMaterial()

export default function Experience()
{
    // const [torusGeometry, setTorusGeometry] = useState()
    // const [material, setMaterial] = useState()
    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
    // const donutsGroup = useRef()
    const donuts = useRef([])

    useEffect(() => {
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
    }, [])

    // useFrame((state, delta) => 
    // {
    //      for(const donut of donutsGroup.current.children)
    //      {
    //         donut.rotation.y += delta * 0.2
    //      }
    // })

    useFrame((state, delta) => 
    {
        for(const donut of donuts.current)
          {
            donut.rotation.y += delta * 0.2
          }
    })
    return <>

    <Perf position="top-left" />
    <OrbitControls makeDefault />

    {/* <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]}/>
    <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture} /> */}

    <Center>
        <Text3D 
            material={material}
            font="./fonts/helvetiker_regular.typeface.json"
            size={.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            >
            SASHA
            
        </Text3D>
    </Center>

    {/* <group 
      ref={donutsGroup}
      >    */}
        {[...Array(100)].map((value, index) => 
            <mesh
               ref={(element) => donuts.current[index] = element}
               key={index}
               geometry={torusGeometry}
               material={material}
               position={
                [
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,                ]
               }
               scale={ 0.2 + Math.random() * 0.2}
               rotation={[
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                0

               ]}
            >
                
                <meshMatcapMaterial matcap={matcapTexture}/>
            </mesh>
        )}
    {/* </group> */}
    </>
}