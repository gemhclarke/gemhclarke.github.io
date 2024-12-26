// Setup params 
const frameRate = 200; // Initial frame rate
let index = 0; // Initial images array index


// Create an array of images
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
    'images/image10.jpg',
    'images/image11.jpg',
    'images/image12.jpg',
];

const animationDiv = document.getElementById('animation');


function animateImages() {
    // Update the background image
    animationDiv.style.backgroundImage = `url(${images[index]})`;

    // Increment index and loop back if at the end of the array
    index = index + 1;
    if (index >= images.length) {
        index = 0;
    }
}

// Start the animation
setInterval(animateImages, frameRate);

