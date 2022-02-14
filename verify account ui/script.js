const codes = document.querySelectorAll(".code");
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
            setTimeout(() => codes[idx + 1].focus(), 10);
        } else if (e.key === "Backspace") {
            if (codes[idx].value != "") {
                codes[idx].value = null;
            } else {
                codes[idx - 1].value = null;
                codes[idx - 1].focus();
            }
        } else {
            codes[idx].value = null;
        }

        if (idx == codes.length - 1) {
            setTimeout(() => codes[idx].blur(), 10);
        }
    });
});