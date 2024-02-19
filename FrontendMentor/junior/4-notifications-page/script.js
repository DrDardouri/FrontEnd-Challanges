"use-strict";

const markReadBtn = document.getElementById("mark-read-btn");

const notifications = document.querySelectorAll(".notification");
const notificationsNumber = document.querySelector(".notifications__number");
const notificationsList = [...notifications];

markReadBtn.addEventListener("click", function () {
    notificationsList.forEach((notification) => notification.classList.remove("new"));
    notificationsNumber.textContent = 0;
});
