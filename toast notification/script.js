const toasts = document.querySelector(".toasts");
const btn = document.querySelector(".btn");

let newNotification = "You have new notification";

function displayNotification() {
    const div = document.createElement("div");
    div.classList.add("toast");
    div.innerHTML = `${newNotification} <br><small><a href="#">Learn More</a></small>`;
    toasts.append(div);

    setTimeout(() => {
        div.remove();
    }, 5000);
}

btn.addEventListener("click", displayNotification);
