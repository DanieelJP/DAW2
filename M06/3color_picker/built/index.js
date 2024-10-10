"use strict";
let buttonCollection = document.getElementsByTagName("button");
for (let i = 0; i < buttonCollection.length; i++) {
    buttonCollection[i].addEventListener("click", () => {
        document.getElementById("cuadrado").style.backgroundColor = buttonCollection[i].id;
    });
}
