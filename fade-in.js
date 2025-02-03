const fadeInElements = () => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a delay based on the index
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                entry.target.classList.add("visible");
                entry.target.classList.remove("invisible");
                // observer.unobserve(entry.target); // Stop observing once it's visible
            }
            else {
                entry.target.style.transitionDelay = `${index * 0}s`;
                entry.target.classList.remove("visible");
                entry.target.classList.add("invisible");
            }
        });
    });

    elements.forEach(el => observer.observe(el));
};

setTimeout(() => {
    fadeInElements(); 
}, 100);