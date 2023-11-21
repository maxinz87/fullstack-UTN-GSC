import { Injectable } from '@angular/core';
import { suscripcionData } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  recepcionSuscripcion(data: suscripcionData){
    console.log("----------------------------------");
    console.log("IMPRIMIENDO DESDE SERVICIO");
    console.log("----------------------------------");
    console.log(data);
  }
}
