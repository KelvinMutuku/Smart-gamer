// (A) SMOOTH SCROLL TO TOP
const totop = () => window.scroll({
  top: 0, left: 0, behavior: "smooth"
});

// (B) SHOW/HIDE BUTTON ON SCROLL
const togtop = () => { if (window.scrollY >= 100) {
  document.getElementById("backtop").classList.add("show");
} else {
  document.getElementById("backtop").classList.remove("show");
}};
window.addEventListener("scroll", togtop);
window.addEventListener("resize", togtop);