// Parallax effect on images
const images = document.querySelectorAll('.image-carousel img');

// Function to apply parallax effect
const applyParallaxEffect = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    images.forEach((image) => {
        const imageRect = image.getBoundingClientRect();
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const imageCenterY = imageRect.top + imageRect.height / 2;

        // Calculate movement values
        const moveX = (imageCenterX - x) / 40;
        const moveY = (imageCenterY - y) / 40;

        // Apply transformation
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
};

// Add mousemove event listener
document.addEventListener('mousemove', applyParallaxEffect);

// Scroll-to-top button functionality
const scrollToTopButton = document.getElementById('scrollToTop');

// Function to toggle the visibility of the scroll-to-top button
const toggleScrollToTopButton = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

// Add scroll event listener
window.addEventListener('scroll', toggleScrollToTopButton);

// Scroll to the top of the page when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
