const tagsEle = document.getElementById("tags");
const textareaEle = document.getElementById("text");

textareaEle.addEventListener("keyup", (e) => {
    createTags(e.target.value);

    if (e.key == "Enter") {
        setTimeout(() => {
            textareaEle.value = null;
        }, 10);
        randomChoice();
    }
});

function createTags(text) {
    const tags = text.split(",").filter(tag => tag.trim() != "").map(tag => tag.trim());

    tagsEle.innerHTML = null;

    tags.forEach(tag => {
        const spanEle = document.createElement("span");
        spanEle.classList.add("tag");
        spanEle.innerText = tag;
        tagsEle.append(spanEle);
    });
}

function randomChoice() {
    const tags = document.querySelectorAll(".tag");
    function selectRandomTag() {
        return tags[Math.floor(Math.random() * tags.length)];
    }

    let finishedTime = tags.length * 200;
    let selectedTag;

    function highlight() {
        selectedTag = selectRandomTag()
        selectedTag.classList.add("selected")
    }

    function unhighlight(tag) {
        tag.classList.remove("selected");
    }
    
    let highlighter = setInterval(() => {
        highlight();
        setTimeout(() => {
            unhighlight(selectedTag);
        }, 100)
    }, 200)

    setTimeout(() => {
        clearInterval(highlighter);
        setTimeout(() => {
            selectedTag.classList.add("selected");
        }, 20)
    }, finishedTime)
}
