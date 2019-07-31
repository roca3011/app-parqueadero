import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { VehiculosComponent } from '../core/componente/vehiculos/vehiculos.component';


@NgModule({
  declarations: [VehiculosComponent],
  imports: [
    CommonModule,
    VehiculosRoutingModule
  ]
})
export class VehiculosModule { }
