const soundsEl = document.querySelectorAll("audio");
const sounds = [...soundsEl].map(item => item.id);
const btsDiv = document.querySelector(".btns");

sounds.forEach(sound => {
    const buttonEl = document.createElement("button");
    buttonEl.classList.add("btn");
    buttonEl.innerText = sound;

    btsDiv.append(buttonEl);
});