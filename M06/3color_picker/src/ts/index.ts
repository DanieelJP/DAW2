let buttonCollection: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");
for (let i=0; i< buttonCollection.length; i++){
    buttonCollection[i].addEventListener("click", () => {
    document.getElementById("cuadrado")!.style.backgroundColor = buttonCollection[i].id;
    });
}



