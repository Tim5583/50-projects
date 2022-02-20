const animateTextEle = document.getElementById("text");
const speedControlBtn = document.getElementById("speed");
const userInputForm = document.querySelector("form");
let animateText = animateTextEle.innerText;
let animateSpeed = speedControlBtn.value * 50;
let forword = true
let idx = 1;


function autoType() {
    animateTextEle.innerText = animateText.slice(0, idx);

    (forword) ? idx++ : idx--;
    if (idx > animateText.length && forword) {forword = false;}
    if (idx <= 0 && !forword) {forword = true;}

    setTimeout(autoType, animateSpeed);
}


speedControlBtn.addEventListener("input", (e) => {
    if (speedControlBtn.value > 0 && speedControlBtn.value < 11) {
        animateSpeed = e.target.value * 50;
    }
})


userInputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    animateText = e.target.firstElementChild.value.trim();
    idx = 1;
})


autoType();
