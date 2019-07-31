import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//componentes
import { InicioComponent } from './core/componente/inicio/inicio.component';
import { RegistroComponent } from './core/componente/registro/registro.component';
import { SalidaComponent } from './core/componente/salida/salida.component';
import { FacturaComponent } from './core/componente/factura/factura.component';
import { ErrorComponent } from './shared/error/error.component';

const appRoutes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},
  //{ path: 'vehiculos', component: VehiculosComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'factura', component: SalidaComponent},
  { path: 'factura/:idVehiculo', component: FacturaComponent},
  { path: 'vehiculos', loadChildren: () => import ('./vehiculos/vehiculos.module').then(mod => mod.VehiculosModule)},
  { path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
