import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
console.log( gsap)

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

// Clock
gsap.to(mesh.position, { duration: 1, delay:1, x: 2}) // gsap has its own tick, you don't need to tell to gsap to update itself, but you need to put the renderer in the tick
// Animations 

const tick = () => 
{
   // Clock
    
    // Render 
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick) // we pass the function, we don't call the function
}

tick()