class FiguraGeometrica {

    constructor(protected nombre: string){

    }

    obtenerNombre(): string{
        return this.nombre;
    }

    perimetro(){}

    area(){}
}

class Cuadrado extends FiguraGeometrica{

    constructor(private lado: number){
        super("Cuadrado");
    }

    perimetro():number{
        return this.lado*4;
    }

    area():number{
        return this.lado*this.lado;
    }
}

class Circulo extends FiguraGeometrica{

    constructor(private radio: number){
        super("Circulo");
    }

    perimetro(): number {
        return 2*Math.PI*this.radio;
    }

    area(): number {
        return Math.PI*Math.pow(this.radio,2);
    }
}

let circulo = new Circulo(6);

console.log(circulo.obtenerNombre(), "Perimetro: "+ circulo.perimetro(),"Área: " + circulo.area());

let cuadrado = new Cuadrado(12);

console.log(cuadrado.obtenerNombre(), "Perimetro: "+ cuadrado.perimetro(),"Área: " + cuadrado.area());


console.log("Creación de arreglo de figuras geometricas (Polimorfismo)");

let arregloDeFigurasGeo: FiguraGeometrica[] = [];

arregloDeFigurasGeo.push(new Circulo(4));
arregloDeFigurasGeo.push(new Cuadrado(24));

console.log(arregloDeFigurasGeo);