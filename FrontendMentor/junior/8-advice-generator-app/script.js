// JS code for an Advice genereator app with API implementation
// API: https://api.adviceslip.com/

"use-strict";
// Element Selection
const adviceBtn = document.querySelector(".advice__btn");
const adviceText = document.querySelector(".advice__text");
const adviceNumber = document.getElementById("advice-number");

// App initialization
renderAdvice();

// App main logic
adviceBtn.addEventListener("click", renderAdvice);

function renderAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            const adviceObj = data.slip;
            adviceNumber.innerText = adviceObj.id;
            adviceText.innerText = adviceObj.advice;
        });
}
