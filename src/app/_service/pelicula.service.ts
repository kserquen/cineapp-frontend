import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Subject } from 'rxjs';
import { Pelicula } from './../_model/pelicula';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  
  peliculaCambio = new Subject<Pelicula[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST}/peliculas`;    

  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Pelicula[]>(this.url);
  }

  listarPorId(id: number){
    return this.http.get<Pelicula>(`${this.url}/${id}`);
  }

  registrar(pelicula: Pelicula) {
    return this.http.post(this.url, pelicula);
  }

  modificar(pelicula: Pelicula) {
    return this.http.put(this.url, pelicula);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
