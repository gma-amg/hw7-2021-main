var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.addEventListener("DOMContentLoaded", function() {
	const videoElement = document.querySelector("#player1");
	videoElement.autoplay = false;
	videoElement.loop = false;
	console.log("Autoplay and loop are turned off");

    const playButton = document.getElementById("play");
    const pauseButton = document.getElementById("pause");
    const slowerButton = document.getElementById("slower");
    const fasterButton = document.getElementById("faster");
    const skipButton = document.getElementById("skip");
    const muteButton = document.getElementById("mute");
    const volumeSlider = document.getElementById("slider");
    const volumeDisplay = document.getElementById("volume");
    const vintageButton = document.getElementById("vintage");
    const origButton = document.getElementById("orig");

	playButton.addEventListener("click", function() {
		if (videoElement.paused) {
		  videoElement.play(); // Play the video
		}
		updateVolumeInfo(); // Update volume display
		videoElement.play();
 	});

	pauseButton.addEventListener("click", function(){
		videoElement.pause();
	});

	slowerButton.addEventListener("click", function(){
		videoElement.playbackRate *= 0.9;
        console.log(`Current speed: ${video.playbackRate.toFixed(2)}`);
	});

	fasterButton.addEventListener("click", function () {
        videoElement.playbackRate /= 0.9;
        console.log(`Current speed: ${video.playbackRate.toFixed(2)}`);
    });

	skipButton.addEventListener("click", function () {
        videoElement.currentTime += 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;  // Restart if past the end
        }
        console.log(`Current time: ${video.currentTime.toFixed(2)} seconds`);
    });

	muteButton.addEventListener("click", function(){
		video.muted = !video.muted;
        muteButton.textContent = video.muted ? "Unmute" : "Mute";
	});

	volumeSlider.addEventListener("input", function () {
        video.volume = volumeSlider.value / 100;
        updateVolume();
    });

	function updateVolume() {
        volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`;
    }

	vintageButton.addEventListener("click", function () {
        video.classList.add("oldSchool");
    });

	origButton.addEventListener("click", function () {
        video.classList.remove("oldSchool");
    });


});