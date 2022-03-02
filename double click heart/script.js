const image = document.querySelector(".image");
const likes = document.getElementById("likescount");

// image.addEventListener("dblclick", () => {
    // insted you can use this as double click event listener if you want
// })

let clicktime = 0;
let likesCount = +likes.innerText;

function giveheart() {
    const hearticon = document.createElement("i");
    hearticon.classList.add("fas");
    hearticon.classList.add("fa-heart");
    image.append(hearticon);
    setTimeout(() => {
        hearticon.remove();
    }, 1000)
    // likesCount++; or this 
    likes.innerText = ++likesCount;
}

image.addEventListener("click", () => {
    if (clicktime === 0) {
        clicktime = new Date().getTime();
    } else if (new Date().getTime() - clicktime < 900) {
        giveheart();
        clicktime = 0;
    } else {
        clicktime = new Date().getTime();
    }
})