import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas : Lista []  = [];
  constructor() {
    // const lista1 = new Lista('Reclectar piedras');
    // const lista2 = new Lista('Heroes a desaparecer');
    // this.listas.push( lista1, lista2);

    this.cargarStorage();
  }

  crearLista( titulo : string ) {
    let nuevaLista = new Lista( titulo );
    this.listas.push( nuevaLista );
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    let dataString = localStorage.getItem('data');
    if (dataString) {
      this.listas = JSON.parse( dataString );
    }
  }

}
