document.getElementById('musicForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const musicFiles = document.getElementById('musicFiles').files;
    const musicData = [];

    for (let i = 0; i < musicFiles.length; i++) {
        const file = musicFiles[i];
        const reader = new FileReader();

        reader.onload = function (e) {
            const fileData = {
                name: file.name,
                type: file.type,
                size: (file.size / (1024 * 1024)).toFixed(2) + ' MB', // Size in MB
                dataURL: e.target.result, // Base64 audio data
            };

            musicData.push(fileData);

            if (musicData.length === musicFiles.length) {
                let storedMusic = JSON.parse(localStorage.getItem('music')) || [];
                storedMusic = storedMusic.concat(musicData);
                localStorage.setItem('music', JSON.stringify(storedMusic));

                alert('Music uploaded successfully!');
                window.location.href = 'musicReport.html';
            }
        };

        reader.readAsDataURL(file);
    }
});
