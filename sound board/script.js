const soundsEl = document.querySelectorAll("audio");
const sounds = [...soundsEl].map(item => item.id);
const btsDiv = document.querySelector(".btns");

function stopPlayingSound() {
    sounds.forEach(audio => {
        const playingSound = document.getElementById(audio);
        playingSound.pause();
        playingSound.currentTime = 0;
    })
}

sounds.forEach(sound => {
    const buttonEl = document.createElement("button");
    buttonEl.classList.add("btn");
    buttonEl.innerText = sound;
    buttonEl.addEventListener("click", () => {
        stopPlayingSound();
        document.getElementById(sound).play();
    })

    btsDiv.append(buttonEl);
});
