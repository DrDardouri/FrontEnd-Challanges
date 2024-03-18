// JS code for a Time Tracking Dashboard app

"use-strict";
// Element Selection
const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const currentDisplays = document.querySelectorAll(".dashboard-data__current");
const previousDisplays = document.querySelectorAll(".dashboard-data__previous");

// App Initialization
fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((item, index) => {
            currentDisplays[index].textContent = `${item.timeframes.weekly.current}hrs`;
            previousDisplays[index].textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;
        });
    });

// Listining for clicks :)
dailyBtn.addEventListener("click", function () {
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((item, index) => {
                currentDisplays[index].textContent = `${item.timeframes.daily.current}hrs`;
                previousDisplays[index].textContent = `Yesterday - ${item.timeframes.daily.previous}hrs`;
            });
        });
});

weeklyBtn.addEventListener("click", function () {
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((item, index) => {
                currentDisplays[index].textContent = `${item.timeframes.weekly.current}hrs`;
                previousDisplays[index].textContent = `Last week - ${item.timeframes.weekly.previous}hrs`;
            });
        });
});

monthlyBtn.addEventListener("click", function () {
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((item, index) => {
                currentDisplays[index].textContent = `${item.timeframes.monthly.current}hrs`;
                previousDisplays[index].textContent = `Last month - ${item.timeframes.monthly.previous}hrs`;
            });
        });
});
