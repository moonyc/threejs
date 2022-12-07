import './style.css'
import * as THREE from 'three'
import { MathUtils } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
group.position.set(1, 2, 1)
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
cube2.position.x = -2 
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
cube3.position.x = 2
group.add(cube3)



// normalize will take the vector length and normalize it to 1
//     mesh.position.normalize()
// update all three positions properties at once
//      mesh.position.set(2, 0.2, 1)
// distance between the position and the center of the scene
//       console.log(mesh.position.length())
// distance between two vectors 
//       console.log(mesh.position.distanceTo(new THREE.Vector3(1, 0, 3)))

// SCALE 

// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5



// Axes Helper -> displays a colored line for each axis

const axeshelper = new THREE.AxesHelper(4)
// alert: remember the axeshelper is an object and you need to add it to the scene
scene.add(axeshelper)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//camera.lookAt(mesh.position)
// distance between the camera and the object
// console.log(mesh.position.distanceTo(camera.position))
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)