function toggleSound() {
    const music = document.getElementById('background-music');
    const toggleButton = document.getElementById('toggle-sound');

    if (music.paused) {
        music.play();
        toggleButton.textContent = '🔊'; // Sound On icon
    } else {
        music.pause();
        toggleButton.textContent = '🔇'; // Sound Off icon
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    music.muted = false;
    music.play().catch(error => {
        console.log('Autoplay failed:', error);
    });
});

