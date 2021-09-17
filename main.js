let menuBar = document.querySelector(".burger");
let navMenu = document.querySelector(".menu");


menuBar.addEventListener("click", mobileMenu);

function mobileMenu() {
   menuBar.classList.toggle("active");
   navMenu.classList.toggle("active");

};
let navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
   menuBar.classList.remove("active");
   navMenu.classList.remove("active");
}