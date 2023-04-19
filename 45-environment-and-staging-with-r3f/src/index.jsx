import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))
// const created = (state) => 
// {
//     console.log(state.gl)
//     // state.gl.setClearColor('#ff0000', 1)
//     state.scene.background = new THREE.Color('red')
// }


root.render(
    <Canvas
    // shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
        // onCreated={created}
    >
        {/* <color args={ ['#ff0000'] } attach="background" /> */}
        <Experience />
    </Canvas>
)