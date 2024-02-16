"use-strict";

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const yearsOutput = document.getElementById("years-output");
const monthsOutput = document.getElementById("months-output");
const daysOutput = document.getElementById("days-output");

const btn = document.querySelector(".card__btn");

btn.addEventListener("click", function (e) {
    e.preventDefault();

    validateInput(dayInput);
    validateInput(monthInput);
    validateInput(yearInput);

    calcAge();
});

function validateInput(inputEl) {
    if (inputEl.value === "") {
        inputEl.parentElement.classList.add("error");
    } else {
        inputEl.parentElement.classList.remove("error");
    }
}

function calcAge() {
    const birthDayString = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
    const currentDate = new Date();
    const birthdate = new Date(birthDayString);

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const birthYear = birthdate.getFullYear();
    const birthMonth = birthdate.getMonth();
    const birthDay = birthdate.getDate();

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        const daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
        ageDays += daysInPreviousMonth;
        ageMonths--;
    }

    yearsOutput.textContent = ageYears;
    monthsOutput.textContent = ageMonths;
    daysOutput.textContent = ageDays;
}
