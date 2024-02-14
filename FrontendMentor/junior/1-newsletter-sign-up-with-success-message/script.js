"use strict";

const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMsg = document.querySelector(".errorMsg");
const mainEl = document.getElementById("main");
console.log(mainEl);

form.addEventListener("submit", (e) => {
    let sucess = validateInput();
    console.log(sucess);
    if (sucess) e.preventDefault();
    console.log(sucess);
    if (sucess) updateUI();
});

function updateUI() {
    const emailVal = email.value;
    const html = `
    <div class='thanksCard'>
    <div class="thanksCard__top">
        <img class="thanksCard__icon" src="assets/images/icon-list.svg" alt="" />
        <h1 class="card__title">Thanks for subscribing!</h1>
        <p class="card__subtitle">A confirmation email has been sent to <b>${emailVal}</b>. Please open it and click the button inside to confirm your subscription</p>
    </div>

    <button class="card__btn">Dismiss message</button>
    </div>
    `;
    console.log(html);
    mainEl.innerHTML = html;
}

function validateInput() {
    const emailVal = email.value;
    const inputControl = email.parentElement;

    if (emailVal === "" || !isValidEmail(emailVal)) {
        inputControl.classList.add("error");
        errorMsg.style.opacity = 1;
        return 0;
    } else {
        inputControl.classList.remove("error");
        errorMsg.style.opacity = 0;
        return 1;
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
