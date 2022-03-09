const quizData = [
    {
        question: "Which language runs in web browser?",
        a : "Jave",
        b : "C",
        c : "Python",
        d : "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a : "Central Style Sheets",
        b : "Cascading style sheets",
        c : "Cascadomg Simple Sheets",
        d : "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a : "Hypertext Markup Language",
        b : "Hypertext Markdown Language",
        c : "Hyperloop Machine Language",
        d : "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    }
]

const questionEl = document.getElementById("question");
const answer_a = document.getElementById("label-a");
const answer_b = document.getElementById("label-b");
const answer_c = document.getElementById("label-c");
const answer_d = document.getElementById("label-d");
const submitBtn = document.getElementById("submit");
const cardEl = document.querySelector(".question-header");
const questionsEl = document.querySelectorAll("input");

let currentQuestion = 0;
let correctAnswers = 0;

function displayQuestion(index) {
    const questionObject = quizData[index];
    questionEl.innerHTML = questionObject.question;
    answer_a.innerHTML = questionObject.a;
    answer_b.innerHTML = questionObject.b;
    answer_c.innerHTML = questionObject.c;
    answer_d.innerHTML = questionObject.d;
}

displayQuestion(currentQuestion);

submitBtn.addEventListener("click", () => {
    let answer;
    questionsEl.forEach(item => {
        if (item.checked) {
            answer = item.id;
            if (answer === quizData[currentQuestion].correct) {
                correctAnswers++;
            }
            currentQuestion++;
        }

        if (currentQuestion < quizData.length) {
            displayQuestion(currentQuestion);
        } else {
            cardEl.innerHTML = `
                Your Score ->> ${correctAnswers} / ${quizData.length}
            `;
            cardEl.classList.add("score");
            submitBtn.remove();
            setTimeout(() => {
                window.location.reload()
            }, 1500);
        }
    });
    questionsEl.forEach(item => item.checked = false)
});
