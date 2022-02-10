const labels = document.querySelectorAll("label");
const textEle = document.querySelectorAll("input");


labels.forEach(label => {
    label.innerHTML = label.innerHTML.split("")
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join("");
})

textEle.forEach((item) => {
    item.addEventListener("focus", (e) => {
        e.target.nextElementSibling.classList.add("wave");
    });

    item.addEventListener("focusout", (e) => {
        if (!e.target.value) {
            e.target.nextElementSibling.classList.remove("wave");
        }
    })
})
