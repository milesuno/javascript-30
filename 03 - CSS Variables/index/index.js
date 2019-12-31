let inputs = document.querySelectorAll("input");

function updateCSS() {
	const suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(
		`--${this.name}`,
		`${this.value}${suffix}`
	);
	console.log(this.style.spacing);
}

inputs.forEach(input => input.addEventListener("change", updateCSS));
