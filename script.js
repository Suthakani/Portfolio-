// Optional enhancements
window.addEventListener("scroll", function () {
  document.querySelector("header").classList.toggle("shadow", window.scrollY > 0);
});
