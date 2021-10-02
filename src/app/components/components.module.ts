import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EncabezadoComponent,
    FooterComponent
  ],
  exports: [FooterComponent]
})
export class ComponentsModule { }
