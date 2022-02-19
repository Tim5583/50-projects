const donwBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");
const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");
const imagesLength = document.querySelectorAll(".left-slider div").length - 1;

leftSlider.style.transform = `translateY(-${imagesLength * 100}%)`;

let currentIndex = 0;

function transformImages() {
    leftSlider.style.transform = `translateY(-${(imagesLength - currentIndex) * 100}%)`;
    rightSlider.style.transform = `translateY(-${currentIndex * 100}%)`;
}

upBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex > imagesLength) {
        currentIndex = 0;
    }
    transformImages();
});

donwBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imagesLength;
    }
    transformImages();
});
