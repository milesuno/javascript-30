const timerButtons = document.querySelectorAll(".timer__button");
let displayTimeLeft = document.querySelector(".display__time-left");
const displayEndTime = document.querySelector(".display__end-time");
let customForm = document.querySelector("[name='customForm']");
let customFormValue = document.querySelector("[name='minutes']");
let countDown;

console.log({
	timerButtons,
	displayTimeLeft,
	displayEndTime,
	customForm,
	customFormValue,
});

timerButtons.forEach((button) => {
	button.addEventListener("click", () => setAlarm(button));
});

customForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(customFormValue.value);
	let secs = customFormValue.value * 60;
	const startTime = Date.now();
	let prevTime = startTime;
	const endTime = startTime + secs * 1000;

	countDown = setInterval(() => {
		console.log("LOOP");
		let now = Date.now();
		let diffTime = (now - prevTime) / 1000;
		const endTime = startTime + secs * 1000;

		displayTimeLeft.textContent = secsToTime(secs);
		displayEndTime.textContent = msToEndTime(endTime);

		if (diffTime > 0.999 && diffTime < 1.1) {
			secs--;
			displayTimeLeft.textContent = secsToTime(secs);
			console.log({ secs, endTime });
			console.log(displayEndTime.style);
			prevTime = now;
		}

		if (secs <= 0) {
			clearInterval(countDown);
		}
	});
});

function setAlarm(button) {
	const startTime = Date.now();
	let prevTime = startTime;
	const endTime = startTime + button.dataset.time * 1000;
	let counter = button.dataset.time;
	displayTimeLeft.textContent = secsToTime(counter);
	displayEndTime.textContent = msToEndTime(endTime);

	countDown = setInterval(() => {
		console.log("LOOP");
		let now = Date.now();
		let diffTime = (now - prevTime) / 1000;
		if (diffTime > 0.999 && diffTime < 1.1) {
			counter--;
			displayTimeLeft.textContent = secsToTime(counter);
			console.log({ counter, endTime });
			console.log(displayEndTime.style);
			prevTime = now;
		}

		if (counter <= 0) {
			clearInterval(countDown);
		}
	});
}

//Counter is passed and runs because the count is in secs not ms.
function secsToTime(num) {
	let secondsLeft = num;

	let hours = Math.floor(secondsLeft / 3600);
	secondsLeft = secondsLeft % 3600;
	hours < 10 ? (hours = "0" + hours) : hours;

	let mins = Math.floor(secondsLeft / 60);
	secondsLeft = secondsLeft % 60;
	mins < 10 ? (mins = "0" + mins) : mins;

	let secs = secondsLeft % 60;
	secs < 10 ? (secs = "0" + secs) : secs;
	console.log({ secondsLeft, hours, mins, secs });

	if (num < 3600) {
		return `${mins}:${secs}`;
	}

	console.log("secs to time", { hours, mins, secs });
	return `${hours}:${mins}:${secs}`;
}

function msToEndTime(s) {
	let date = new Date(s);
	let hrs = date.getHours();
	let mins = date.getMinutes();
	return `Be back to work at ${hrs}:${mins}`;
}
