"use strict";
const visites_maximes = 2; //declaro la variable de visitas máximas de forma explícita (usamos una variable const porque no necesitamos modificar el valor máximo de visitas a la página)
let nom_pagina; //declaro la variable de nombre de la página de forma explicita (utilizo un let para ello ya que podriamos necesitar modificarlo a futuro)
let comptador_visites = 0; //declaro la variable de contador de visitas de forma explicita y le asigno el valor 0 (utilizo un let para ello ya que iremos sumando su valor secuencialmente debido a que es un contador)
var missatge_benvinguda = "¡Bienvenido!"; //declaro la variable de mensaje de bienvenida de forma explicita y le asigno el valor de cuando el usuario puede acceder a la página, (la he declarado como var debido a que modificaremos su valor y quiero que cargue rápido)
do { //pongo el do del bucle
    if (comptador_visites < visites_maximes) { //ponemos un if para revisar que el contador de visitas es menor que el número de visitas máximas
        console.log(missatge_benvinguda); //mostramos por la consola el mensaje de bienvenida
        comptador_visites++; //sumamos 1 al contador de visitas para indicar que ha habido una visita
    }
    else if (comptador_visites == visites_maximes) { //ponemos un if para revisar que el contador de visitas es igual que el número de visitas máximas
        missatge_benvinguda = "No eres bienvenido, has llegado al máximo número de visitas"; //cambiamos el mensaje de bienvenida indicando que ya no se es bienvenido por el número de visitas
        console.log(missatge_benvinguda); //mostramos por la consola el mensaje de bienvenida
        break; //hacemos un break para tenrmionar el bucle porque si no seria infinito
    }
} while (comptador_visites <= visites_maximes); //el bucle seguirá activo mientras el contador de visitas sea meno o igual que el numero máximo de visitas (o que haya un break en alguna de las condiciones)
/**_______________________________________________________________________EJERCICIO 2_________________________________________________________________________________________*/
//const visites_Maximes:number=2; //declaro la variable de visitas máximas de forma explícita (usamos una variable const porque no necesitamos modificar el valor máximo de visitas a la página)
//let nom_Pagina:string; //declaro la variable de nombre de la página de forma explicita (utilizo un let para ello ya que podriamos necesitar modificarlo a futuro)
//let comptador_Visites:number=0; //declaro la variable de contador de visitas de forma explicita y le asigno el valor 0 (utilizo un let para ello ya que iremos sumando su valor secuencialmente debido a que es un contador)
//var missatge_Benvinguda:string="¡Bienvenido!" //declaro la variable de mensaje de bienvenida de forma explicita y le asigno el valor de cuando el usuario puede acceder a la página, (la he declarado como var debido a que modificaremos su valor y quiero que cargue rápido)
//if(comptador_Visites<visites_Maximes){ //ponemos un if para revisar que el contador de visitas es menor que el número de visitas máximas
//console.log(missatge_Benvinguda); //mostramos por la consola el mensaje de bienvenida
//comptador_Visites++; //sumamos 1 al contador de visitas para indicar que ha habido una visita
//} 
//if(comptador_Visites<visites_Maximes){ //volvemos a poner un if para revisar que el contador de visitas es menor que el número de visitas máximas
//console.log(missatge_Benvinguda); //mostramos por la consola el mensaje de bienvenida
//comptador_Visites++; //sumamos 1 al contador de visitas para indicar que ha habido una visita
//} 
//if(comptador_Visites<visites_Maximes){ //volvemos a poner un if para revisar que el contador de visitas es menor que el número de visitas máximas
//console.log(missatge_Benvinguda); //mostramos por la consola el mensaje de bienvenida
//comptador_Visites++; //sumamos 1 al contador de visitas para indicar que ha habido una visita
//} 
//else { //ponemos un else para cuando veamos que el contador de vistas llega al número de visitas máximas 
//missatge_Benvinguda="No eres bienvenido, has llegado al máximo número de visitas"; //cambiamos el mensaje de bienvenida indicando que ya no se es bienvenido por el número de visitas
//console.log(missatge_Benvinguda); //mostramos por la consola el mensaje de bienvenida
//}
/**___________________________________________________________________________________________________________________________________________________________________________*/
/**_______________________________________________________________________EJERCICIO 1_________________________________________________________________________________________*/
//var var_daniJP:number=30; //creo la variable var var_daniJP de forma explicita y le agrego el valor: 30
//console.log(var_daniJP); //mostramos por la consola el valor de la variable var_daniJP
//var_daniJP=10; //cambio el valor a la variable var_daniJP a: 10
//console.log(var_daniJP); //mostramos de nuevo por la consola el valor de la variable var_daniJP
//let let_daniJP:string="Hola món!"; //creo la variable let let_daniJP de forma explicita y le agrego el valor: Hola món!
//console.log(let_daniJP); //mostramos por la consola el valor de la variable let_daniJP
//let_daniJP="Adeu món!"; //cambio el valor a la variable let_daniJP a: Adeu món!
//console.log(let_daniJP); //mostramos de nuevo por la consola el valor de la variable let_daniJP
//const const_daniJP:string="Javascript obsolet"; //creo la variable const const_daniJP de forma explicita y le agrego el valor: Javascript obsolet
//console.log(const_daniJP); //mostramos por la consola el valor de la variable const_daniJP
//const_daniJP="Javascript not obsolet"; //Esto no se puede hacer debido a que al ser una constante no podemos asignarle modificar su valor y por tanto nos salta error
/**___________________________________________________________________________________________________________________________________________________________________________*/
