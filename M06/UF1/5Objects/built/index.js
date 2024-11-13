"use strict";
function diaDeLaSetmana() {
    let input_fecha = document.getElementById("data").value;
    console.log(input_fecha);
    /*let regexp = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;*/
    let regexp = /^\d\d\/\d\d\/\d\d\d\d$/;
    console.log(regexp.test(input_fecha));
    let dia = (parseInt(input_fecha.substring(0, 2)));
    let mes = (parseInt(input_fecha.substring(3, 5)));
    let ano = (parseInt(input_fecha.substring(6, 10)));
    let fecha = new Date(ano, mes - 1, dia);
    console.log(dia);
    console.log(mes);
    console.log(ano);
    console.log(fecha.toDateString());
}
