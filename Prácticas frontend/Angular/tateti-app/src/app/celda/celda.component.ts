import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent{

  @Input() valorCelda: string = "";
  @Input() fila: number = -1;
  @Input() celda: number = -1;
  @Input() juegoTerminado: boolean = false;
  @Output() cambioContenidoCelda: EventEmitter<[string,number,number]>;
  celdaLlena: boolean;

  constructor(){
    this.cambioContenidoCelda = new EventEmitter();
    this.celdaLlena = false;
  }
  
  seleccionDeCelda(): void{

    if(this.juegoTerminado){
      this.cambioContenidoCelda.emit(["Se terminó el juego.",this.fila,this.celda]);
    }
    else{
      if(!this.celdaLlena){
        this.celdaLlena = true;
        this.cambioContenidoCelda.emit(["La celda se encontraba vacia.",this.fila,this.celda]);
      }
      else{
        this.cambioContenidoCelda.emit(["La celda que quiso seleccionar ya se encuentra ocupada!",this.fila,this.celda]);
      }
    }

  }

}
