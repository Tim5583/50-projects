const hamburgerIconEl = document.querySelector(".openBtn");
const closeIconEl = document.querySelector(".closeBtn");
const navEl = document.querySelector("nav");

hamburgerIconEl.addEventListener("click", () => {
    navEl.classList.add("open");
});

closeIconEl.addEventListener("click", () => {
    navEl.classList.remove("open")
});