"use strict";
//Preguntem els diners que tindrà l'usuari
var diners = Number(prompt("Quants diners tens?"));
//Preguntem si volen introduïr un producte
var pregunta = prompt("Vols introduir un producte?");
//Si la resposta es si, continuem amb el programa
if (pregunta == "Si") {
    //Realitzem un do while per començar amb el programa
    do {
        //Preguntem i guardem els valors demanats (nom, preu i quantitat del producte) - Preu i producte poden ser tant const como let
        const nom_producte = prompt("Quin és el nom del producte?");
        const preu_producte = Number(prompt("Quin és el preu del producte?"));
        let quantitat_producte = Number(prompt("Quina és la quantitat del producte?"));
        //Confirmem que es tot correcte
        var correcte = prompt("És tot correcte?");
        //Si es correcte acabem el programa amb la logica demanada
        if (correcte == "Si") {
            //Guardem per a que sigui més comode el preu total, que es la quantitat pel preu
            let preu_total = preu_producte * quantitat_producte;
            //Si aquest preu total es major als diners de l'usuari, mostrem un missatge de resum informant que s'ha rebutjat
            if (preu_total > diners) {
                console.log("ORDRE REBUTJADA\n" +
                    nom_producte + " - " + preu_producte + "\n" +
                    "Quantitat demanda - " + quantitat_producte + "\n" +
                    "Total - " + preu_total + "\n" +
                    "L'import supera els diners que tens");
            }
            //Si no, mostrem que s'ha confirmat
            else {
                console.log("ORDRE CONFIRMADA\n" +
                    nom_producte + " - " + preu_producte + "\n" +
                    "Quantitat demanda - " + quantitat_producte + "\n" +
                    "Total - " + preu_total + "\n" +
                    "Diners restants - " + (diners - preu_total));
            }
        }
    } 
    //Si la pregunta de ser correcte, es respon amb una cosa diferent a si, tornem a iniciar el bucle
    while (correcte != "Si");
}
//Si la resposta es no, ens acomiadem
else if (pregunta == "No") {
    alert("Adeú!");
}
//Si la resposta es qualsevol altre cosa, indiquem un error
else {
    alert("ERROR! Valor no vàlid");
}
