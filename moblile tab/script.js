const listItems = document.querySelectorAll("li");
const contents = document.querySelectorAll(".content");

function removeShowClass() {
    contents.forEach(item => {
        item.classList.remove("show");
    })
}

function removeButtonHighlighter() {
    listItems.forEach(item  => {
        item.classList.remove("active");
    })
}

listItems.forEach(item => {
    item.addEventListener("click",(e) => {
        const clickedIcon = e.target.parentElement;
        const imageId = clickedIcon.getAttribute("data-target");
        if (imageId) {
            removeShowClass();
            removeButtonHighlighter();
        }
        clickedIcon.classList.add("active");
        document.getElementById(imageId).classList.add("show");
    });
});
