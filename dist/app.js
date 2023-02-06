function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import '/node_modules/destyle.css/destyle.min.css';\n@font-face {\n  font-family: \"Unbounded\";\n  src: url(\"/src/font/Unbounded-VariableFont_wght.ttf\") format(\"truetype\");\n  font-display: swap;\n}\nhtml {\n  font-family: \"Unbounded\", sans-serif;\n  color: #1F0318;\n  font-size: 17px;\n  line-height: 1.35rem;\n}\n\n* {\n  -webkit-font-smoothing: antialiased;\n}\n\na {\n  text-decoration: none;\n  border-bottom: dotted 3px #1F0318;\n  font-weight: bold;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.italic {\n  font-style: italic;\n}\n\nbody {\n  padding: 30px 20px;\n  background-color: #F2FAF0;\n  max-width: 400px;\n  margin: auto;\n}\n\n@media (min-width: 800px) {\n  body {\n    width: 500px;\n    margin: auto;\n    padding: 30px 45px;\n    border-left: dotted 5px #1F0318;\n    border-right: dotted 5px #1F0318;\n  }\n}\nhtml {\n  background-size: 20px 20px;\n}\n\nheader h1 {\n  font-size: 2rem;\n  font-weight: 900;\n  margin-bottom: 5px;\n}\nheader h2 {\n  font-size: 1.5rem;\n  font-weight: 450;\n  margin-top: 1rem;\n  line-height: 1.7rem;\n}\n\n#introduction, footer {\n  margin: 1.7rem 0;\n}\n#introduction br, footer br {\n  display: block;\n  margin: 10px 0;\n}\n#introduction .divider, footer .divider {\n  text-align: center;\n}\n#introduction .text, footer .text {\n  margin: 1rem 0;\n}\n\n@media (min-width: 800px) {\n  #introduction, footer {\n    margin: 1.8rem 0;\n  }\n}\n#articles-container .game:hover {\n  cursor: pointer;\n}\n#articles-container .game h2 {\n  font-size: 1.2rem;\n  font-weight: bolder;\n  text-transform: uppercase;\n}\n#articles-container .game h3 {\n  margin-top: 0.2rem;\n  font-size: 1rem;\n}\n#articles-container .game .cards {\n  margin-top: 0.4rem;\n  font-size: 0.8rem;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n#articles-container .game img {\n  max-width: 100%;\n}\n#articles-container .game .cover {\n  margin: 1.5rem 0;\n  -webkit-box-shadow: 5px 5px 31px 0px rgba(0, 0, 0, 0.44);\n  box-shadow: 5px 5px 31px 0px rgba(0, 0, 0, 0.44);\n  transform: scale(0.98);\n  transition: 0.2s transform;\n}\n#articles-container .game .cover:hover {\n  transform: scale(1);\n}\n#articles-container .game .additional {\n  margin-top: 0.5rem;\n  font-size: 0.8rem;\n  line-height: 0.9rem;\n}\n#articles-container .game .author {\n  margin-top: 1rem;\n  text-align: right;\n}\n#articles-container .divider {\n  border-bottom: dotted 5px black;\n  margin: 3rem 0;\n}\n\n@media (min-width: 800px) {\n  #articles-container .game {\n    margin-bottom: 2rem;\n  }\n  #articles-container .game .cards {\n    font-size: 0.9rem;\n  }\n  #articles-container .game .additional {\n    font-size: 0.9rem;\n    line-height: 1.2rem;\n  }\n}\n.game-modal {\n  position: fixed;\n  height: 0;\n  transition: all 0.3s;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n  left: 0vw;\n  top: 0vh;\n  pointer-events: none;\n  opacity: 0;\n  z-index: 10;\n}\n.game-modal .close {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 4;\n  position: relative;\n  font-weight: bolder;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.game-modal .close.visible {\n  opacity: 1;\n}\n.game-modal iframe {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.game-modal iframe.visible {\n  opacity: 1;\n}\n.game-modal .backgroung {\n  position: absolute;\n  left: 0%;\n  top: 0%;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n.game-modal .backgroung svg {\n  transition: transform 2s;\n  transform: scale(0.1);\n}\n\n.game-modal.active {\n  pointer-events: unset;\n  opacity: 1;\n}\n.game-modal.active svg {\n  transform: scale(5);\n}\n\n@media (min-width: 800px) {\n  .game-modal iframe {\n    height: 80vh;\n    margin-top: 10vh;\n  }\n}\n.mobile-message {\n  display: none;\n}\n\n@media (min-width: 800px) {\n  .mobile-message {\n    display: unset;\n    position: fixed;\n    left: 30px;\n    bottom: 30px;\n    background-color: #1F0318;\n    color: #F2FAF0;\n    padding: 10px 20px;\n    border-radius: 30px;\n    max-width: calc((100vw - 500px) / 2);\n    text-align: center;\n  }\n}\n.align-right {\n  text-align: right;\n}\n\n.align-left {\n  text-align: left;\n}";
styleInject(css_248z);

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
        coverPath: "/src/Games/MA/tvbp.jpg",
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
        coverPath: "/src/Games/MA/tvbp.jpg",
        note: "10 ans après la mort de votre mère et la disparition de votre père, un rendez-vous dans un laboratoire voisin vas éclaircir vos doutes et vous replonger dans dans vos souvenirs les plus pofonds.",
        backgroundColor: "#070aff",
        darkColor: "#ff20ce",
        author: "Yoan Schmitt",
    },
    {
        title: "Ils rêvent de l'après.",
        subtitle: null,
        cards: ["avis de décès", "... rêve de l'après...", "espionnage"],
        path: "/src/Games/YS/______________memozone__________.html",
        coverPath: "/src/Games/MA/tvbp.jpg",
        note: "Tiré d’une histoire vraie, cette enquête où on incarne un inspecteur reconstitue l’histoire de deux personnes qui ont subit une tentative d’assassinat. Il faut chercher les indices pour trouver le dénouement de l’enquête avant d’arriver à la fin du jeu et comprendre comment l’enquête aboutit de cette façon. Jeu narratif, il n’y a pas besoin de faire de choix pour arriver au bout de l’histoire si ce n’est retrouver des objets et indices essantiels pour déverrouiller des passages.",
        backgroundColor: "#212938",
        darkColor: "#af7c7c",
        author: "Céline Rabineau",
    },
    {
        title: "The lockdown a certain idea of hell?",
        subtitle: null,
        cards: ["chronique", "...une certaine idée du...", "communisme"],
        path: "/src/Games/YS/______________memozone__________.html",
        coverPath: "/src/Games/MA/tvbp.jpg",
        note: "Petit jeu sur la Chine et la surveillance de ses citoyens pendant le confinement avec l'introduction des crédits sociaux, de mon point de vue Européen blanc.",
        backgroundColor: "#546494",
        darkColor: "#0c103b",
        author: "Carla Mazzuca",
    },
    {
        title: "HyperRadical, un jeu d'extrospection",
        subtitle: null,
        cards: ["interview", "un jeu d'...", "radicalité"],
        path: "/src/Games/YS/______________memozone__________.html",
        coverPath: "/src/Games/MA/tvbp.jpg",
        note: "L'accumulation de résolutions peut parfois amener à une certaine forme de stress... Alors comment allez-vous gérer le vôtre ? Basé sur l'interview d'une vingtaine de personnes, ce jeu vous propose de vivre un huit clos à la quête de votre mémoire. Parcourez les pièces à la recherche de vos notes, débusquer les différentes clés cachées afin de découvrir l'étendue de votre maison.",
        backgroundColor: "#1c315e",
        darkColor: "#985c5d",
        author: "Scott Mauger",
    },
    {
        title: "10 Bonne raisons de ...",
        subtitle: "Édition spécial artisanat",
        cards: ["artisanat", "10 Bonne raisons de ...", "BD"],
        path: "/src/Games/YS/______________memozone__________.html",
        coverPath: "/src/Games/MA/tvbp.jpg",
        note: "Interview de deux différents artisans (une reliause et un pâtissier), Remerciement à Stéphanie Trèsmois et Raphael Gautier pour avoir répondu à mes questions.",
        backgroundColor: "#ffffff",
        darkColor: "#000000",
        author: "Oxana Boureau",
    },

];

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
});

let timeout;

function displayGame(game) {
    document.body.style.overflow = "hidden";
    svgBackground.style.fill = game.backgroundColor;
    svgBackground.style.stroke = game.backgroundColor;
    closeButton.style.color = game.darkColor;

    clearTimeout(timeout);
    iframe.setAttribute("src", game.path);

    setTimeout(() => {
        closeButton.classList.add("visible");
        iframe.classList.add("visible");
        iframe.focus();
    }, 500);

    modalGame.classList.add("active");
}

function hideGame() {
    document.body.style.overflow = "unset";
    modalGame.classList.remove("active");
    iframe.classList.remove("visible");
    timeout = setTimeout(() => {
        iframe.setAttribute("src", "");
    }, 1000);
}

function getGameHtml(game, index) {
    let template = document.createElement("article");
    template.classList.add("game");
    template.setAttribute("id", "game-" + index);

    let header = document.createElement("h2");
    header.innerHTML = game.title;

    let subtitile = document.createElement("h3");
    subtitile.innerHTML = game.subtitle;

    let cardsContainer = document.createElement("ul");
    cardsContainer.classList.add("cards");

    for (let i = 0; i < 3; i++) {
        let card = document.createElement("li");
        card.classList.add('card');
        if (i == 0) card.innerText = "🃑 ";
        else if (i == 1) card.innerText = "🃒 ";
        else if (i == 2) card.innerText = "🃓 ";

        card.innerText += game.cards[i];    
        cardsContainer.appendChild(card);
    }

    template.appendChild(header);
    template.appendChild(subtitile);

    let cover = document.createElement("img");
    cover.setAttribute("src", game.coverPath);
    cover.classList.add("cover");
    template.appendChild(cover);
    template.appendChild(cardsContainer);
    
    let additionalNote = document.createElement("p");
    additionalNote.classList.add("additional");
    additionalNote.innerText = game.note;

    let author = document.createElement("p");
    author.classList.add("author");
    author.innerText = game.author;

    template.appendChild(additionalNote);
    template.appendChild(author);

    cover.addEventListener("click", () => {
        displayGame(game);
    });

    return template;
}



// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
