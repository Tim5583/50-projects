const body = document.body;
const circleContainerEl = document.querySelector(".circle-container");

circleContainerEl.addEventListener("click", () => {
    body.classList.toggle("show-nav");
});