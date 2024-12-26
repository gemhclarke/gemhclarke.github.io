// Imports
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add light to the scene
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Load the glTF model
const loader = new GLTFLoader();
let sphere, cube, cone;

loader.load(
  'blender_scene01.glb',
  function (gltf) {
    scene.add(gltf.scene);

    // Find individual objects by name
    sphere = gltf.scene.getObjectByName('Sphere');
    cube = gltf.scene.getObjectByName('Cube');
    cone = gltf.scene.getObjectByName('Cone');
    
  },
  undefined,
  (error) => {
    console.error('An error occurred:', error);
  }
);

// Set up camera position
camera.position.z = 7;
camera.position.y = 0;
camera.position.x = -2;

// Move objects with the keyboard
document.addEventListener('keydown', function(event) {
  const moveSpeed = 0.1;
  if (sphere || cube || cone) {
    switch (event.code) {
       
       // Move the sphere
       case 'ArrowUp':
        sphere.position.y += moveSpeed;
        break;
      case 'ArrowDown':
        sphere.position.y -= moveSpeed;
        break;
      case 'ArrowLeft':
        sphere.position.x -= moveSpeed;
        break;
      case 'ArrowRight':
        sphere.position.x += moveSpeed;
        break;

      // Move the cone
      case 'KeyW':
        cone.position.y += moveSpeed;
        break;
      case 'KeyS':
        cone.position.y -= moveSpeed;
        break;
      case 'KeyD':
        cone.position.x += moveSpeed;
        break;
      case 'KeyA':
        cone.position.x -= moveSpeed;
        break;
      
      // Move the cube
      case 'KeyI':
        cube.position.y += moveSpeed;
        break;
      case 'KeyK':
        cube.position.y -= moveSpeed;
        break;
      case 'KeyL':
        cube.position.x += moveSpeed;
        break;
      case 'KeyJ':
        cube.position.x -= moveSpeed;
        break;
        

    }
  }
});

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
