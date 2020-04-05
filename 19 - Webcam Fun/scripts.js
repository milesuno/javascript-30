//Video to store webcam stream
const video = document.querySelector(".player");
//To store snapspot shot of video stream
const canvas = document.querySelector(".photo");
//Canvas where video snap is store periodically
const ctx = canvas.getContext("2d");
const controls = document.querySelector(".controls");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");

// controls.appendChild(redSlider);

async function getVideo() {
	const stream = await navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false
	});
	video.srcObject = stream;
	video.play();
}

function drawToCanvas() {
	//videoWidth/videoHeight properties return 0. This may be an issue of when the values are being evaluated
	const width = video.videoWidth;
	const height = video.videoHeight;

	canvas.height = height;
	canvas.width = width;

	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
		let pixels = ctx.getImageData(0, 0, width, height);
		pixels = redFilter(pixels);
		pixels = greenFilter(pixels);
		pixels = blueFilter(pixels);
		ctx.putImageData(pixels, 0, 0);
	}, 20);
}

function takePhoto() {
	//reset snap before playing the sound
	snap.currentTime = 0;
	snap.play();
	const data = canvas.toDataURL("jpeg");
	const link = document.createElement("a");
	link.href = data;
	link.download = "130 IQ ;)";
	link.innerHTML = `<img src="${data}"/>`;
	strip.appendChild(link);
}

function redFilter(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		redSlider.defaultValue = pixels.data[i];
		if (redSlider.valueAsNumber) {
			pixels.data[i] = redSlider.valueAsNumber;
		}
	}
	return pixels;
}

function greenFilter(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		greenSlider.defaultValue = pixels.data[i + 1];
		if (greenSlider.valueAsNumber) {
			pixels.data[i + 1] = greenSlider.valueAsNumber;
		}
	}
	return pixels;
}

function blueFilter(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		blueSlider.defaultValue = pixels.data[i + 2];
		if (blueSlider.valueAsNumber) {
			pixels.data[i + 2] = blueSlider.valueAsNumber;
		}
	}
	return pixels;
}

getVideo();
// drawToCanvas();
//once video.play() is called canplay event is fired
video.addEventListener("canplay", drawToCanvas);
