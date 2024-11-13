"use strict";
function carregar() {
    let idioma = localStorage.getItem('idioma');
    let color = localStorage.getItem('color');
    let h1 = document.getElementById("header");
    let p = document.getElementById("paragraph");
    if (idioma == "catala" && h1 != null) {
        h1.innerHTML = "Text en català";
        p.innerHTML = "Per veure els canvis, actualitzar la pàgina.";
    }
    else if (idioma == "castella" && h1 != null) {
        h1.innerHTML = "Texto en castellano";
        p.innerHTML = "Para ver los cambios, actualitzar la página.";
    }
    else if (idioma == "angles" && h1 != null) {
        h1.innerHTML = "Text in English";
        p.innerHTML = "To see the changes, refresh the page.";
    }
    document.body.style.backgroundColor = color;
}
