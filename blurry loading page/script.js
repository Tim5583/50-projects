const container = document.querySelector(".container");
const loadingText = document.querySelector(".loading-text");

let load = 0;

let inter = setInterval(blurring, 30);

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(inter);
    }

    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    container.style.filter = `blur(${scale(load, 0, 100, 5, 0)}px)`;
}