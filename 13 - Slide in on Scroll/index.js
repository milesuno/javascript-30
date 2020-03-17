//Debounce limits the amount of function calls made on events. This is useful for scroll events as they called very often and can cause performance issues as JS may prioties these calls rather than others.
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const images = document.querySelectorAll(".slide-in");

document.addEventListener("scroll", debounce(checkScroll));

function checkScroll(e) {
	images.forEach(image => {
		let slideIn =
			window.scrollY +
			window.innerHeight /*Page Bottom*/ -
			image.height / 2; /*Half of image height*/
		// px where image top starts + image height = px for image bottom
		let imageBottom = image.offsetTop + image.height;

		//***Flag Var - return true or false. This will be used to trigger other functions

		// If slideIn px is greater than image top then return true
		const isHalfway = slideIn > image.offsetTop;
		//if top of browser is less than image bottom return true
		const isNotscrolledPassed = window.scrollY < imageBottom;

		if (isHalfway && isNotscrolledPassed) {
			image.classList.add("active");
		} else {
			image.classList.remove("active");
		}
	});
}
