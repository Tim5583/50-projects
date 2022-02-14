const userlist = document.querySelector(".user-list");
const serach = document.getElementById("user-filter");
const listItems = [];

async function getData() {
    const res = await fetch("https://randomuser.me/api?results=50");

    const { results } = await res.json();
    userlist.innerHTML = null;

    results.forEach(user => {
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

        listItems.push(li);
        userlist.append(li);
    });
};

function filterData(search) {
    listItems.forEach(userItem => {
        if (userItem.innerText.toLowerCase().includes(search.toLowerCase())) {
            userItem.classList.remove("hide");
        } else {
            userItem.classList.add("hide");
        }
    });
}

getData();
serach.addEventListener("input", (e) => filterData(e.target.value));
