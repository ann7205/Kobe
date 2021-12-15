const navbar = document.querySelector(".navbar-fixed-top");

document.addEventListener("scroll", (e) => {
	let scrollHeight = e.target.documentElement.scrollTop;
	let height = navbar.offsetHeight;
	if (scrollHeight > height) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});

// class Patal {
// 	constructor(x, y) {

// 	}
// }



