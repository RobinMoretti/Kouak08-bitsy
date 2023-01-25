import './sass/style.scss'
let games = [
    {
        title: "Oh, Dolor ! <br> Oh, Aflicción !",
        subtitle: "Sous-titre",
        cards: ["enquête", "des... a quel prix ?", "union"],
        path: "/src/Games/RM/____attendue_dans_le_centre_vill.html",
        coverPath: "/src/Games/MA/tvbp.jpg",
        note: "Lorsque les pucerons font leur entré dans les jardins, c'est les coccinelles qui prennent le relais.",
        author: "Robin Moretti",
    },
    {
        title: "Oh, Dolor ! <br> Oh, Aflicción !",
        subtitle: "Sous-titre",
        cards: ["enquête", "des... a quel prix ?", "union"],
        path: "/src/Games/RM/____attendue_dans_le_centre_vill.html2",
        coverPath: "/src/Games/MA/tvbp.jpg",
        note: "Lorsque les pucerons font leur entré dans les jardins, c'est les coccinelles qui prennent le relais.",
        author: "Robin Moretti",
    }
]

let gameContainer = document.getElementById("articles-container");
let divider = document.createElement("div");
divider.classList.add("divider");

for (let index = 0; index < games.length; index++) {
    const game = games[index];
    let gameTemplate = getGameHtml(game, index);

    gameContainer.appendChild(gameTemplate);
    if(index <= games.length -2) gameContainer.appendChild(divider);
}
console.log();

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

    let bitsyContainer = document.createElement("div");
    bitsyContainer.classList.add("bitsy-container");

    let iframeContainer = document.createElement("div");
    iframeContainer.classList.add("iframe-container");

    let cover = document.createElement("img");
    cover.setAttribute("src", game.coverPath);
    cover.classList.add("cover");
    bitsyContainer.appendChild(cover)

    let close = document.createElement("div");
    close.classList.add("close");
    close.innerHTML = "X";

    let iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.setAttribute("src", game.path);

    iframeContainer.appendChild(close)
    iframeContainer.appendChild(iframe)
    bitsyContainer.appendChild(iframeContainer)
    template.appendChild(bitsyContainer)
    
    let additionalNote = document.createElement("p");
    additionalNote.classList.add("additional");
    additionalNote.innerText = game.note;

    let author = document.createElement("p");
    author.classList.add("author");
    author.innerText = game.author;

    template.appendChild(additionalNote)
    template.appendChild(author)

    cover.addEventListener("click", () => {
        displayGame(iframe);
    })
    
    return template;
}

function displayGame(gameTarget) {
    console.log('element =', gameTarget) 
    if (gameTarget.classList.contains("active")) {
        
    } else {
        gameTarget.style.display = "initial";
        gameTarget.classList.contains("active")  
    }
}


// window.onload = function () {
    
//     // animated anchors
//     // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     //     anchor.addEventListener('click', function (e) {
//     //         e.preventDefault();
    
//     //         document.querySelector(this.getAttribute('href')).scrollIntoView({
//     //             behavior: 'smooth'
//     //         });
//     //     });
//     // });
// }