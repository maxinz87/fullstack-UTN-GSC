"use strict";

// Método Map personalizado

let arreglo = [78,21,7,3];

function mapPersonalizado(arreglo, funcion){
    let arrTemp = [];
    if(!Array.isArray(arreglo))
        throw Error("El elemento pasado por parametro no es un arreglo válido");
    else if( !(typeof(funcion) === "function")){
        throw Error("El elemento pasado no es una función válida");
    }

    else {
        for(let i=0; i<arreglo.length; i++){
            if(!funcion(arreglo[i])){
                throw Error("La función que se ha pasado no retorna valores válidos");
            }
            arrTemp.push(funcion(arreglo[i]));
        }

        return arrTemp;
    }
}

/*---- Casos de prueba ----*/

console.log(arreglo, mapPersonalizado(arreglo, x=> x*x));
console.log(arreglo); //no modifica el arreglo original

//console.log([78,"hola mundo",7,3], mapPersonalizado([78,"hola mundo", 7, 3], x=> x*x));

//console.log("esto es una cadena", mapPersonalizado("esto es una cadena", x=> x*x));

//console.log([78,21,7,3], mapPersonalizado([78,21,7,3], "esto es una cadena"));