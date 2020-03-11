let inputs = document.querySelectorAll("input[type='checkbox']");

inputs.forEach(input => {
	input.addEventListener("click", handleCheck);
});

let lastClicked;

function handleCheck(e) {
	let inBetween = false;

	if (e.shiftKey && this.checked) {
		inputs.forEach(input => {
			console.log("This", this);
			if (input === this || input === lastClicked) {
				inBetween = !inBetween;
			}

			if (inBetween) {
				// console.log(input);
				input.checked = true;
			}
		});
	}

	//Last is set at the end of function.
	//This means on the intial click lastClick is set to 'this' - being the current event.target
	//lastClicked will continue to be updated on click of the input until the if statement conditions are met
	//if the user is pressing the shiftKey onClick and the input box is being checked then loop through the inputs array.
	//if input is === to this (the current selected input) || if the input is === lastClicked (which was set to the previous clicked input on the last handleChecked()) inBetween(Trigger for setting checked for between inputs) is set to true.
	//if inBetween is true - Inputs are between 'lastClicked' and 'this'.
	//if (while) inBetween is true set the input.checked = true.
	//Once lastClicked or 'this' is iterated over inBetween is set back to false
	lastClicked = this;
}
