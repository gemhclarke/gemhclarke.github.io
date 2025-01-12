import * as images from './imageArrays.js';

let imagePath;

function preloadImages(path, images) {
    images.forEach((image) => {
        const img = new Image();
        img.src = path + image;
    });
};




function Loader(callb) {
    preloadImages('miskImages/', images.misk);
    preloadImages('imageFiles/', images.machinesWalking);
    preloadImages('imageFiles2/', images.machinesWalking2);
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

function fadeIn(id, duration = 1000, callback = null) {
    const element = document.getElementById(id);
    element.style.opacity = 0;
    element.style.display = "block"; // Ensure the element is visible

    const increment = 10 / duration; // Step based on duration
    let opacity = 0;

    const fadeEffect = setInterval(() => {
        opacity += increment;
        if (opacity >= 0.5) {
            element.style.opacity = 0.5;
            clearInterval(fadeEffect);
            if (callback) callback(); // Run the callback after fade-in completes
        } else {
            element.style.opacity = opacity;
        }
    }, 10); // Update every 10ms
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












function newTextChange(text) {
    document.getElementById('text').textContent = text;
}

function changeText(newText) {
    fadeOut('text', 1000, fadeIn('text', 1000, newTextChange(newText)));
    // fadeIn('text', 1000);
}

// Initial setup when the page loads
window.onload = function() {
    startSlideshow(); // Start the slideshow automatically upon loading
};



function cutscene1() {
    let increment = 0;
    document.addEventListener('keydown', (event) => {
        if (event.key === '1') {
            increment += 1;
            if (increment === 0) {
                currentScene = images.machinesWalking;
                currentPath = 'imageFiles/';
                startSlideshow();
                fadeIn('text', 500);
            } else if (increment === 1) {
                currentScene = images.machinesWalking2;
                currentPath = 'imageFiles2/';
                startSlideshow();
                fadeOutAndIn('text', 'Walking engines of glisening metal', 500);
            }
        }
    });
}


Loader(cutscene1);


