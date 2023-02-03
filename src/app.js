import './sass/style.scss'

let games = [
    {
        title: "Oh, Dolor ! <br> Oh, Aflicción !",
        subtitle: "Sous-titre",
        cards: ["enquête", "des... a quel prix ?", "union"],
        path: "/src/Games/RM/____attendue_dans_le_centre_vill.html",
        coverPath: "/src/Games/MA/tvbp.jpg",
        note: "Lorsque les pucerons font leur entré dans les jardins, c'est les coccinelles qui prennent le relais.",
        backgroundColor: "#E0FEF2",
        darkColor: "rgb(91, 90, 96)",
        author: "Robin Moretti",
    },
    {
        title: "Oh, Dolor ! <br> Oh, Aflicción !",
        subtitle: "Sous-titre",
        cards: ["enquête", "des... a quel prix ?", "union"],
        path: "/src/Games/RM/____attendue_dans_le_centre_vill.html2",
        coverPath: "/src/Games/MA/tvbp.jpg",
        note: "Lorsque les pucerons font leur entré dans les jardins, c'est les coccinelles qui prennent le relais.",
        backgroundColor: "#E0FEF2",
        darkColor: "rgb(91, 90, 96)",
        author: "Robin Moretti",
    }
]

let gameContainer = document.getElementById("articles-container");
let divider = document.createElement("div");
divider.classList.add("divider");

// generate game and inject it in html
for (let index = 0; index < games.length; index++) {
    const game = games[index];
    let gameTemplate = getGameHtml(game, index);

    gameContainer.appendChild(gameTemplate);
    if(index <= games.length -2) gameContainer.appendChild(divider);
}

// set game modal functions
let modalGame = document.querySelector(".game-modal");
let svgBackground = modalGame.querySelector("svg path");
let closeButton = modalGame.querySelector(".close");
let iframe = modalGame.querySelector("iframe");
document.querySelector(".close").addEventListener("click", () => {
    hideGame();
})

let timeout;

function displayGame(game) {
    document.body.style.overflow = "hidden";
    svgBackground.style.fill = game.backgroundColor;
    closeButton.style.color = game.darkColor;

    clearTimeout(timeout)
    iframe.setAttribute("src", game.path);

    setTimeout(() => {
        closeButton.classList.add("visible")
        iframe.classList.add("visible")
        iframe.focus()
    }, 500);

    modalGame.classList.add("active");
}

function hideGame() {
    document.body.style.overflow = "unset";
    modalGame.classList.remove("active");
    iframe.classList.remove("visible")
    timeout = setTimeout(() => {
        iframe.setAttribute("src", "");
    }, 1000)
}

function getGameHtml(game, index) {
    let template = document.createElement("article");
    template.classList.add("game");
    template.setAttribute("id", "game-" + index)

    let header = document.createElement("h2");
    header.innerHTML = game.title;

    let subtitile = document.createElement("h3");
    subtitile.innerHTML = game.subtitle;

    let cardsContainer = document.createElement("ul");
    cardsContainer.classList.add("cards");

    for (let i = 0; i < 3; i++) {
        let card = document.createElement("li");
        card.classList.add('card');
        if (i == 0) card.innerText = "🃑 "
        else if (i == 1) card.innerText = "🃒 "
        else if (i == 2) card.innerText = "🃓 "

        card.innerText += game.cards[i];    
        cardsContainer.appendChild(card);
    }

    template.appendChild(header)
    template.appendChild(subtitile)
    template.appendChild(cardsContainer)

    let cover = document.createElement("img");
    cover.setAttribute("src", game.coverPath);
    cover.classList.add("cover");
    template.appendChild(cover)
    
    let additionalNote = document.createElement("p");
    additionalNote.classList.add("additional");
    additionalNote.innerText = game.note;

    let author = document.createElement("p");
    author.classList.add("author");
    author.innerText = game.author;

    template.appendChild(additionalNote)
    template.appendChild(author)

    cover.addEventListener("click", () => {
        displayGame(game);
    })

    return template;
}



// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
  