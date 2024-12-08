document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const imageFiles = document.getElementById('imageFiles').files;
    const images = [];

    for (let i = 0; i < imageFiles.length; i++) {
        const image = imageFiles[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            images.push({
                name: image.name,
                type: image.type,
                size: (image.size / (1024 * 1024)).toFixed(2) + ' MB', // Size in MB
                dataURL: e.target.result, // Base64 image data
            });

            // Store images after reading them
            if (images.length === imageFiles.length) {
                let storedImages = JSON.parse(localStorage.getItem('images')) || [];
                storedImages = storedImages.concat(images);
                localStorage.setItem('images', JSON.stringify(storedImages));

                // Redirect to the report page
                window.location.href = 'imagesReport.html';
            }
        };

        reader.readAsDataURL(image);
    }
});
