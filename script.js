import * as THREE from 'three'

// 1. Create the scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('#F0F0F0')

// 2. Add the camera
    // FOV, ASPECT RATIO -> Same as the window, near planes, far planes
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth) / (window.innerHeight/1.2), 0.1, 1000)
    // camera position
camera.position.z = 5

// 3. Set up the renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight / 1.2)

document.body.appendChild(renderer.domElement)


// 4. Create and add a cube object
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshLambertMaterial({ color: 'rgba(15, 133, 133, 1)', emissive: 'rgba(173, 125, 110, 1)' })
const cube = new THREE.Mesh(geometry, material);
scene.add(cube)

// 5. Add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1)
scene.add(light)



// 6. animate the scene
function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera)
}

// animate()
