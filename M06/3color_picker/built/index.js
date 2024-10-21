"use strict";
let buttonCollection = document.getElementsByTagName("button");
for (let i = 0; i < buttonCollection.length; i++) {
    buttonCollection[i].addEventListener("click", () => {
        let targetDiv = document.getElementById("targetDiv");
        targetDiv.style.backgroundColor = buttonCollection[i].value;
    });
}
