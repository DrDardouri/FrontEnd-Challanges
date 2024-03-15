/* //////////////////////////////
    Mobile Navigation Component
//////////////////////////////// */

/*
=============== 
    Select Elements
=============== 
*/
"use-strict";
const openNavBtn = document.querySelector(".open-nav-btn");
const closeNavBtn = document.querySelector(".close-nav-btn");
const bodyEl = document.querySelector(".body");

// DropDown Elements
const featuresBtn = document.querySelector(".features-btn");
const companyBtn = document.querySelector(".company-btn");

/*
============================== 
    Event Handlers
============================== 
*/

// open mobile navigation
openNavBtn.addEventListener("click", function () {
    console.log("open");
    bodyEl.classList.add("active-body");
});

// close mobile navigation
closeNavBtn.addEventListener("click", function () {
    bodyEl.classList.remove("active-body");
});

// close mobile navigation when screen is over 800px
window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 800px)").matches) {
        bodyEl.classList.remove("active-body");
        featuresBtn.parentElement.classList.remove("active");
        companyBtn.parentElement.classList.remove("active");
    }
});

// DropDown navigation // works only in mobile layout //
const dropDownHandler = function () {
    const parentElement = this.parentElement;
    if (window.matchMedia("(min-width: 800px)").matches) return;
    // this code will run only in mobile Layout
    parentElement.classList.toggle("active");
};

featuresBtn.addEventListener("click", dropDownHandler);
companyBtn.addEventListener("click", dropDownHandler);
