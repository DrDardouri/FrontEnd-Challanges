//using selectors inside the element

// traversing the dom
const questionBtns = document.querySelectorAll(".question-title");
const questions = document.querySelectorAll(".question");

questionBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const currentQuestion = e.currentTarget.parentElement;
        questions.forEach((question) => {
            if (question !== currentQuestion) {
                question.classList.remove("show-answer");
            }
        });

        currentQuestion.classList.toggle("show-answer");
    });
});
