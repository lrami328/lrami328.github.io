document.addEventListener("DOMContentLoaded", function () {
    var video = document.querySelector(".background-video");
    var textBox = document.querySelector(".text-box");

    // Define video sources
    var videoSources = ["videos/fear_1.mp4", "videos/not-fear.mp4", "videos/other-fear.mp4"];

    var videoTimes = [0, 0, 0];
    var currentVideoIndex = 0;

    function switchToRandomVideo() {
        // Save the current time of the currently playing video
        videoTimes[currentVideoIndex] = video.currentTime;

        // Choose a new random index different from the current
        let newVideoIndex;
        do {
            newVideoIndex = Math.floor(Math.random() * videoSources.length);
        } while (newVideoIndex === currentVideoIndex);

        currentVideoIndex = newVideoIndex;

        // Set the new video source
        video.src = videoSources[currentVideoIndex];

        // Mute the video if it's the first one
        video.muted = currentVideoIndex === 0;

        // When the new video loads, resume from the last known time
        video.addEventListener("loadedmetadata", function resumeAtTime() {
            video.currentTime = videoTimes[currentVideoIndex];
            video.play();
            video.removeEventListener("loadedmetadata", resumeAtTime);
        });
    }

    // Add event listener to the text box
    textBox.addEventListener("click", switchToRandomVideo);
});
