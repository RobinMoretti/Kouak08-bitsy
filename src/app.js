import './sass/style.scss'

let games = [
    {
        title: "Oh, Dolor ! <br> Oh, Aflicción !",
        subtitle: null,
        cards: ["enquête", "des... a quel prix ?", "union"],
        path: "/src/Games/MA/index.html",
        coverPath: "/src/Games/MA/tvbp.jpg",
        note: null,
        backgroundColor: "#E0FEF2",
        darkColor: "rgb(91, 90, 96)",
        author: "Matis Arvieu",
    },
    {
        title: "Les coccinelles n'en jamais  assez",
        subtitle: null,
        cards: ["critique", "...n'en font pas assez", "la mort"],
        path: "/src/Games/LM/____les_coccinelles_n_en_font_ja.html",
        coverPath: "/src/Games/LM/recording.gif",
        note: "Lorsque les pucerons font leur entré dans les jardins, c'est les coccinelles qui prennent le relais.",
        backgroundColor: "#dae0ff",
        darkColor: "#76c7a6",
        author: "Lola Mevellec",
    },
    {
        title: "Mémozone",
        subtitle: "La délivrance et la polémique",
        cards: ["banque", "la délivrance et la polémique", "france"],
        path: "/src/Games/YS/______________memozone__________.html",
        coverPath: "/src/Games/YS/unnamed copie.gif",
        note: "10 ans après la mort de votre mère et la disparition de votre père, un rendez-vous dans un laboratoire voisin vas éclaircir vos doutes et vous replonger dans dans vos souvenirs les plus pofonds.",
        backgroundColor: "#070aff",
        darkColor: "#ff20ce",
        author: "Yoan Schmitt",
    },
    {
        title: "Ils rêvent de l'après.",
        subtitle: null,
        cards: ["avis de décès", "... rêve de l'après...", "espionnage"],
        path: "/src/Games/CR/index.html",
        coverPath: "/src/Games/CR/recording (8).GIF",
        note: "Tiré d’une histoire vraie, cette enquête où on incarne un inspecteur reconstitue l’histoire de deux personnes qui ont subit une tentative d’assassinat. Il faut chercher les indices pour trouver le dénouement de l’enquête avant d’arriver à la fin du jeu et comprendre comment l’enquête aboutit de cette façon. Jeu narratif, il n’y a pas besoin de faire de choix pour arriver au bout de l’histoire si ce n’est retrouver des objets et indices essantiels pour déverrouiller des passages.",
        backgroundColor: "#212938",
        darkColor: "#af7c7c",
        author: "Céline Rabineau",
    },
    {
        title: "The lockdown a certain idea of hell?",
        subtitle: null,
        cards: ["chronique", "...une certaine idée du...", "communisme"],
        path: "/src/Games/CM/the_lockdown_a_certain_idea_of_hell.html",
        coverPath: "/src/Games/CM/recording.gif",
        note: "Petit jeu sur la Chine et la surveillance de ses citoyens pendant le confinement avec l'introduction des crédits sociaux, de mon point de vue Européen blanc.",
        backgroundColor: "#546494",
        darkColor: "#0c103b",
        author: "Carla Mazzuca",
    },
    {
        title: "HyperRadical, un jeu d'extrospection",
        subtitle: null,
        cards: ["interview", "un jeu d'...", "radicalité"],
        path: "/src/Games/SM/HyperRadical FinalV.html",
        coverPath: "/src/Games/SM/IMG_0135.GIF",
        note: "L'accumulation de résolutions peut parfois amener à une certaine forme de stress... Alors comment allez-vous gérer le vôtre ? Basé sur l'interview d'une vingtaine de personnes, ce jeu vous propose de vivre un huit clos à la quête de votre mémoire. Parcourez les pièces à la recherche de vos notes, débusquer les différentes clés cachées afin de découvrir l'étendue de votre maison.",
        backgroundColor: "#1c315e",
        darkColor: "#985c5d",
        author: "Scott Mauger",
    },
    {
        title: "10 Bonne raisons de ...",
        subtitle: "Édition spécial artisanat",
        cards: ["artisanat", "10 Bonne raisons de ...", "BD"],
        path: "/src/Games/BO/10_Bonne_raisons_de.html",
        coverPath: "/src/Games/BO/Cover_10_Bonnes_raisons_de_.png",
        note: "Interview de deux différents artisans (une reliause et un pâtissier), Remerciement à Stéphanie Trèsmois et Raphael Gautier pour avoir répondu à mes questions.",
        backgroundColor: "#ffffff",
        darkColor: "#000000",
        author: "Oxana Boureau",
    },
    {
        title: "Eliean",
        subtitle: "",
        cards: ["grand format", "null", "météo"],
        path: "/src/Games/SR/eliean__exit__y________fade_w__.html",
        coverPath: "/src/Games/SR/SR-preview.gif",
        note: "",
        backgroundColor: "#14223b",
        darkColor: "#4968ae",
        author: "Suzie Roux",
    },
    
]

games = games.sort((a, b) => 0.5 - Math.random());

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
    svgBackground.style.stroke = game.backgroundColor;
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

    let cover = document.createElement("img");
    cover.setAttribute("src", game.coverPath);
    cover.classList.add("cover");
    template.appendChild(cover)
    template.appendChild(cardsContainer)
    
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
  