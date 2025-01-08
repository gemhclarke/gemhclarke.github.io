import * as images from './imageArrays.js';


const preloadImages = function(path, images) {
    images.forEach((image) => {
        const img = new Image();
        img.src = path + image;
    });
};

preloadImages('imageFiles/', images.machinesWalking);
preloadImages('miskImages/', images.misk);

let currentIndex = 0;
const delay = 150; // Fixed delay in milliseconds

// Function to start the slideshow automatically
function startSlideshow() {
    // Show the first image
    displayImage();

    // Set interval to show images at the specified delay (120 ms)
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.machinesWalking.length; // Loop through images
        displayImage();
    }, delay);
}

// Function to display an image
function displayImage() {
    const imagePath = `imageFiles/${images.machinesWalking[currentIndex]}`;
    document.getElementById('slideshowImage').src = imagePath;
}

// Initial setup when the page loads
window.onload = function() {
    startSlideshow(); // Start the slideshow automatically upon loading
};