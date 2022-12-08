import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Time
let time = Date.now() // this variable needs to change
// Animations 

const tick = () => 
{
    // Time
    const currentTime = Date.now() // we use this to get the current the timestamp

    // Delta
    const deltaTime = currentTime - time
    time = currentTime

    console.log(deltaTime)


    // Update Objects
     //mesh.position.x -= 0.01
    // mesh.rotation.y += 0.01 
     // make the object rotate at the right speed
     mesh.rotation.y += 0.001 * deltaTime

    // Render 
    renderer.render(scene, camera)


    window.requestAnimationFrame(tick) // we pass the function, we don't call the function

    
}

tick()