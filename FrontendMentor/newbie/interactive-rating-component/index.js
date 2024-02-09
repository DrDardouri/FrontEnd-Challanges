const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".card__btn");
const container = document.querySelector(".container");

let ratingVal = 0;

ratings.forEach((rating) => {
    rating.addEventListener("click", function () {
        ratingVal = rating.innerHTML;
        console.log(ratingVal);
    });
});

btn.addEventListener("click", renderResult);

function renderResult() {
    let html = `
    <div class="card card-after">
    <img src="images/illustration-thank-you.svg" alt="" />
    <p class="card-after--msg">
        You selected ${ratingVal} out of 5
    </p>
    <p class="card__title">Thank you!</p>
    <p class="card__body">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
`;
    container.innerHTML = html;
}
