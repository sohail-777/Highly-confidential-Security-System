// Get all stored images from localStorage
let storedImages = JSON.parse(localStorage.getItem('images')) || [];

// Get the container for displaying image reports
const imageReportsContainer = document.getElementById('imageReportsContainer');

// If no images are stored, display a message
if (storedImages.length === 0) {
    imageReportsContainer.innerHTML = '<p>No images uploaded yet. Please upload images first.</p>';
} else {
    // Loop through each stored image and display the details along with the image thumbnail
    storedImages.forEach(image => {
        const imageElement = document.createElement('div');
        imageElement.classList.add('image-report');

        imageElement.innerHTML = `
            <img src="${image.dataURL}" alt="${image.name}">
            <div>
                <h3>${image.name}</h3>
                <p><strong>Type:</strong> ${image.type}</p>
                <p><strong>Size:</strong> ${image.size}</p>
            </div>
        `;

        imageReportsContainer.appendChild(imageElement);
    });
}
