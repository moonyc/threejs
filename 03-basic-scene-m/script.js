console.log('THREE')


// I need a scene, a geometry, a material, a mesh(geometry,material) and a camera (a point of view)

// SCENE

const scene = new THREE.Scene()

// MESH, GEOMETRY + MATERIAL
// Red Cube

const geometry = new THREE.BoxGeometry(1, 1, 1) // width, height and depth
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }) // two red, two green, two blue 
const mesh = new THREE.Mesh(geometry, material)

// Add variables to the scene

scene.add(mesh)

// SIZES 
const sizes = {
    width: 800,
    height: 600,
}

// CAMERA 
// We're going to use a perspective camera, the default
// PARAMETERS:
// the field of view: vertical vision angle: 75 degree is a lot, so the object will be distant
// The aspect ratio: the width of the render divided by the height of the render
// Ceate the size for the aspect ratio
// Renderer: the scene from the camera point of view -> result drawn into a canvas. A canvas is HTML element(create it in the .html fil)

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 1 
camera.position.y = 1

// Add camera to the scene before saving
scene. add(camera)

// RENDERER 
// Import the canvas from the DOM
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas // you can use the syntetic sintax and write just canvas

})

// set size of the renderer 

renderer.setSize(sizes.width, sizes.height)

// render

renderer.render(scene, camera) // at this point we can see a thing because we are inside the box -> add position to the camera. To move forward or backward, change the position on the z axis.


