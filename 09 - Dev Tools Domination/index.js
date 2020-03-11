const dogs = [
	{ name: "Snickers", age: 2 },
	{ name: "hugo", age: 8 }
];

const templateliteral = "template literal";

function makeGreen() {
	const p = document.querySelector("p");
	p.style.color = "#BADA55";
	p.style.fontSize = "50px";
}

// Regular
console.log("Regular Console Log");

// Interpolated
console.log(`Console log with ${templateliteral}`);

// Styled
console.log("%cStyled Console Log ", "color: red; font-size: 50px");

// warning!
console.warn("Console Warning");

// Error :|
console.error("Console Error");

// Info
console.info("Console Info");
// Testing

// clearing
// console.clear();

// Viewing DOM Elements
console.dir(document.querySelector("p"));

// Grouping together
console.group("Dogs");
console.log(`Woof! I am ${dogs[0].name}`);
console.log(`I am ${dogs[0].age} yours old.`);
console.groupEnd("Dogs");

// counting
console.count("Console Log count");
console.count("Console Log count");
console.count("Console Log count");
console.count("Console Log count");
console.count("Console Log count");
console.count("Console Log count");
console.count("Console Log count");

// timing
console.time("Console Time");
