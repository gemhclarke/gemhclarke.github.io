import * as images from './imageArrays.js';

let imagePath;

// const preloadImages = function(path, images) {
//     images.forEach((image) => {
//         const img = new Image();
//         img.src = path + image;
//     });
// };


let textOpacity = 1;

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
        preloadImages('SpaceScene2/', images.spaceScene2),
        preloadImages('EarthScene/', images.earthScene),
        preloadImages('SpaceScene/', images.spaceScene),
        preloadImages('WalkingGround/', images.walkingGround),
        preloadImages('TownScene/', images.townScene),
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

function fadeIn(id, fadeDuration = 500, opacity = 1, timeoutFunc) {
    const element = document.getElementById(id);

    element.style.transition = null;
    element.style.opacity = 0;

    setTimeout(() => {
    element.style.opacity = 0;
    element.style.transition = `opacity ${fadeDuration / 1000}s`;
    element.style.opacity = opacity;
        if (timeoutFunc !== undefined) {
            timeoutFunc();
        }
    }, fadeDuration);
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
        element.style.opacity = textOpacity;
    }, fadeDuration);
}










function cutscene1() {

    let increment = 0;

    const text = document.getElementById('text');

    // Inital scene 
    currentScene = images.spaceScene;
    currentPath = 'SpaceScene/';
    text.innerText = 'Space is vast and ever expanding.';
    startSlideshow();
    fadeIn('text', 700, textOpacity);


    // setInterval(() => {
    //     increment += 1;
    //     console.log(increment);
    //     check();
    // }, 5000);


    function check() {
        if (increment === 1) {
            currentScene = images.spaceScene2;
            currentPath = 'spaceScene2/';
            fadeOutAndIn('text', 'The planets and stars grow evermore distant as the universe expands', 700);
        } 
        else if (increment === 2) {
            currentScene = images.spaceScene2;
            currentPath = 'SpaceScene2/';
            fadeOutAndIn('text', 'It is no suprise then, that visitors from the void came to us.', 700);
        }
        else if (increment === 3) {
            currentScene = images.earthScene;
            currentPath = 'EarthScene/';
            fadeOutAndIn('text', 'Our planet was young and full of life. A perfect prize for the invaders.', 700);
        }
        else if (increment === 4) {
            currentScene = images.machinesWalking;
            currentPath = 'imageFiles/';
            fadeOutAndIn('text', 'The machines were watching us. and when they eventually came, they came in force.', 700);
        }
        else if (increment === 5) {
            fadeOutAndIn('text', 'They killed indiscriminatly, leaving nothing behind...', 700);
        } 
        else if (increment === 6) {
            currentScene = images.machinesWalking2;
            currentPath = 'imageFiles2/';
            fadeOutAndIn('text', 'I thought that was the worst thing I would see.', 700);
        } 
        else if (increment === 7) {
            currentScene = images.walkingGround;
            currentPath = 'WalkingGround/';
            fadeOutAndIn('text', 'Benieth their feet lay the wreckage of humanity. All our progress and knowlege undone in a matter of days.', 700);
        }
        else if (increment === 8) {
            currentScene = images.townScene;
            currentPath = 'TownScene/';
            fadeOutAndIn('text', 'There was a town, in the mountains.', 700);
        }
        else {
            increment = 0;
            currentScene = images.spaceScene;
            currentPath = 'SpaceScene/';
            text.innerText = 'Space is vast and ever expanding.';
            fadeIn('text', 700, textOpacity);
            startSlideshow();
        } 
    }







    document.addEventListener('keydown', (event) => {   
        if (event.key === '1') {
            increment += 1;
            check();
        }
    });
}






Loader(cutscene1)