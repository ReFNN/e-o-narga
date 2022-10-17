const video = document.querySelector('.video');
const botao = document.querySelector('.botao');
const player = document.getElementById("player");
const btt = document.getElementById('narga');
const main = document.querySelector('body');

function showVideo() {
    main.style.animation = 'fundoRemix 3s infinite';
    video.style.display = 'flex';
    player.load();
    player.play();
    btt.textContent = 'TOSSIU PASSOU';
}

function hideVideo() {
    player.pause();
    video.style.display = 'none';
    btt.textContent = 'E O NARGA?';
    main.style.animation = 'none';
}

function playPause() {
    if (player.paused)
        showVideo();
    else
        hideVideo();
}

botao.addEventListener('click', playPause);