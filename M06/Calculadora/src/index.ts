let ultimoResultado: string = "";

function anadirValor(valor: string) {
    let resultado: HTMLInputElement = document.getElementById("resultado") as HTMLInputElement;
    resultado.value += valor;
}

function limpiarUno() {
    let resultado: HTMLInputElement = document.getElementById("resultado") as HTMLInputElement;
    resultado.value = resultado.value.slice(0, -1); 
}

function limpiarTodo() {
    let resultado: HTMLInputElement = document.getElementById("resultado") as HTMLInputElement;
    resultado.value = ""; 
}

function calcularInput(){
    let resultado: HTMLInputElement = document.getElementById("resultado") as HTMLInputElement;
    resultado.value = eval(resultado.value.replace(/%/g, '/100').replace(/Ans/g, ultimoResultado));
    ultimoResultado = resultado.value;
}
