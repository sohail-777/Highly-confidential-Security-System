const storedMusic = JSON.parse(localStorage.getItem('music')) || [];
const musicReportsContainer = document.getElementById('musicReportsContainer');

if (storedMusic.length === 0) {
    musicReportsContainer.innerHTML = '<p>No music uploaded yet. Please upload music files first.</p>';
} else {
    storedMusic.forEach(music => {
        const musicElement = document.createElement('div');
        musicElement.classList.add('music-report');
        musicElement.innerHTML = `
            <h3>${music.name}</h3>
            <p><strong>Type:</strong> ${music.type}</p>
            <p><strong>Size:</strong> ${music.size}</p>
            <audio controls>
                <source src="${music.dataURL}" type="${music.type}">
                Your browser does not support the audio element.
            </audio>
        `;
        musicReportsContainer.appendChild(musicElement);
    });
}
