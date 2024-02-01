"use strict";
const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

// functions

function validateInputs() {
  const firstNameVal = firstName.value;
  const lastNameVal = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;

  if (firstNameVal === "") {
    setError(firstName, "First Name cannot be empty");
  } else {
    setSuccess(firstName);
  }

  if (lastNameVal === "") {
    setError(lastName, "Last Name cannot be empty");
  } else {
    setSuccess(lastName);
  }

  if (emailVal === "") {
    setError(email, "Email field cannot be empty");
  } else if (!isValidEmail(emailVal)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    setError(password, "Password cannot be empty");
  } else if (passwordVal.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
}

function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
