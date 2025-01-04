    const preloadImages = (urls) => {
        urls.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    };

    // Call preloadImages with the list of image URLs
    preloadImages(imageFiles);
