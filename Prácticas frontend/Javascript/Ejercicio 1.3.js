"use strict";

// Método filter personalizado

let arreglo = [ 45, 23, "hola mundo", 999, true, "cadena", 2408];

let filterPersonalizado = (arreglo, funcion) => {

    let arrTemp = [];

    if(!Array.isArray(arreglo))
        throw Error("El elemento pasado por parametro no es un arreglo válido");
    else if( !(typeof(funcion) === "function")){
        throw Error("El elemento pasado no es una función válida");
    }   

    for(let i=0; i<arreglo.length; i++){

        if(funcion(arreglo[i]))
            arrTemp.push(arreglo[i]);
    }

    return arrTemp;
};

/*---- Casos de prueba ----*/

console.log(arreglo, filterPersonalizado(arreglo, x=> typeof(x)==="number"));

console.log(arreglo, filterPersonalizado(arreglo, x=> x[0]==="c"));

console.log(arreglo, filterPersonalizado(arreglo, x=> x*x<0 ));