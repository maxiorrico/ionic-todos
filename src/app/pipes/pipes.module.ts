import { NgModule } from '@angular/core';
import { FiltroCompletadoPipe } from './filtro-completado.pipe';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FiltroCompletadoPipe],
  exports : [FiltroCompletadoPipe]
  // imports: [
  //   CommonModule
  // ]
})
export class PipesModule { }
