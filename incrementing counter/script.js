const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = +counter.getAttribute("data-target"); // `+` to convert String to numbers;
    const increment = target / 1000;

    const updateCounter = () => {
        const c = +counter.innerHTML;

        if (c < target) {
            counter.innerHTML = `${Math.ceil(c+increment)}`;
            setTimeout(updateCounter, 5);
            counter.style.color = '#999';
        } else {
            counter.innerHTML = target;
            counter.style.color = "#000";
        }
    };

    updateCounter();
});
