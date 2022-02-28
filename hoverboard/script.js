const container = document.getElementById("container");
const squares = 500;

for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.append(square); 
}

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

function setColor(element) {
    let randomColor = getRandomColor()
    element.style.backgroundColor = randomColor;
    element.style.boxShadow = `0px 0px 4px ${randomColor},0px 0px 10px ${randomColor}`;
}

function removeColor(element) {
    element.style.backgroundColor = null;
    element.style.boxShadow = null;
}