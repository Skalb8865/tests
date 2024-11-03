// SHOW MENU =========================
const navMenu = document.getElementById("main-nav");
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");

/*===== SHOW MENU =====*/
navOpen.addEventListener("click", () => {
	navMenu.classList.add("show-menu");
});

/*===== HIDE MENU =====*/
navClose.addEventListener("click", () => {
	navMenu.classList.remove("show-menu");
});

// REMOVE MENU ON CLICK FOR MOBILE =========================
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
	const navMenu = document.getElementById("main-nav");

	navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));


// CHANGE THE BACKGROUND ON SCROLL =========================
function changeHeaderColor() {
	const nav = document.getElementById("header");

	if (this.scrollY >= 200) nav.classList.add("scroll-header");
	else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", changeHeaderColor);

/*--------------------------------------album1,2,3 js--------------------------------*/

/*--------------------------------------END OF album1,2,3 js--------------------------------*/