import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  @Input() terminados = false;
  listas : Lista [] = [];

  constructor( public deseosService : DeseosService, private router : Router) {
    this.listas = deseosService.listas;
  }

  ngOnInit() {}

  listaSeleccionada( lista : Lista ) {
    if (this.terminados) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }
  }

  borrar( i : number) {
    this.listas.splice( i, 1);
    this.deseosService.guardarStorage();
  }

}
