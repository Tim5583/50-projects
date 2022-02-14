const jokeEl = document.getElementById("joke");
const btnEl = document.getElementById("nextJoke");

// using .then
function getJoke() {
    const config = {
        headers: {
            'Accept': "application/json"
        }
    }

    fetch("https://icanhazdadjoke.com", config)
    .then(res => res.json())
    .then(data => {
        jokeEl.innerHTML = data.joke;
    })
    .catch(err => {
        jokeEl.innerHTML = `Something Went Wrong!<br>Try Agnin Later!!`
    })
}

// using async/await 
async function getJokeAnotherWay() {
    const config = {
        headers: {
            'Accept': "application/json"
        }
    }; 

    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
}

getJokeAnotherWay();

btnEl.addEventListener("click", getJoke);