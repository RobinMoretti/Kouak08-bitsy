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

var css_248z = "@import '/node_modules/destyle.css/destyle.min.css';\n@font-face {\n  font-family: \"Agrandir\";\n  src: url(\"/src/font/PPAgrandir-Regular.otf\") format(\"truetype\");\n  font-display: swap;\n}\nhtml {\n  font-family: \"Agrandir\", sans-serif;\n}\n\n* {\n  -webkit-font-smoothing: antialiased;\n}";
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
