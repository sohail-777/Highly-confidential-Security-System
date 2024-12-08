document.getElementById('videoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const videoFiles = document.getElementById('videoFiles').files;
    const videos = [];

    for (let i = 0; i < videoFiles.length; i++) {
        const video = videoFiles[i];
        videos.push({
            name: video.name,
            type: video.type,
            size: (video.size / (1024 * 1024)).toFixed(2) + ' MB', // Size in MB
        });
    }

    // Store video details in localStorage
    let storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    storedVideos = storedVideos.concat(videos);
    localStorage.setItem('videos', JSON.stringify(storedVideos));

    // Redirect to report page
    window.location.href = 'videosReport.html';
});
