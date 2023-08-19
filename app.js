const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("change");
navLinks.classList.toggle("nav-change");
});