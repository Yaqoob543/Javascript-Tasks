function green() {
    document.getElementById('signal').src = "/Traffic Signal/green.png"
    var video = document.getElementById('background-video')
    video.playbackRate = 2;
    video.play()
}

function yellow() {
    document.getElementById('signal').src = "/Traffic Signal/yellow.png"
    var video = document.getElementById('background-video')
    video.playbackRate = 0.3;
    video.play()
}

function red() {
    document.getElementById('signal').src = "/Traffic Signal/red.png"
    var video = document.getElementById('background-video')
    video.pause()
}