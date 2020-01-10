const endpoint =
	"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
//onchange of input filter the output of a fetch request
//catch the data being input into search
//fetch the data and store it in a variable
//filter variable based on input recieved
const data = [];

fetch(endpoint)
	.then(res => res.json())
	.then(json => data.push(...json))
	.catch(err => "This failed");

filter_city = (cities, word_to_search) => {
	let regex = new RegExp(word_to_search, "gi");
	return cities.filter(
		location => location.city.match(regex) || location.state.match(regex)
	);
};

display_match = e => {
	let filtered = filter_city(data, e.target.value);

	let html = filtered
		.map(location => {
			let regex = new RegExp(e.target.value, "gi");

			let city_name = location.city.replace(
				regex,
				`<span class="hl">${e.target.value}</span>`
			);

			let state_name = location.city.replace(
				regex,
				`<span class="hl">${e.target.value}</span>`
			);

			return `
            <li>
              <span>${city_name}, ${state_name}</span>
              <span>${location.population}</span>
            </li>
            `;
		})
		.join("");

	ul.innerHTML = html;

	// FIX: Child node of last list append remains even with after new search
	// filtered.forEach(location => {
	// 	let li = document.createElement("li");
	// 	li.innerHTML = location.city;
	// 	ul.appendChild(li)
	// // li.remove()
	// });
};

let ul = document.querySelector("ul");
let li = document.querySelector("li");
let span = document.querySelectorAll("span");

let search = document.querySelector(".search");

search.addEventListener("input", display_match);
