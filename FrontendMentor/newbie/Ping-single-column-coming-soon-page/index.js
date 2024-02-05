const form = document.getElementById("form");
const email = document.getElementById("email");
const btn = document.getElementById("btn");
const errorMsg = document.getElementById("error-msg");

btn.addEventListener("click", function (e) {
    e.preventDefault();

    validateInput();
});

function validateInput() {
    const emailVal = email.value;
    const inputControl = email.parentElement;

    if (emailVal === "") {
        inputControl.classList.add("error");
        errorMsg.classList.remove("hidden");
        errorMsg.textContent = "Email field cannot be empty";
    } else if (!isValidEmail(emailVal)) {
        inputControl.classList.add("error");
        errorMsg.classList.remove("hidden");
        errorMsg.textContent = "Please provide a valid email address";
    } else {
        errorMsg.textContent = "";
        errorMsg.classList.add("hidden");
        inputControl.classList.remove("error");
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
