// JavaScript for Image Gallery

const images = document.querySelectorAll('.image img');
const imageDescription = document.querySelector('.image-description p');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Initialize the gallery
showImage(currentIndex);

// Show image and description based on index
function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
    updateDescription(index);
}

// Update image description
function updateDescription(index) {
    const descriptions = [
        "Image 1 Description",
        "Image 2 Description",
        "Image 3 Description",
        // Add more descriptions here
    ];

    imageDescription.textContent = descriptions[index];
}

// Event listeners for navigation
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
