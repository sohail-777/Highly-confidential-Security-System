const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
const videoReportsContainer = document.getElementById('videoReportsContainer');

if (storedVideos.length === 0) {
    videoReportsContainer.innerHTML = '<p>No videos uploaded yet. Please upload videos first.</p>';
} else {
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

