function exercici1() {
    let input1:string = (document.getElementById("camp1") as HTMLInputElement).value        //registramos el valor del primer input en una variable de forma explicita(lo registro como string)
    let input2:string = (document.getElementById("camp2") as HTMLInputElement).value        //registramos el valor del segundo input en una variable de forma explicita(lo registro como string)

    //los convertimos a tipos number sus valores
    let input1GG:number = parseInt(input1);   
    let input2GG:number = parseInt(input2);

    if(input1GG<input2GG){  //en este condicional donde: Si el primer es mas pequeño que el segundo, los sumaremos y lo mostraremos en un alert
        alert(input1GG+input2GG);
    }

    else if(input1GG>input2GG){  //y en este otro donde: Si el primero es mas grande que el segundo, los dividimos y lo mostramos por consola
        console.log(input1GG/input2GG);
    }

}

function exercici2() {
        let input1:string = (document.getElementById("camp1") as HTMLInputElement).value        //registramos el valor del primer input en una variable de forma explicita(lo registro como string)
        let input2:string = (document.getElementById("camp2") as HTMLInputElement).value        //registramos el valor del segundo input en una variable de forma explicita(lo registro como string)
 
        //los convertimos a tipos number sus valores
        let input1GG:number = parseInt(input1);   
        let input2GG:number = parseInt(input2);

        var numberAnt;  //declaramos un variable vacia que proximamente rellenaremos (no he sabido declararla explicita)
        for(let i:number =0; i<input1GG; i++){  //bucle que genera numeros aleatrios que termina cuando llega al valor asignado en el primer input
            let number:number = Math.floor(Math.random() * (75-1) + 1);  //aqui tenemos una variable donde su valor es un numero aleatorio entre 1 y 75
            if (number%input2GG!=0){ //aqui en este condicional hacemos que si el numero no es divisible entre el valor del segundo input, si no lo es, asignamos el valor de el último numero aleatorio generado a la variable vacia creada anteriormente para poder guardar el último numero que no sea divisible entre el valor de input2 
                numberAnt=number;
            }    
            else if(number%input2GG==0){ //en este condional comprobamos si el último número aleatorio generado es divisible entre el valor del segundo input. si lo es, mostramos por consola cual es el último número que no es divisible (lo hemos guardado anteriormente o será undefined porque nunca ha existido) y rompemos el bucle
                console.log(numberAnt);
                break;
            }

        }

}

function exercici3() {
    let input1:string = (document.getElementById("camp1") as HTMLInputElement).value        //registramos el valor del primer input en una variable de forma explicita(lo registro como string)
    let input2:string = (document.getElementById("camp2") as HTMLInputElement).value        //registramos el valor del segundo input en una variable de forma explicita(lo registro como string)

    //los convertimos a tipos number sus valores
    let input1GG:number = parseInt(input1);   
    let input2GG:number = parseInt(input2);

    if(input1GG%2==0){
        console.log(true);
        window.open("", "", input2);
        

    }
    else{
        console.log(false);
        window.open("", "", input2);

    }




}