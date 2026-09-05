// mobile menu toggle
var menuToggle = document.getElementById("menuToggle");
var navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// smooth scroll + active link highlight + close mobile menu
var links = document.querySelectorAll("nav a");
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("open");
  });
});

var sectionEls = document.querySelectorAll("section[id]");
window.addEventListener("scroll", function () {
  var current = "";
  sectionEls.forEach(function (sec) {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  links.forEach(function (link) {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current,
    );
  });
});

// basic form handling (no backend, just shows a message)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMsg").style.display = "block";
  this.reset();
});
