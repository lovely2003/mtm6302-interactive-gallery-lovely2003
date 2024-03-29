// Image data (source URLs and details)
const imageData = [
    { src: "1.jpeg", hdSrc: "1.jpeg", caption: "Image 1 - Details here" },
    { src: "2.jpeg", hdSrc: "2.jpeg", caption: "Image 2 - Details here" },
    { src: "3.jpg", hdSrc: "3.jpg", caption: "Image 3 - Details here" },
    { src: "4.jpeg", hdSrc: "4.jpeg", caption: "Image 4 - Details here" },
    { src: "5.jpeg", hdSrc: "5.jpeg", caption: "Image 5 - Details here" },
    { src: "6.jpg", hdSrc: "6.jpg", caption: "Image 6 - Details here" },
    { src: "7.jpeg", hdSrc: "7.jpeg", caption: "Image 7 - Details here" },
    { src: "8.jpeg", hdSrc: "8.jpeg", caption: "Image 8 - Details here" },
    { src: "9.jpeg", hdSrc: "9.jpeg", caption: "Image 9 - Details here" },
    { src: "10.jpeg", hdSrc: "10.jpeg", caption: "Image 10 - Details here" },
    { src: "11.jpeg", hdSrc: "11.jpeg", caption: "Image 11 - Details here" },
    { src: "12.jpeg", hdSrc: "12.jpeg", caption: "Image 12 - Details here" },
];

// Get elements
const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const largeImage = document.getElementById('largeImage');
const imageDetails = document.getElementById('imageDetails');

// Dynamically generate the gallery with minimum of 12 images
imageData.forEach(image => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.caption;
    img.dataset.hdSrc = image.hdSrc; // Store HD image source in custom data attribute

    imageContainer.appendChild(img);
    gallery.appendChild(imageContainer);
});

// Add event listener using event delegation
gallery.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'IMG' && target.parentElement.classList.contains('image-container')) {
        const hdSrc = target.dataset.hdSrc;
        const caption = imageData.find(image => image.src === target.src).caption;
        showImageDetails(hdSrc, caption);
    }
});

// Function to show image details in overlay
function showImageDetails(src, caption) {
    largeImage.src = src;
    imageDetails.textContent = caption; // Ensure caption text is correctly assigned
    overlay.style.display = 'flex';

    // Add click event listener to the overlay to hide image details
    overlay.addEventListener('click', hideImageDetails);
}



// Function to hide image details and overlay
function hideImageDetails(event) {
    if (event.target === overlay || event.target === largeImage) {
        overlay.style.display = 'none';
        overlay.removeEventListener('click', hideImageDetails); // Remove the event listener
    }
}
