import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ListaComponent
  ],
  exports: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
