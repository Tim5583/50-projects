const panel = document.querySelector(".panel-container");
const card = document.querySelector("#panel");
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
let  userRating = "Satisfied";

panel.addEventListener("click", (e) => {
    if (e.target.classList.contains("img")) {
        removeActiveClass();
        e.target.parentNode.classList.add("active");
        userRating = e.target.nextElementSibling.innerHTML;
    }
});

function removeActiveClass() {
    ratings.forEach((rating) => {
        rating.classList.remove("active");
    });
}

sendBtn.addEventListener("click", () => {
    card.innerHTML = `
        <i class="fas fa-heart"></i>
        <p>Thank You</p>
        <br>
        <p>Feedback: ${userRating}</p>
        <p>We'll use your feedback to improve our customer support</p>
    `;
})