let currentTrackIndex = 0;
let tracks = [];

// Función para cargar las canciones desde la API de Free Music Archive
async function fetchTracks() {
    const response = await fetch('https://freemusicarchive.org/api/get/tracks.json?api_key=YOUR_API_KEY&limit=10'); // Reemplaza YOUR_API_KEY si es necesario
    const data = await response.json();
    tracks = data.data;
    loadTracks(tracks);
}

// Cargar pistas en la lista
function loadTracks(tracks) {
    const songsList = document.getElementById("songs");
    songsList.innerHTML = ''; // Limpiar lista existente
    tracks.forEach((track, index) => {
        const li = document.createElement("li");
        li.textContent = `${track.title} - ${track.artist}`;
        li.addEventListener("click", () => playTrack(index));
        songsList.appendChild(li);
    });
    document.getElementById('track-list').style.display = 'block';
}

// Reproducir la canción seleccionada
function playTrack(index) {
    const audio = document.getElementById("audio");
    audio.src = tracks[index].file_url; // URL de la canción
    document.getElementById("track-title").textContent = tracks[index].title;
    document.getElementById("track-artist").textContent = tracks[index].artist;
    audio.play();
}

// Evento para ir a la siguiente canción
document.getElementById("next-button").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
});

// Cargar las pistas al iniciar
fetchTracks();
