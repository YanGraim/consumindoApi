let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
let listElement = document.querySelector("#app");
let posts = [];


function nutriApp() {
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        posts = json;

        console.log(posts);
    })
}

nutriApp();