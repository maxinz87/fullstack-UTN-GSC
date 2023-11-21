import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { suscripcionData } from './interface';

const url_backend = "http://localhost:3000/suscriptores";

@Injectable({
  providedIn: 'root'
})
export class BackendConexionService {



  constructor(private http: HttpClient) { }

  crearSuscripcion(suscripcion: suscripcionData): Observable<suscripcionData>{
    return this.http.post<suscripcionData>(`${url_backend}`, suscripcion);
  }

  buscarSuscripcionPorId(id: number):Observable<suscripcionData>{
    return this.http.get<suscripcionData>(`${url_backend}/${id}`);
  }

  buscarSuscripciones(): Observable<suscripcionData[]>{
    return this.http.get<suscripcionData[]>(`${url_backend}`);
  }

  borrarUnaSuscripcion(id: number): Observable<suscripcionData>{
    return this.http.delete<suscripcionData>(`${url_backend}/${id}`);
  }
}
