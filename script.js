let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImg = document.getElementById("songImg");

let current = document.getElementById("current");
let duration = document.getElementById("duration");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;

    duration.innerHTML = formatTime(song.duration);
};

function playPause() {
    if (song.paused) {
        song.play();

        ctrlIcon.classList.remove("bi-play-fill");
        ctrlIcon.classList.add("bi-pause-fill");

        songImg.classList.add("playing");
    } else {
        song.pause();

        ctrlIcon.classList.remove("bi-pause-fill");
        ctrlIcon.classList.add("bi-play-fill");

        songImg.classList.remove("playing");
    }
}

song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;

    current.innerHTML = formatTime(song.currentTime);
});

progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});

function formatTime(time) {
    let mins = Math.floor(time / 60);
    let secs = Math.floor(time % 60);

    if (secs < 10) {
        secs = "0" + secs;
    }

    return `${mins}:${secs}`;
}