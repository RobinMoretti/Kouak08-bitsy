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

var css_248z = "@import '/node_modules/destyle.css/destyle.min.css';\n@font-face {\n  font-family: \"Unbounded\";\n  src: url(\"/src/font/Unbounded-VariableFont_wght.ttf\") format(\"truetype\");\n  font-display: swap;\n}\nhtml {\n  font-family: \"Unbounded\", sans-serif;\n  color: #1F0318;\n  font-size: 17px;\n  line-height: 1.35rem;\n}\n\n* {\n  -webkit-font-smoothing: antialiased;\n}\n\na {\n  text-decoration: none;\n  border-bottom: dotted 3px #1F0318;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.italic {\n  font-style: italic;\n}\n\nbody {\n  padding: 30px 20px;\n  background-color: #F2FAF0;\n}\n\nheader h1 {\n  font-size: 2rem;\n  font-weight: 900;\n  margin-bottom: 5px;\n}\nheader h2 {\n  font-size: 1.5rem;\n  font-weight: 450;\n  margin-top: 1rem;\n  line-height: 1.7rem;\n}\n\n#introduction {\n  margin: 1.7rem 0;\n}\n#introduction .divider {\n  text-align: center;\n}\n#introduction .text {\n  margin: 1rem 0;\n  text-align: justify;\n}\n\n#articles-container .game:hover {\n  cursor: pointer;\n}\n#articles-container .game h2 {\n  font-size: 1.2rem;\n  font-weight: bolder;\n  text-transform: uppercase;\n}\n#articles-container .game h3 {\n  margin-top: 0.2rem;\n  font-size: 1rem;\n}\n#articles-container .game .cards {\n  margin-top: 0.4rem;\n  font-size: 0.8rem;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n#articles-container .game img {\n  max-width: 100%;\n}\n#articles-container .game .cover {\n  margin: 1.5rem 0;\n  -webkit-box-shadow: 5px 5px 31px 0px rgba(0, 0, 0, 0.44);\n  box-shadow: 5px 5px 31px 0px rgba(0, 0, 0, 0.44);\n  transform: scale(0.98);\n  transition: 0.2s transform;\n}\n#articles-container .game .cover:hover {\n  transform: scale(1);\n}\n#articles-container .game .additional {\n  margin-top: 0.5rem;\n  font-size: 0.8rem;\n  line-height: 0.9rem;\n}\n#articles-container .game .author {\n  margin-top: 1rem;\n  text-align: right;\n}\n#articles-container .divider {\n  border-bottom: dotted 5px black;\n  margin: 3rem 0;\n}\n\n.game-modal {\n  position: fixed;\n  height: 0;\n  transition: all 0.3s;\n  overflow: hidden;\n  left: 50vw;\n  top: 50vh;\n  width: 0vw;\n  height: 0vh;\n}\n.game-modal .close {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 4;\n  position: relative;\n  font-weight: bolder;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.game-modal .close.visible {\n  opacity: 1;\n}\n.game-modal iframe {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.game-modal iframe.visible {\n  opacity: 1;\n}\n.game-modal .backgroung {\n  position: absolute;\n  left: 0%;\n  top: 0%;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n.game-modal .backgroung svg {\n  transition: transform 1s;\n  transform: scale(0.1);\n}\n\n.game-modal.active {\n  width: 100vw;\n  height: 100vh;\n  left: 0vw;\n  top: 0vh;\n}\n.game-modal.active svg {\n  transform: scale(5);\n}\n\n.align-right {\n  text-align: right;\n}\n\n.align-left {\n  text-align: left;\n}";
styleInject(css_248z);

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
];

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
    template.appendChild(cardsContainer);

    let cover = document.createElement("img");
    cover.setAttribute("src", game.coverPath);
    cover.classList.add("cover");
    template.appendChild(cover);
    
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
