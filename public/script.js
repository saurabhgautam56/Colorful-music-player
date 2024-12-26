const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const progressBar = document.getElementById('progress-bar');
const volumeControl = document.getElementById('volume');
const songList = document.getElementById('song-list');
const songTitle = document.getElementById('song-title');
const albumCover = document.getElementById('album-cover');
const currentTimeElem = document.getElementById('current-time');
const totalDurationElem = document.getElementById('total-duration');

// Song data
const songs = [
    { title: "Angreji Beat", src: "assets/music/Angreji Beat - International Villager 128 Kbps.mp3", cover: "assets/images/Angreji Beat - International Villager 128 Kbps.jpg" },
    { title: "Bolo Har Har Har", src: "assets/music/Bolo Har Har Har - Shivaay 128 Kbps.mp3", cover: "assets/images/Bolo Har Har Har - Shivaay 128 Kbps.jpg" },
    { title: "Blue Eyes", src: "assets/music/Blue Eyes Yo Yo Honey Singh 128 Kbps.mp3", cover: "assets/images/Blue-Eyes-Yo-Yo-Honey-Singh-500-500.jpg" },
];

let currentIndex = 0;

// Load the current song
function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    albumCover.src = song.cover;

    // Load metadata for duration
    audioPlayer.addEventListener('loadedmetadata', () => {
        totalDurationElem.textContent = formatTime(audioPlayer.duration);
    });
}

// Play or pause music
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // Change to pause icon
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
    }
}

// Format time in mm:ss
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update current time
audioPlayer.addEventListener('timeupdate', () => {
    currentTimeElem.textContent = formatTime(audioPlayer.currentTime);
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

// Seek song
progressBar.addEventListener('input', () => {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

// Adjust volume
volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value;
});

// Populate playlist
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.addEventListener('click', () => {
        currentIndex = index;
        loadSong(currentIndex);
        audioPlayer.play();
        playPauseButton.textContent = '⏸️';
    });
    songList.appendChild(li);
});

// Load the current song by index
function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    albumCover.src = song.cover;

    // Load metadata for duration when available
    audioPlayer.addEventListener('loadedmetadata', () => {
        totalDurationElem.textContent = formatTime(audioPlayer.duration);
    });
}

// Play the next song
function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;  // Loop back to the first song if we reach the end
    loadSong(currentIndex);
    audioPlayer.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // Update button to pause icon
}

// Play the previous song
function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length; // Loop back to the last song if we reach the beginning
    loadSong(currentIndex);
    audioPlayer.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // Update button to pause icon
}

// Event listener for when the song ends to automatically play the next song
audioPlayer.addEventListener('ended', () => {
    nextSong();
});


// Initial setup
loadSong(currentIndex);

// Event listeners
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);
