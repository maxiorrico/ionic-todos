import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listas : Lista [] = [];
  constructor(  public deseosService : DeseosService,
                private router : Router,
                private alertController : AlertController) {

    this.listas = deseosService.listas;
  }

  async agregarLista() {
    // this.router.navigateByUrl('/tabs/tab1/agregar');

    const alert = await this.alertController.create({
      header: 'Nueva lista',
      // subHeader: 'Subtitle',
      // message: 'This is an alert message.',
      inputs : [{ name : 'titulo', type : 'text', placeholder : 'Nombre de la lista'}],
      buttons: [{
        text : 'Cancelar',
        role : 'cancel',
        handler : () => { console.log('canelado'); }
      }, {
        text : 'Guardar',
        // role : 'cancel',
        handler : (data) => {
          console.log(data);
          this.deseosService.crearLista( data.titulo );
        }
      }]
    });

    alert.present()

  }
}
