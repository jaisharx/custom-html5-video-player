const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// play and pause video status
function toggelVideoStatus() {
    if(video.paused){
        video.play()
    }else {
        video.pause();
    }
}

// update play pause icon
function updatePlayIcon() {
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'; 
    }else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'; 
    }
}

// update progress and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    }

    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }

    timestamp.innerText = `${mins}:${secs}`;
}

// set video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

video.addEventListener('click', toggelVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

playBtn.addEventListener('click', toggelVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);