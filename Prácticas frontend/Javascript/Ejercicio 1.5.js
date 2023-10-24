"use strict"

/* Funciones por cada nro del 0 al 9 */

let cero = x => {
    if(typeof(x)==="function")
        return x(0)
    return 0;
};

let uno = x => {
    if(typeof(x)==="function")
        return x(1)
return 1;
}

let dos = x => {
    if(typeof(x)==="function")
        return x(2)
return 2;
}

let tres = x => {
    if(typeof(x)==="function")
        return x(3)
return 3;
}

let cuatro = x => {
    if(typeof(x)==="function")
        return x(4)
return 4;
}

let cinco = x => {
    if(typeof(x)==="function")
        return x(5)
return 5;
}

let seis = x => {
    if(typeof(x)==="function")
        return x(6)
return 6;
}

let siete = x => {
    if(typeof(x)==="function")
        return x(7)
return 7;
}

let ocho = x => {
    if(typeof(x)==="function")
        return x(8)
return 8;
}

let nueve = x => {
    if(typeof(x)==="function")
        return x(9)
return 9;
}

let suma = valor1 => function(valor2){ return valor2 + valor1};

let resta = valor1 => (valor2 => valor2- valor1);

let multiplicacion = valor1 => (valor2 => valor2 * valor1);

let division = valor1 => (valor2 => Math.trunc(valor2 / valor1));

/*-- Casos de prueba --*/

console.log("nueve(resta(cuatro()))", nueve(resta(cuatro())));

console.log("nueve(suma(cuatro()))", nueve(suma(cuatro())));

console.log("nueve(multiplicacion(cuatro()))", nueve(multiplicacion(cuatro())));

console.log("nueve(division(cuatro()))", nueve(division(cuatro())));

console.log("cuatro(division(nueve()))", cuatro(division(nueve())));

console.log("cero(division(cuatro()))", cuatro(division(cero())));

console.log("siete()", siete());