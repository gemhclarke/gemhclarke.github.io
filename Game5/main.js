import * as images from './imageArrays.js';

let imagePath;

const preloadImages = function(path, images) {
    images.forEach((image) => {
        const img = new Image();
        img.src = path + image;
    });
};

preloadImages('miskImages/', images.misk);
preloadImages('imageFiles/', images.machinesWalking);
preloadImages('imageFiles2/', images.machinesWalking2);

let currentIndex = 0;
const delay = 150; // Fixed delay in milliseconds
let slideshowInterval = null; // Store the interval ID
let currentScene = images.machinesWalking; // Default scene
let currentPath = 'imageFiles/';

// Function to start the slideshow
function startSlideshow() {
    // Clear any existing interval
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }

    // Reset index and start interval
    currentIndex = 0; // Start from the beginning of the new scene
    slideshowInterval = setInterval(function() {
        currentIndex = (currentIndex + 1) % currentScene.length; // Loop through images
        displayImage();
    }, delay);

    // Display the first image of the new scene
    displayImage();
}

// Function to display an image
function displayImage() {
    if (currentScene && currentScene.length > 0) {
        imagePath = `${currentPath}${currentScene[currentIndex]}`;
        document.getElementById('slideshowImage').src = imagePath;
    }
}

let cutscene1 = {
    scene1: {scene: images.machinesWalking, path: 'imageFiles/'},
    scene2: {scene: images.machinesWalking2, path: 'imageFiles2/'},
}


playCutscene = function(cutscene) {
    currentScene = cutscene.scene1.scene;
    currentPath = cutscene.scene1path;
    startSlideshow();
}




// Initial setup when the page loads
window.onload = function() {
    startSlideshow(); // Start the slideshow automatically upon loading
};

// Event listener for key presses
document.addEventListener('keydown', (event) => {
    if (event.key === '1') { // Check if the '1' key is pressed
        currentScene = images.machinesWalking2; // Switch to new scene
        currentPath = 'imageFiles2/';
        console.log('Switched to Scene 2');
        startSlideshow(); // Restart slideshow with the new scene
    }
    if (event.key === '2') { // Check if the '1' key is pressed
        currentScene = images.machinesWalking; // Switch to new scene
        currentPath = 'imageFiles/';
        console.log('Switched to Scene 1');
        startSlideshow(); // Restart slideshow with the new scene
    }
});
