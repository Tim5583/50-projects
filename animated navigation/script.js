const toggole = document.getElementById("toggle");
const nav = document.getElementById("nav");
toggole.addEventListener("click", () => {
    nav.classList.toggle("active");
});