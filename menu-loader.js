document.addEventListener('DOMContentLoaded', () => {
    fetch('menu.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load menu');
            }
            return response.text();
        })
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);

            // After the menu is inserted, initiate the fade-in effect
            fadeInMenu();
        })
        .catch(error => {
            console.error('Error loading menu:', error);
        });
});

const fadeInMenu = () => {
    const elements = document.querySelectorAll(".fade-in-menu");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a delay based on the index
                entry.target.style.transitionDelay = `${index * 0.2}s`;
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