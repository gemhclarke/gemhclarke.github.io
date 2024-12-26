import * as THREE from "three";

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create a geometry and a material, then combine them into a mesh
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Event listeners for buttons
document.getElementById('rotate-left').addEventListener('click', () => {
    cube.rotation.y -= 0.1; // Rotate left
});

document.getElementById('rotate-right').addEventListener('click', () => {
    cube.rotation.y += 0.1; // Rotate right
});

document.getElementById('scale-up').addEventListener('click', () => {
    cube.scale.multiplyScalar(1.1); // Scale up
});

document.getElementById('scale-down').addEventListener('click', () => {
    cube.scale.multiplyScalar(0.9); // Scale down
});

// Resize handler for responsive canvas
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
});