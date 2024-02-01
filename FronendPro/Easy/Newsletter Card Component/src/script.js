// write your JavaScript here
const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInput();
});

function validateInput() {
  const emailVal = email.value.trim();

  if (emailVal === "") {
    errorMsg.textContent = "Email Field cannot be empty!";
  } else if (!isValidEmail(emailVal)) {
    errorMsg.textContent = "Enter a valid email please.";
  } else {
    errorMsg.textContent = "";
  }
}

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
