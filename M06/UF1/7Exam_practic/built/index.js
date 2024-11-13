"use strict";
function input() {
    let input1 = (document.getElementById("input1").value); //pillo el valor del primer input
    let input2 = Number(document.getElementById("input2").value); //pillo el valor del segundo input
    if (input1 == "palabra") { //si el primer input es palabra entonces ponemos "palabra" alternando entre mayusculas y minusculas
        let resultat = "";
        for (let j = 0; j < input1.length; j++) {
            if (j % 2 != 0) {
                resultat += (input1.charAt(j).toUpperCase());
            }
            else {
                resultat += (input1.charAt(j));
            }
        }
        console.log(resultat);
    }
    else if (input1 == "numero") { //si el primer input es "numero" abriremos un numero de pestañas acorde a la longitud del input (que en este caso es la `palabra numero y por tanto la longitud es 6) 
        for (let i = 0; i < input1.length; i++)
            window.open("", "", "width=200px,height=200px");
    }
    else { //si ninguna de las palabras del input1 coinciden con las palabras especificadas entonces usaremos el número indicado en el segundo input y lo elevaremos sobre si mismo
        console.log(Math.pow(input2, input2));
    }
}
