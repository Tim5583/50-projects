const imageContaienr = document.querySelector(".image-container");
const nextBtn = document.querySelector("#right");
const prevBtn = document.querySelector("#left");
const images = document.querySelectorAll("img");

const limit = (images.length - 1) * -500;
let position = 0;
let autoUpdateImages = setInterval(nextImage, 2000);


function resetTimer() {
    clearInterval(autoUpdateImages);
    autoUpdateImages = setInterval(nextImage, 2000);
}


function updateTranslate(position) {
    imageContaienr.style.transform = `translateX(${position}px)`;
}


function nextImage() {
    if (position > limit && position > limit) {
        position -= 500;
    } else {
        position = 0;
    }
    updateTranslate(position);
};


function prevImage() {
    if (position >= limit && position < 0) {
        position += 500;
    } else {
        position = limit;
    }
    updateTranslate(position);
}


updateTranslate(position);
nextBtn.addEventListener("click", () => {
    nextImage();
    resetTimer();
});
prevBtn.addEventListener("click", () => {
    prevImage();
    resetTimer();
});
