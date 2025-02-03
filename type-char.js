// Function to create a typing effect
function typeText(element, text, speed, shouldTypeFlag) {
    let i = 0;

    function typeCharacter() {
        if (i < text.length && shouldTypeFlag.isTyping) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeCharacter, speed);
        }
    }

    typeCharacter();
}

// Function to handle the typing effect based on visibility
function handleTypingEffect(element, text, speed) {
    // Create a flag object to control typing
    const shouldTypeFlag = { isTyping: false };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Reset and start typing when the element is in the viewport
                element.textContent = ''; // Clear the element's content
                shouldTypeFlag.isTyping = true; // Enable typing
                typeText(element, text, speed, shouldTypeFlag);
            } else {
                // Stop typing when the element is out of the viewport
                shouldTypeFlag.isTyping = false; // Disable typing
                element.textContent = ''; // Reset the text
            }
        });
    });

    observer.observe(element);
}

// Get all <p> elements with the class "typeChar"
document.querySelectorAll('.typeChar').forEach((element) => {
    const text = element.textContent; // Get the text content
    const speed = 25; // Typing speed (ms per character)

    // Initialize the observer and typing effect
    handleTypingEffect(element, text, speed);
});













// // Function to create a typing effect
// function typeText(element, text, speed) {
//     let i = 0;
//     function typeCharacter() {
//     if (i < text.length) {
//         element.innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typeCharacter, speed);
//     }
//     }
//     typeCharacter();
// }

// // Function to handle the typing effect based on visibility
// function handleTypingEffect(element, text, speed) {
//     const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//         // Reset and start typing when the element is in the viewport
//         element.textContent = ''; // Clear the element's content
//         typeText(element, text, speed);
//         } else {
//         // Reset the text when the element is out of the viewport
//         element.textContent = '';
//         }
//     });
//     });

//     observer.observe(element);
// }

// // Get all <p> elements with the class "type"
// document.querySelectorAll('.typeChar').forEach((element) => {
//     const text = element.textContent; // Get the text content
//     const speed = 50; // Typing speed (ms per character)

//     // Initialize the observer and typing effect
//     handleTypingEffect(element, text, speed);
// });
