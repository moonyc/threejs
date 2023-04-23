import { OrbitControls } from '@react-three/drei'
import { Bloom, Noise, Glitch, Vignette, EffectComposer } from '@react-three/postprocessing'
import { BlendFunction, GlitchMode } from 'postprocessing'
import { Perf } from 'r3f-perf'


export default function Experience()
{
    
    return <>
        <color args={['#000000']} attach="background"/>
        <EffectComposer
          multisampling={ 8 }
        >
           {/* <Vignette 
            offset={0.3}
            darkness={0.9}
            blendFunction={BlendFunction.COLOR_NORMAL}
           /> */}
           {/* <Glitch 
            delay={[0.5, 1]}
            duration={[0.1, 0.3]}
            strength={[0.2, 0.4]}
            mode={ GlitchMode.CONSTANT_MILD }
           /> */}
           {/* <Noise 
            premultiply
            blendFunction={ BlendFunction.SOFT_LIGHT }
           /> */}
           <Bloom 
            mipmapBlur
           />
        </EffectComposer>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={2} toneMapped={false}/>
        </mesh>

        <mesh castShadow position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color={[4, 1, 2]} toneMapped={false} />
        </mesh>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}