"use strict";
function carregarCookies() {
    let arrayCookies = document.cookie.split("; ");
    let nomCookie = "";
    let valorCookie = "";
    for (let cookie of arrayCookies) {
        let temp = cookie.split("=");
        nomCookie = temp[0];
        valorCookie = temp[1];
        console.log(`Nom de la cookie: ${nomCookie}; valor de la cookie: ${valorCookie}`);
        let h1 = document.getElementById("header");
        let p = document.getElementById("paragraph");
        if (nomCookie == "idioma" && valorCookie == "castella") {
            h1.innerText = "Texto en castellano";
            p.innerText = "Para ver los cambios, actualice la pàgina.";
        }
        if (nomCookie == "idioma" && valorCookie == "catala") {
            h1.innerText = "Text en Català";
            p.innerText = "Per veure els canvis, actualitzar la pàgina.";
        }
        if (nomCookie == "idioma" && valorCookie == "angles") {
            h1.innerText = "Text in English";
            p.innerText = "To see the changes, refresh the page.";
        }
        if (nomCookie == "fondo") {
            document.body.style.background = valorCookie;
        }
    }
    ;
}
