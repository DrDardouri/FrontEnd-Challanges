const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    navList.classList.toggle("show-links");
});
