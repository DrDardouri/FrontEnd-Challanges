"use-strict";

const openNavBtn = document.querySelector(".open-nav-btn");
const closeNavBtn = document.querySelector(".close-nav-btn");
const bodyEl = document.querySelector(".body");

// event handlers

// open mobile navigation
openNavBtn.addEventListener("click", function () {
    bodyEl.classList.add("active-body");
});

// close mobile navigation
closeNavBtn.addEventListener("click", function () {
    bodyEl.classList.remove("active-body");
});

// close the mobile navigation when screen is over 800px
window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 800px)").matches) {
        bodyEl.classList.remove("active-body");
    }
});
