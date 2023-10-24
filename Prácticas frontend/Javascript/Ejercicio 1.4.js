"use strict"

// Método reduce personalizado

let arr1 = [ 23, 87, 10, 40, 50];

let arr2 = [ 'a', 'b', 'c', 'd', 'z'];

let funcionPrueba = (valor, acumulador) => acumulador + valor;

let reducePersonalizado = (arreglo, funcion, valorInicial = undefined) => {

    if(!Array.isArray(arreglo))
        throw Error("El elemento pasado por parametro no es un arreglo válido");
    else if( !(typeof(funcion) === "function")){
        throw Error("El elemento pasado no es una función válida");
    }
    if(arreglo.length === 0 && !valorInicial){
        throw Error("No se puede operar reducePersonalizado en un arreglo vacio sin valor inicial");
    }

    
    let i;
    let acumulador;


    if(valorInicial){
        i = 0;
        acumulador = valorInicial;

        if(arreglo.length === 1)
            return funcion(arreglo[i] ,acumulador)
    }
    else {
        i = 1;
        acumulador = arreglo[0];
        
        if(arreglo.length === 1)
            return acumulador;
    }


    if(arreglo.length > 1){
        for(i; i<arreglo.length; i++){

            acumulador = funcion(arreglo[i] ,acumulador);
    
        }
    }


    return acumulador;
}

/*---- Casos de prueba ----*/

console.log(arr1, reducePersonalizado(arr1,funcionPrueba));

console.log(arr2, reducePersonalizado(arr2,funcionPrueba));

//Prueba arreglo de 1 elemento sin valor inicial
console.log([10], reducePersonalizado([10],funcionPrueba));

//Prueba arreglo de 1 elemento con valor inicial
console.log([10], reducePersonalizado([10],funcionPrueba, 20));