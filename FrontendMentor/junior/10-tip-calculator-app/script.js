"use strict";

const billInput = document.getElementById("bill");
const inputBtns = document.querySelectorAll(".input-btn");
const customInput = document.getElementById("custom-input");
const personsNumberInput = document.getElementById("number-of-people");

const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const resetBtn = document.querySelector(".reset-btn");

let tipPercent = 0;

/*
=============== 
    Functions
===============
*/

const validInput = function () {
    if (billInput.value !== "" && billInput.value != 0 && personsNumberInput !== "" && personsNumberInput.value != 0) return true;
    return false;
};

const tipSelected = function () {
    let tipSelected = false;
    inputBtns.forEach((btn) => {
        if (btn.classList.contains("active")) {
            tipSelected = true;
        }
    });
    return tipSelected;
};

const calc = function () {
    let sum = 0;
    let tip = 0;
    if (validInput()) {
        sum = billInput.value / personsNumberInput.value;
        total.textContent = `$${sum.toFixed(2)}`;
    }

    if ((validInput() && tipSelected()) || (validInput() && customInput.value !== "")) {
        sum = billInput.value / personsNumberInput.value;
        tip = sum * tipPercent;
        sum = sum + tip;
        total.textContent = `$${sum.toFixed(2)}`;
        tipAmount.textContent = `$${tip.toFixed(2)}`;
    }
};

const localReset = function () {
    inputBtns.forEach((btn) => btn.classList.remove("active"));
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
};

/*
=============== 
    App Reset
===============
*/

const resetApp = function () {
    inputBtns.forEach((btn) => btn.classList.remove("active"));
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
    personsNumberInput.value = "";
    billInput.value = "";
};

resetBtn.addEventListener("click", resetApp);

/*
============================== 
    Select Tip control
==============================
*/

inputBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        inputBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");
        // retrieve the custom data attribute value: 2 ways
        // 1) Using getAttribute() method: tipPercent = btn.getAttribute("data-tip");
        // 2) Using dataset property:
        tipPercent = btn.dataset.tip;

        calc();
    });
});

customInput.addEventListener("input", function () {
    inputBtns.forEach((btn) => btn.classList.remove("active"));
    tipPercent = this.value / 100;

    calc();
});

/*
============================================= 
                Input control
=============================================
*/

billInput.addEventListener("input", function () {
    this.previousElementSibling.classList.remove("error");
    this.style.border = "none";
    localReset();

    if (personsNumberInput.value === "" || personsNumberInput.value == 0) {
        personsNumberInput.previousElementSibling.classList.add("error");
        personsNumberInput.style.border = "1px solid hsl(0, 100%, 74%)";
    }

    if (this.value === "" || this.value == 0) {
        this.style.border = "1px solid hsl(0, 100%, 74%)";
        this.previousElementSibling.classList.add("error");
    }

    calc();
});

personsNumberInput.addEventListener("input", function () {
    this.previousElementSibling.classList.remove("error");
    this.style.border = "none";
    localReset();

    if (billInput.value === "" || billInput.value == 0) {
        billInput.previousElementSibling.classList.add("error");
        billInput.style.border = "1px solid hsl(0, 100%, 74%)";
    }

    if (this.value === "" || this.value == 0) {
        this.style.border = "1px solid hsl(0, 100%, 74%)";
        this.previousElementSibling.classList.add("error");
    }

    calc();
});
