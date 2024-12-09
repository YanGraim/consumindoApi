let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
let listElement = document.querySelector("#app");
let posts = [];


function nutriApp() {
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        posts = json;

        posts.map((post) => {
            let liElement = document.createElement("li");
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descriptionElement = document.createElement("a");

            let titleText = document.createTextNode(post.titulo);
            titleElement.appendChild(titleText);
            liElement.appendChild(titleElement);

            imgElement.src = post.capa;
            liElement.appendChild(imgElement);

            let descriptionText = document.createTextNode(post.subtitulo);
            descriptionElement.appendChild(descriptionText);
            liElement.appendChild(descriptionElement);

            listElement.appendChild(liElement);
        })
    })
}

nutriApp();