const containerEl = document.querySelector(".container");
const images = 28;

for (let i = 300; i < 300 + images; i++) {
    const imgEl = document.createElement("img");
    imgEl.src = `https://source.unsplash.com/random/${i}x${i}`;
    containerEl.append(imgEl);
}