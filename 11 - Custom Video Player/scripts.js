const mediaPlayer = document.querySelector(".player");
const media = document.querySelector(".player__video.viewer");

//Controls
const controls = document.querySelector(".player__controls");
const timeline = document.querySelector(".progress");
const timelineProgress = document.querySelector(".progress__filled");
const playButton = document.querySelector(".player__button.toggle");
const volume = document.querySelector("input[name='volume']");
const playbackSpeed = document.querySelector("input[name='playbackRate']");
const skip = document.querySelectorAll("button[data-skip]");
const fullscreenBtn = document.querySelector(".player__button.fullscreen");

mediaPlayer.removeAttribute("controls");
controls.style.visibility = "visible";

//Play/Pause Media
media.addEventListener("click", toggleMedia);
playButton.addEventListener("click", toggleMedia);

function toggleMedia() {
	console.log("toggleMedia");
	if (media.paused) {
		media.play();
	} else {
		media.pause();
	}
}

//Play toggle button
media.addEventListener("pause", toggleButton);
media.addEventListener("play", toggleButton);

function toggleButton() {
	playButton.textContent = media.paused
		? (playButton.textContent = "►")
		: (playButton.textContent = "❚ ❚");
	console.log(playButton.textContent);
}

//Volume slider

volume.addEventListener("change", volumeSlider);

function volumeSlider() {
	console.log("Volume Slider");
	media.volume = volume.value;
}

//Playback Speed

playbackSpeed.addEventListener("click", adjustPlayback);

function adjustPlayback() {
	console.log("playback");
	media.playbackRate = playbackSpeed.value;
}

//Skip timeline

skip.forEach(skipBtn => skipBtn.addEventListener("click", skipTimeline));

function skipTimeline() {
	console.log("skip");
	media.currentTime += Number(this.dataset.skip);
}

//timeline
media.addEventListener("timeupdate", updateTimeline);

function updateTimeline() {
	console.log("timeline update");
	let percent = (media.currentTime / media.duration) * 100;
	timelineProgress.style.flexBasis = `${percent}%`;
}

//timeline scrub

timeline.addEventListener("click", updateScrub);

function updateScrub(e) {
	console.log("Scrub");
	let percent = (e.offsetX / timeline.scrollWidth) * 100;
	timelineProgress.style.flexBasis = `${percent}%`; //Updates timeline onCLick
	let newTime = (e.offsetX / timeline.offsetWidth) * media.duration; //update current time
	media.currentTime = newTime;
}

//Toggle Fullscreen

fullscreenBtn.addEventListener("click", toggleFullscreen);
media.addEventListener("dblclick", toggleFullscreen);

function toggleFullscreen() {
	console.log("Fullscreen");
	media.requestFullscreen();
}
