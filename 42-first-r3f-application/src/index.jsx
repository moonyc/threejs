import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import * as THREE from 'three'



const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
    // pixel ratio
    dpr={ [ 1, 2 ]}
    // flat --> no tone mapping
       
    //    {orthographic}
       gl= {{
        // antialias: false
        // toneMapping: THREE.CineonToneMapping  -> ugly tonemapping, the default is the best
        // default tonemapping : ACESFilmicToneMapping
        // default outputEncoding : sRGBEncoding --> the best   
        // outputEncoding: THREE.LinearEncoding
        }}
       camera={{
        fov: 45,
        // zoom: 100, 
        near: 0.1,
        far: 200,
        position: [3, 2, 6]
       }}
    >
        <Experience />
    </Canvas>
)