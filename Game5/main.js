// Array of image filenames
const imageFiles = [
    '0001.png',
    '0002.png',
    '0003.png',
    '0004.png',
    '0005.png',
    '0006.png',
    '0007.png',
    '0008.png',
    '0009.png',
    '0010.png',
    '0011.png',
    '0012.png',
    '0013.png',
    '0014.png',
    '0015.png',
    '0016.png',
    '0017.png',
    '0018.png',
    '0019.png',
    '0020.png',
    '0021.png',
    '0022.png',
    '0023.png',
    '0024.png',
    '0025.png',
    '0026.png',
    '0027.png',
    '0028.png',
    '0029.png',
    '0030.png',
    '0031.png',
    '0032.png',
    '0033.png',
    '0034.png',
    '0035.png',
    '0036.png',
    '0037.png',
    '0038.png',
    '0039.png',
    '0040.png',
    '0041.png',
    '0042.png',
    '0043.png',
    '0044.png',
    '0045.png',
    '0046.png',
    '0047.png',
    '0048.png',
    '0049.png',
    '0050.png',
    '0051.png',
    '0052.png',
    '0053.png',
    '0054.png',
    '0055.png',
    '0056.png',
    '0057.png',
    '0058.png',
    '0059.png',
    '0060.png',
    '0061.png',
    '0062.png',
    '0063.png',
    '0064.png',
    '0065.png',
    '0066.png',
    '0067.png',
    '0068.png',

    // Add more image filenames here
];

const preloadImages = function(urls) {
    urls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
};

// Call preloadImages with the list of image URLs
preloadImages(imageFiles);

let currentIndex = 0;
const delay = 150; // Fixed delay in milliseconds

// Function to start the slideshow automatically
function startSlideshow() {
    // Show the first image
    displayImage();

    // Set interval to show images at the specified delay (120 ms)
    setInterval(function() {
        currentIndex = (currentIndex + 1) % imageFiles.length; // Loop through images
        displayImage();
    }, delay);
}

// Function to display an image
function displayImage() {
    const imagePath = `imageFiles/${imageFiles[currentIndex]}`;
    document.getElementById('slideshowImage').src = imagePath;
}

// Initial setup when the page loads
window.onload = function() {
    startSlideshow(); // Start the slideshow automatically upon loading
};