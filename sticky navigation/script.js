const navEl = document.querySelector(".nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > navEl.offsetHeight + 60) {
        navEl.classList.add("small");
    } else {
        navEl.classList.remove("small");
    }
});