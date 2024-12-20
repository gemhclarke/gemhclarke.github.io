        // Import Three.js
        import * as THREE from "three";

        // ----- Initialize Variables -----
        let scene1, scene2, camera, renderer;
        let currentScene; // Used to toggle scenes

        // ----- Scene 1 -----
        function createScene1() {
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000000); // Black background

            // Add a red cube
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            return scene;
        }

        // ----- Scene 2 -----
        function createScene2() {
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0xffffff); // White background

            // Add a green sphere
            const geometry = new THREE.SphereGeometry(0.5, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            return scene;
        }

        // ----- Setup Camera -----
        function setupCamera() {
            const cam = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            cam.position.z = 3;
            return cam;
        }

        // ----- Setup Renderer -----
        function setupRenderer() {
            const rend = new THREE.WebGLRenderer();
            rend.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(rend.domElement);
            return rend;
        }

        // ----- Initialize the App -----
        function init() {
            // Create scenes
            scene1 = createScene1();
            scene2 = createScene2();
            currentScene = scene1; // Start with Scene 1

            // Set up camera and renderer
            camera = setupCamera();
            renderer = setupRenderer();

            // Start the animation loop
            animate();
        }

        // ----- Animation Loop -----
        function animate() {
            requestAnimationFrame(animate);

            // Rotate objects in each scene for a dynamic effect
            if (currentScene === scene1) {
                scene1.children[0].rotation.x += 0.01;
                scene1.children[0].rotation.y += 0.01;
            } else if (currentScene === scene2) {
                scene2.children[0].rotation.x += 0.02;
                scene2.children[0].rotation.y += 0.02;
            }

            // Render the current scene
            renderer.render(currentScene, camera);
        }

        // ----- Handle Scene Switching -----
        window.addEventListener("keydown", (event) => {
            if (event.key === "1") {
                currentScene = scene1; // Switch to Scene 1
                console.log("Switched to Scene 1");
            } else if (event.key === "2") {
                currentScene = scene2; // Switch to Scene 2
                console.log("Switched to Scene 2");
            }
        });

        // Initialize the app
        init();