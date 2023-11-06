class PilaLIFO<T>{

   protected pila = new Array<T>;
   
   constructor(){
      this.pila = [];
   } 

   public agregar(elemento: T): void{
      this.pila.push(elemento);
   }

   public quitar(): void{
      if(this.pila.length>0)
         this.pila.pop();
   }

   public cantElementos(): number{
      return this.pila.length;
   }

   public verArray(): T[]{
      return this.pila;
   }
}

class PilaLIFO_Unicos<T> extends PilaLIFO<T>{

   public agregar(elemento: T): void {
      if(!this.pila.includes(elemento))
         super.agregar(elemento);
   }

}

console.log("Pila de números");

let pilaNumeros = new PilaLIFO<number>();

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

let pilaStrings = new PilaLIFO<string>();

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

let pilaElemUnicos = new PilaLIFO_Unicos<number>();

pilaElemUnicos.agregar(3);
pilaElemUnicos.agregar(40);
pilaElemUnicos.agregar(999);
pilaElemUnicos.agregar(3);
pilaElemUnicos.agregar(40);
pilaElemUnicos.agregar(998);

console.log(pilaElemUnicos.cantElementos());
console.log(pilaElemUnicos.verArray());