const spans = document.querySelectorAll(".numbers-div span");
const counterEle = document.querySelector(".counter");
const mainEle = document.querySelector(".main");
const replayBtn = document.querySelector(".btn");

spans.forEach(spanEl => {
    spanEl.addEventListener("animationend", e => {
        if (e.target.innerText !== "0") {
            e.target.classList.remove("in");
            e.target.classList.add("out");

            if (e.animationName === "numOut" && e.target.nextElementSibling) {
                e.target.nextElementSibling.classList.add("in")
            }
        } else {
            counterEle.classList.add("hide");
            mainEle.classList.add("show");
        }
    })
})

replayBtn.addEventListener("click", () => {
    window.location.reload();
})