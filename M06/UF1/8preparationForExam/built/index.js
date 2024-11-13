"use strict";
function modificarBom() {
    let input = document.getElementById("data").value;
    let inputD = parseInt(input);
    for (let i = 0; i < inputD; i++) {
        console.log(i);
        let finestra = (window.open("", "", "width=300, height=300"));
        finestra.document.write((i).toString());
        finestra.document.body.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
}
