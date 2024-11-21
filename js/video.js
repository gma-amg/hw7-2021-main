var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.addEventListener("DOMContentLoaded", function() {
	const videoElement = document.querySelector("#player1");
	videoElement.autoplay = false;
	videoElement.loop = false;
	console.log("Autoplay and loop are turned off");
	const playButton = document.querySelector("#play");
	const volumeInfo = document.getElementById("volumeInfo");

	playButton.addEventListener("click", function() {
		if (videoElement.paused) {
		  videoElement.play(); // Play the video
		}
		updateVolumeInfo(); // Update volume display
		video.play();
  });


  document.querySelector("#slower").addEventListener("click", funtion(){
	//console log
	video.playbackRate *= .90;
	//console log
  });

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });