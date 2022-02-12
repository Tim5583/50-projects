const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggles.forEach(toggle => toggle.addEventListener("change", (e) => theLogic(e.target)));

function theLogic(triggerElement) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === triggerElement) {
            fast.checked = false;
        }

        if (cheap === triggerElement) {
            good.checked = false;
        }

        if (fast === triggerElement) {
            cheap.checked = false;
        }
    }
}