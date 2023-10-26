var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PilaLIFO = /** @class */ (function () {
    function PilaLIFO() {
        this.pila = [];
    }
    PilaLIFO.prototype.agregar = function (elemento) {
        this.pila.push(elemento);
    };
    PilaLIFO.prototype.quitar = function () {
        if (this.pila.length > 0)
            this.pila.pop();
    };
    PilaLIFO.prototype.cantElementos = function () {
        return this.pila.length;
    };
    PilaLIFO.prototype.verArray = function () {
        return this.pila;
    };
    return PilaLIFO;
}());
var PilaLIFO_Unicos = /** @class */ (function (_super) {
    __extends(PilaLIFO_Unicos, _super);
    function PilaLIFO_Unicos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PilaLIFO_Unicos.prototype.agregar = function (elemento) {
        if (!_super.prototype.pila.includes(elemento))
            _super.prototype.agregar.call(this, elemento);
    };
    return PilaLIFO_Unicos;
}(PilaLIFO));
console.log("Pila de números");
var pilaNumeros = new PilaLIFO();
pilaNumeros.agregar(3);
pilaNumeros.agregar(40);
pilaNumeros.agregar(999);
console.log(pilaNumeros.cantElementos());
console.log(pilaNumeros.verArray());
pilaNumeros.quitar();
pilaNumeros.quitar();
console.log(pilaNumeros.cantElementos());
console.log(pilaNumeros.verArray());
console.log("Pila de Cadenas");
var pilaStrings = new PilaLIFO();
pilaStrings.agregar("hola");
pilaStrings.agregar("mundo");
pilaStrings.agregar("999");
pilaStrings.agregar("0x83h832");
pilaStrings.agregar("2408");
console.log(pilaStrings.cantElementos());
console.log(pilaStrings.verArray());
pilaStrings.quitar();
pilaStrings.quitar();
console.log(pilaStrings.cantElementos());
console.log(pilaStrings.verArray());
console.log("Pila de números únicos");
var pilaElemUnicos = new PilaLIFO_Unicos();
pilaElemUnicos.agregar(3);
pilaElemUnicos.agregar(40);
pilaElemUnicos.agregar(999);
pilaElemUnicos.agregar(3);
pilaElemUnicos.agregar(40);
pilaElemUnicos.agregar(998);
console.log(pilaElemUnicos.cantElementos());
console.log(pilaElemUnicos.verArray());
