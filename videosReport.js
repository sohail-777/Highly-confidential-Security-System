// Get all stored videos from localStorage
let storedVideos = JSON.parse(localStorage.getItem('videos')) || [];

// Get the container for displaying video reports
const videoReportsContainer = document.getElementById('videoReportsContainer');

// If no videos are stored, display a message
if (storedVideos.length === 0) {
    videoReportsContainer.innerHTML = '<p>No videos uploaded yet. Please upload videos first.</p>';
} else {
    // Loop through each stored video and display the details
    storedVideos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-report');

        videoElement.innerHTML = `
            <h3>${video.name}</h3>
            <p><strong>Type:</strong> ${video.type}</p>
            <p><strong>Size:</strong> ${video.size}</p>
        `;

        videoReportsContainer.appendChild(videoElement);
    });
}
