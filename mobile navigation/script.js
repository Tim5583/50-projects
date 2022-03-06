const hamburgerIconEl = document.querySelector(".openBtn");
const closeIconEl = document.querySelector(".closeBtn");
const navEls = document.querySelectorAll(".nav");

hamburgerIconEl.addEventListener("click", () => {
    navEls.forEach(item => item.classList.add("active"));
});

closeIconEl.addEventListener("click", () => {
    navEls.forEach(item => item.classList.remove("active"));
});
