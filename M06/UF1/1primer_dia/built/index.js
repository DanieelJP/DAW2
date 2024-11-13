"use strict";
function CambiarTitulo() {
    let titulo = document.getElementById("titulo");
    if (titulo != null)
        titulo.innerHTML = "Tia Turbina la mujer de tu vida";
    titulo.style.color = "0000ff";
}
function addtoList() {
    let lista = document.getElementById("lista");
    let nuevoElemento = document.createElement("li");
    lista.append(nuevoElemento);
    nuevoElemento.innerHTML = "Su trasero" + " " + "x" + contador.toString();
    contador++;
}
let contador = 1;

function inputList() {
    let listaGuapa = document.getElementById("lista");
    let value = document.getElementById("textoUser");
    if (value != null)
        console.log(value.value);
    let nuevoElemento = document.createElement("li");
    listaGuapa.append(nuevoElemento);
    nuevoElemento.innerHTML = value.value;
}

function inputTable() {
    let tablaGuapa = document.getElementById("tabla");
    let value = document.getElementById("textoUser");
    if (value != null)
        console.log(value.value);
    
    let nuevaFila = document.createElement("tr");
    let nuevoElemento = document.createElement("th");
    nuevoElemento.innerHTML = value.value;
    nuevaFila.appendChild(nuevoElemento);
    
    tablaGuapa.appendChild(nuevaFila);

    let nuevaFilaRadio = document.createElement("tr");
    let nuevoElemento2 = document.createElement("td");
    let radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "opciones"; 

    nuevoElemento2.appendChild(radioInput);
    nuevaFilaRadio.appendChild(nuevoElemento2);
    
    tablaGuapa.appendChild(nuevaFilaRadio);

    value.value = "";
}

function deleteFromList() {
    let mamañema = document.getElementById("lista");
    let value = document.getElementById("borrarLista");
    let borrar = value.valueAsNumber - 1;
    let number = mamañema.querySelectorAll("li").length;
    if (borrar >= 0 && borrar < number) {
        let listaEliminada = mamañema.querySelectorAll("li")[borrar];
        mamañema.removeChild(listaEliminada);

    }
}

function addToDiv(){
    let div: HTMLElement = document.getElementById("divP");
    let inPText: HTMLInputElement = document.getElementById("inPText") as HTMLInputElement;
    let radnormal: HTMLInputElement = document.getElementById("radStyleNormal") as HTMLInputElement;
    let radBolt: HTMLInputElement = document.getElementById("radStyleBold") as HTMLInputElement;
    let radItalic: HTMLInputElement = document.getElementById("radStyleItalic") as HTMLInputElement;
    let checkBlue: HTMLInputElement = document.getElementById("checkBlue") as HTMLInputElement;
    let checkBorder: HTMLInputElement = document.getElementById("checkBorder") as HTMLInputElement;

    document.getElementsByName("radSyle");

    let nuevoElemento: HTMLInputElement = document.getElementById("p");
    div.append(nuevoElemento);
    nuevoElemento.innerHTML = inPText.value;
    if (radBolt.checked) nuevoElemento.style.fontWeight = "bold";
    else if (radItalic.checked) nuevoElemento.style.fontWeight = "italic";
    if (checkBlue.checked) nuevoElemento.style.color = "blue";
    if (checkBorder.checked){
        nuevoElemento.style.width =
        nuevoElemento.style
        nuevoElemento.style
    }
}


