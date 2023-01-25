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

var css_248z = "@import '/node_modules/destyle.css/destyle.min.css';\n@font-face {\n  font-family: \"Unbounded\";\n  src: url(\"/src/font/Unbounded-VariableFont_wght.ttf\") format(\"truetype\");\n  font-display: swap;\n}\nhtml {\n  font-family: \"Unbounded\", sans-serif;\n  color: #1F0318;\n  font-size: 17px;\n  line-height: 1.35rem;\n}\n\n* {\n  -webkit-font-smoothing: antialiased;\n}\n\na {\n  text-decoration: none;\n  border-bottom: dotted 3px #1F0318;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.italic {\n  font-style: italic;\n}\n\nbody {\n  padding: 30px 20px;\n  background-color: #F2FAF0;\n}\n\nheader h1 {\n  font-size: 2rem;\n  font-weight: 900;\n  margin-bottom: 5px;\n}\nheader h2 {\n  font-size: 1.5rem;\n  font-weight: 450;\n  margin-top: 1rem;\n  line-height: 1.7rem;\n}\n\n#introduction {\n  margin: 1.7rem 0;\n}\n#introduction .divider {\n  text-align: center;\n}\n#introduction .text {\n  margin: 1rem 0;\n  text-align: justify;\n}\n\n#articles-container .game:hover {\n  cursor: pointer;\n}\n#articles-container .game h2 {\n  font-size: 1.2rem;\n  font-weight: bolder;\n  text-transform: uppercase;\n}\n#articles-container .game h3 {\n  margin-top: 0.2rem;\n  font-size: 1rem;\n}\n#articles-container .game .cards {\n  margin-top: 0.4rem;\n  font-size: 0.8rem;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n#articles-container .game .bitsy-container {\n  margin: 1.2rem 0;\n  position: relative;\n}\n#articles-container .game .bitsy-container img {\n  max-width: 100%;\n}\n#articles-container .game .bitsy-container .cover {\n  -webkit-box-shadow: 5px 5px 31px 0px rgba(0, 0, 0, 0.44);\n  box-shadow: 5px 5px 31px 0px rgba(0, 0, 0, 0.44);\n  transform: scale(0.98);\n  transition: 0.2s transform;\n}\n#articles-container .game .bitsy-container .cover:hover {\n  transform: scale(1);\n}\n#articles-container .game .bitsy-container .iframe-container.active {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n}\n#articles-container .game .bitsy-container .iframe-container.active .close {\n  position: fixed;\n  left: 20px;\n  top: 20px;\n}\n#articles-container .game .bitsy-container .iframe-container.active iframe {\n  width: 100%;\n  height: 100%;\n}\n#articles-container .game .additional {\n  margin-top: 0.5rem;\n  font-size: 0.8rem;\n  line-height: 0.9rem;\n}\n#articles-container .game .author {\n  margin-top: 1rem;\n  text-align: right;\n}\n#articles-container .divider {\n  border-bottom: dotted 5px black;\n  margin: 3rem 0;\n}\n\n.align-right {\n  text-align: right;\n}\n\n.align-left {\n  text-align: left;\n}";
styleInject(css_248z);

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
];

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

    let bitsyContainer = document.createElement("div");
    bitsyContainer.classList.add("bitsy-container");

    let iframeContainer = document.createElement("div");
    iframeContainer.classList.add("iframe-container");

    let cover = document.createElement("img");
    cover.setAttribute("src", game.coverPath);
    cover.classList.add("cover");
    bitsyContainer.appendChild(cover);

    let close = document.createElement("div");
    close.classList.add("close");
    close.innerHTML = "X";

    let iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.setAttribute("src", game.path);

    iframeContainer.appendChild(close);
    iframeContainer.appendChild(iframe);
    bitsyContainer.appendChild(iframeContainer);
    template.appendChild(bitsyContainer);
    
    let additionalNote = document.createElement("p");
    additionalNote.classList.add("additional");
    additionalNote.innerText = game.note;

    let author = document.createElement("p");
    author.classList.add("author");
    author.innerText = game.author;

    template.appendChild(additionalNote);
    template.appendChild(author);

    cover.addEventListener("click", () => {
        displayGame(iframe);
    });
    
    return template;
}

function displayGame(gameTarget) {
    console.log('element =', gameTarget); 
    if (gameTarget.classList.contains("active")) ; else {
        gameTarget.style.display = "initial";
        gameTarget.classList.contains("active");  
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
