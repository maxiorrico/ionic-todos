import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  @ViewChild( IonList , null ) lista : IonList;
  @Input() terminados = false;
  listas : Lista [] = [];

  constructor(
      public deseosService : DeseosService,
      private router : Router,
      private alertController : AlertController) {
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

  borrarLista( lista : Lista) {
    this.deseosService.borrarLista( lista );
  }

  async editar ( lista : Lista) {
    const alert = await this.alertController.create({
      header: 'Editar lista',
      inputs : [{ name : 'titulo', value : lista.titulo, type : 'text', placeholder : 'Nombre de la lista'}],
      buttons: [{
        text : 'Cancelar',
        role : 'cancel',
        handler : () => { this.lista.closeSlidingItems(); }
      }, {
        text : 'Guardar',
        handler : (data) => {
          console.log(data);
          if (data.titulo.length === 0) {
            return;
          }
          lista.titulo = data.titulo;
          this.deseosService.guardarStorage();
          this.lista.closeSlidingItems();
        }
      }]
    });

    alert.present()
  }

}
