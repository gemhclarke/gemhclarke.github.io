import * as images from './imageArrays.js';

let imagePath;

// const preloadImages = function(path, images) {
//     images.forEach((image) => {
//         const img = new Image();
//         img.src = path + image;
//     });
// };



const preloadImages = function(path, images) {
    return new Promise((resolve) => {
        let loadedCount = 0;

        images.forEach((image) => {
            const img = new Image();
            img.src = path + image;

            // Increment the count when the image loads
            img.onload = () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    resolve(); // Resolve the Promise when all images are loaded
                }
            };
        });

        // Edge case: Resolve immediately if images array is empty
        if (images.length === 0) {
            resolve();
        }
    });
};

function Loader(callb) {
    const promises = [
        preloadImages('miskImages/', images.misk),
        preloadImages('imageFiles/', images.machinesWalking),
        preloadImages('imageFiles2/', images.machinesWalking2),
    ];
    // Wait for all image preloading to complete
    Promise.all(promises).then(() => {
        if (typeof callb === 'function') {
            callb(); // Call the callback function
        }
    });
}


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

function fadeIn(id, fadeDuration = 500) {
    const element = document.getElementById(id);
    element.style.opacity = 0;
    element.style.transition = `opacity ${fadeDuration / 1000}s`;
    element.style.opacity = 0.5;
}





function fadeOutAndIn(elementId, newText, fadeDuration = 500) {
    const element = document.getElementById(elementId);
    // Fade out
    element.style.transition = `opacity ${fadeDuration / 1000}s`;
    element.style.opacity = 0;

    // Wait for the fade-out to complete
    setTimeout(() => {
        // Change the text after fade-out
        element.innerText = newText;

        // Fade in
        element.style.opacity = 0.5;
    }, fadeDuration);
}




function cutscene1() {
    let increment = 0;

   // Inital scene 
    currentScene = images.machinesWalking;
    currentPath = 'imageFiles/';
    startSlideshow();
    fadeIn('text', 500);

    document.addEventListener('keydown', (event) => {   
        if (event.key === '1') {

            increment += 1;

            if (increment === 1) {
                currentScene = images.machinesWalking2;
                currentPath = 'imageFiles2/';
                startSlideshow();
                fadeOutAndIn('text', 'Walking engines of glisening metal', 500);
            } else if (increment === 2) {
                fadeOutAndIn('text', 'They killed indiscriminatly, leaving nothing behind...', 500);
            }
        }
    });
}

Loader(cutscene1)