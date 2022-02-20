const textEle = document.getElementById("text");
const btnEle = document.getElementById("speed");
const userInputForm = document.querySelector("form");
const userText = document.getElementById("textinput")
let insideText = textEle.innerText;
let speed = btnEle.value * 50;

let idx = 1;

autoType();

function autoType() {
    textEle.innerText = insideText.slice(0, idx);
    idx++;

    if (idx > insideText.length) {
        idx = 1
    }
    setTimeout(autoType, speed);
}

btnEle.addEventListener("input", (e) => {
    if (btnEle.value > 0 && btnEle.value < 11) {
        speed = e.target.value * 50;
    }
})

userInputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    insideText = e.target.firstElementChild.value.trim();
})