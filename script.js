// Dark Mode Toggle
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Slideshow Functionality
let slideIndex = 0; // Starting slide index
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Ensure the index loops correctly
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    
    // Display the current slide
    slides[slideIndex].style.display = 'block';
}

function changeSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

// Initialize the first slide
showSlide(slideIndex);


// Mobile Navbar Toggle
const navLinks = document.querySelector('.nav-links');
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
