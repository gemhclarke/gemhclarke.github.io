        // Import Three.js
        import * as THREE from "three";

        // ----- Create varaibales for the scene and camera -----
        let currentScene, currentCamera;

        // ----- Create scene01 -----
        const scene01 = new THREE.Scene();        
        scene01.background = new THREE.Color(0x202020);

        // ----- Create a box with a material -----
        const boxGeometry = new THREE.BoxGeometry();
        const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        
        // ----- Add the cube to scene01 -----
        scene01.add(box);

        // ----- Create scene02 -----
        const scene02 = new THREE.Scene();        
        scene02.background = new THREE.Color(0x8f8f8f);

        // ----- Create a sphere with a material -----
        const coneGeometry = new THREE.ConeGeometry();
        const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x83f2e4 });
        const cone = new THREE.Mesh(coneGeometry, coneMaterial);
        
        // ----- Add the cube to scene02 -----
        scene02.add(cone);

        // ----- Create camera for scenen01 -----
        const scene01cam = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        scene01cam.position.z = 3;

        // ----- Create camera for scenen02 -----
        const scene02cam = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        scene02cam.position.z = 3;

        // ----- Create renderer -----
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // ----- Set current scene and camera -----
        currentScene = scene01;
        currentCamera = scene01cam;

        // ----- Add Event listeners for scene switching -----
        window.addEventListener("keydown", function (event) {
            if (event.key === "1") {
                currentScene = scene01;
                currentCamera = scene01cam;
                console.log("Switched to Scene 1");
            } else if (event.key === "2") {
                currentScene = scene02;
                currentCamera = scene02cam;
                console.log("Switched to Scene 2");
            }
        });

        // ----- Animation Loop -----
        function animate() {
            requestAnimationFrame(animate);
            currentScene.children[0].rotation.x += 0.005;
            currentScene.children[0].rotation.y += 0.005;
            renderer.render(currentScene, currentCamera);
        } 

        // ----- Call the animate() function to start the animation loop -----
        animate();


    

