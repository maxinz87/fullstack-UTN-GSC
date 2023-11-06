import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent {

  valorActual = "X";

  nroCasilleros: number = 0;
  estadoCeldas: Array<Array<string>> = [];
  anchoDiv: string = "";
  juegoTerminado: boolean = false;
  contadorMovimientos: number = 0;
  infoHijoPadre = "";

  constructor(){

    this.nroCasilleros = parseInt(prompt("Elija tamaño del Tateti hasta 9:") || "1");
    while(!this.nroCasilleros || this.nroCasilleros > 9 || this.nroCasilleros < 3){
      this.nroCasilleros = parseInt(prompt("Elija tamaño VÀLIDO del Tateti hasta 9:") || "1");
    }

    this.anchoDiv = 55 * this.nroCasilleros + "px";

    for(let i = 0; i<this.nroCasilleros; i++){
      this.estadoCeldas.push(new Array(this.nroCasilleros).fill(""));
    }

  }

  chequeaJuegoTerminado(valorCelda: string, fila: number, columna: number): boolean{

    let contador = 0;

    for(let i = 0; i < this.nroCasilleros; i++){
      if(valorCelda === this.estadoCeldas[fila][i]){
        contador++;
      }
      else{
        contador=0;
        break;
      }
    }
    if(contador===this.nroCasilleros)
      return true;

    for(let i = 0; i < this.nroCasilleros; i++){
      if(valorCelda === this.estadoCeldas[i][columna]){
        contador++;
      }
      else{
        contador=0;
        break;
      }
    }

    if(contador===this.nroCasilleros)
      return true;

    if(fila===columna){
      for(let i = 0; i < this.nroCasilleros; i++){
        if(valorCelda === this.estadoCeldas[i][i])
          contador++;
        else{
          contador=0;
          break;
        }
      }
    }

    if(contador===this.nroCasilleros)
      return true;

    if(fila+columna=== this.nroCasilleros-1){
      for(let i=0; i<this.nroCasilleros; i++){
        if(valorCelda === this.estadoCeldas[i][this.nroCasilleros-1-i])
          contador++;
        else{
          contador=0;
          break;
        }
      }
    }

    if(contador===this.nroCasilleros)
      return true;

    return false;

  }

  funcionLlenarCasillero(fila: number, columna: number):void{

    if(!this.juegoTerminado){
      if(this.estadoCeldas[fila][columna]===""){
        if(this.valorActual === "X"){
          this.valorActual = "O"
          this.estadoCeldas[fila][columna] = this.valorActual;
        }
        else{
          this.valorActual = "X"
          this.estadoCeldas[fila][columna] = this.valorActual;
        }

        this.contadorMovimientos++;
      }

      if(this.chequeaJuegoTerminado(this.valorActual,fila,columna)){
        this.juegoTerminado = true;
        setTimeout(()=>{
          alert("Juego Terminado!");
        },50);
      }
      else{
        if(this.contadorMovimientos === this.nroCasilleros*this.nroCasilleros){
          this.juegoTerminado = true;
          setTimeout(()=>{
            alert("Empate!");
          },50);
        }
      }
    }

    // Chequeo de valores por consola
    // console.log(this.valorActual, fila, columna);
    // console.log("juego terminado?:", this.juegoTerminado);
  }

  rellenoCelda(evento: [string,number,number]){
    this.funcionLlenarCasillero(evento[1],evento[2]);
    this.infoHijoPadre = evento[0];
  }

}
