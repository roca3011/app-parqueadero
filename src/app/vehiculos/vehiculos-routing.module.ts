import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculosComponent } from '../core/componente/vehiculos/vehiculos.component';


const routes: Routes = [
  {
    path: '',
    component: VehiculosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
