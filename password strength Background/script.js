const password = document.getElementById("password");
const backgroundImage = document.getElementById("background");

password.addEventListener("keyup", (e) => {
    let passLength = e.target.value.length;
    backgroundImage.style.filter = `blur(${32 - passLength * 4}px)`   
})