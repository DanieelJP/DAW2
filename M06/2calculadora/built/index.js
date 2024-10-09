"use strict";
let ultimoResultado = "";
function anadirValor(valor) {
    let resultado = document.getElementById("resultado");
    resultado.value += valor;
}
function limpiarUno() {
    let resultado = document.getElementById("resultado");
    resultado.value = resultado.value.slice(0, -1);
}
function limpiarTodo() {
    let resultado = document.getElementById("resultado");
    resultado.value = "";
}
function calcularInput() {
    let resultado = document.getElementById("resultado");
    resultado.value = eval(resultado.value.replace(/%/g, '/100').replace(/Ans/g, ultimoResultado));
    ultimoResultado = resultado.value;
}
