"use strict";

// Método find Personalizado

let arreglo = [45, 56, 34, 23, 111, "hola mundo", 332, 12];

let findPersonalizado = (arreglo, funcion)=>{

    if(!Array.isArray(arreglo))
        throw Error("El elemento pasado por parametro no es un arreglo válido");
    else if( !(typeof(funcion) === "function")){
        throw Error("El elemento pasado no es una función válida");
    }

    for(let i=0; i<arreglo.length; i++){

        if(funcion(arreglo[i]))
            return arreglo[i];
    }

    return undefined;
};

/*---- Casos de prueba ----*/

console.log(arreglo, "Resultado:", findPersonalizado(arreglo, x=> x>300));

console.log(arreglo, "Resultado:", findPersonalizado(arreglo, x=> x>1300));

console.log(arreglo, "Resultado:", findPersonalizado(arreglo, x=> typeof(x)==="string"));
