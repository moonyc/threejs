import { 
    Float,
    Html,
    MeshReflectorMaterial,
    PivotControls, 
    Text,
    TransformControls, 
    OrbitControls
} from '@react-three/drei'
import { useRef } from 'react'

export default function Experience()
{
    const cube = useRef()
    const sphere = useRef()

    return <>
       
        <OrbitControls makeDefault />
        {/* makeDefault deactivates OrbitControls when
        they aren't necessary. */}
       

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
         
         <PivotControls 
            anchor={ [0, 0, 0] }
            depthTest= {false}
            lineWidth={1}
            axisColors={ [ '#9381ff', '#ff4d6d', '#7ae582' ] }
            scale={100}
            fixed={true}
         >
            <mesh ref={sphere} position-x={ - 2 }>
               <sphereGeometry />
               <meshStandardMaterial color="orange" />
               <Html 
               occlude={ [ sphere, cube ] }
               position={ [ 1, 1, 0 ] }
               wrapperClass='label'
               center
               distanceFactor={ 8 }
               > Sphere </Html>
            </mesh>
         </PivotControls>

        <mesh ref={cube} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
           </mesh>

        <TransformControls object={cube} mode="rotate"/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial 
                resolution={512}
                blur={[ 1000, 1000]}
                mixBlur={1}
                mirror={0.75}
                color="greenyellow"
                
            />
        </mesh>
        
    <Float
        spead={5}
        floatIntensity={2}
    >
        <Text
          font="./bangers-v20-latin-regular.woff"
          color="salmon"
          fontSize={1}
          position-y={2}
          maxWidth={2}
          textAlign="center"
        >
            Cat
            <meshNormalMaterial />
        </Text>
    </Float>
    </>
}