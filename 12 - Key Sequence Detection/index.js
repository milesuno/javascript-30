const passcode = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"a",
	"b"
];

let userInput = [];

const clearBtn = document.querySelector("button");
clearBtn.addEventListener("click", () => {
	userInput = [];
	console.log(userInput);
});

document.addEventListener("keydown", checkPasscode);

function checkPasscode(e) {
	if (userInput.length < passcode.length) {
		userInput.push(e.key);
	} else {
		alert("FAIL");
		userInput = [];
	}

	if (userInput.join().includes(passcode)) {
		alert("SUCCESSFUL");
		userInput = [];
	}
	console.log("User Input", userInput);
}
