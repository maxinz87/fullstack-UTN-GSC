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
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(nombre) {
        this.nombre = nombre;
    }
    FiguraGeometrica.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    FiguraGeometrica.prototype.perimetro = function () { };
    FiguraGeometrica.prototype.area = function () { };
    return FiguraGeometrica;
}());
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(lado) {
        var _this = _super.call(this, "Cuadrado") || this;
        _this.lado = lado;
        return _this;
    }
    Cuadrado.prototype.perimetro = function () {
        return this.lado * 4;
    };
    Cuadrado.prototype.area = function () {
        return this.lado * this.lado;
    };
    return Cuadrado;
}(FiguraGeometrica));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(radio) {
        var _this = _super.call(this, "Ciruclo") || this;
        _this.radio = radio;
        return _this;
    }
    Circulo.prototype.perimetro = function () {
        return 2 * Math.PI * this.radio;
    };
    Circulo.prototype.area = function () {
        return Math.PI * Math.pow(this.radio, 2);
    };
    return Circulo;
}(FiguraGeometrica));
var circulo = new Circulo(6);
console.log(circulo.obtenerNombre(), "Perimetro: " + circulo.perimetro(), "Área: " + circulo.area());
var cuadrado = new Cuadrado(12);
console.log(cuadrado.obtenerNombre(), "Perimetro: " + cuadrado.perimetro(), "Área: " + cuadrado.area());
console.log("Creación de arreglo de figuras geometricas (Polimorfismo)");
var arregloDeFigurasGeo = [];
arregloDeFigurasGeo.push(new Circulo(4));
arregloDeFigurasGeo.push(new Cuadrado(24));
console.log(arregloDeFigurasGeo);
