function CambiarTitulo(){
let titulo: HTMLElement = document.getElementById("titulo")!;
if (titulo != null) 
        titulo.innerHTML = "Tia Turbina la mujer de tu vida";
        titulo.style.color = "0000ff";


}
function addtoList() {
    let lista: HTMLElement = document.getElementById("lista")!;

    let nuevoElemento = document.createElement("li");
    lista.append(nuevoElemento);
    nuevoElemento.innerHTML = "Su trasero" + " " + contador.toString()
    contador++;
}
let contador: number =1;