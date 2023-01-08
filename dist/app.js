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

var css_248z = "@import '/node_modules/destyle.css/destyle.min.css';\n@font-face {\n  font-family: \"Agrandir\";\n  src: url(\"/src/font/PPAgrandir-Regular.otf\") format(\"truetype\");\n  font-display: swap;\n}\nhtml {\n  font-family: \"Agrandir\", sans-serif;\n  color: #1F0318;\n  font-size: 20px;\n  line-height: 1.35rem;\n}\n\n* {\n  -webkit-font-smoothing: antialiased;\n}\n\na {\n  text-decoration: underline;\n}\n\nbody {\n  padding: 30px 20px;\n  background-color: #F2FAF0;\n}\n\nheader h1 {\n  font-size: 2rem;\n  font-weight: 900;\n  margin-bottom: 5px;\n}\nheader h2 {\n  font-size: 1.5rem;\n  font-weight: 450;\n  margin-top: 1rem;\n  line-height: 1.7rem;\n}\n\n#introduction {\n  margin: 1.7rem 0;\n}\n#introduction .divider {\n  text-align: center;\n}\n#introduction .text {\n  margin: 0.5rem 0;\n  text-align: justify;\n}\n\n#articles-container .game {\n  margin-bottom: 3rem;\n}\n#articles-container .game h2 {\n  font-size: 1.2rem;\n  font-weight: bolder;\n  text-transform: uppercase;\n}\n#articles-container .game h3 {\n  font-size: 1rem;\n}\n#articles-container .game .cards {\n  font-size: 0.8rem;\n}\n#articles-container .game .bitsy-container {\n  margin-top: 0.5rem;\n  position: relative;\n}\n#articles-container .game .bitsy-container .click-to-play {\n  font-size: 14px;\n  font-weight: lighter;\n}\n#articles-container .game .bitsy-container img {\n  max-width: 100%;\n}\n#articles-container .game .additional {\n  margin-top: 0.5rem;\n  font-size: 0.8rem;\n  line-height: 0.9rem;\n}\n\n.align-right {\n  text-align: right;\n}\n\n.align-left {\n  text-align: left;\n}";
styleInject(css_248z);

window.onload = function(){
    // animated anchors
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
};
