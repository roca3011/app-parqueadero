import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Rutas
import { routing, appRoutingProviders } from './app.routing';
import { InicioComponent } from './core/componente/inicio/inicio.component';
import { RegistroComponent } from './core/componente/registro/registro.component';
import { FacturaComponent } from './core/componente/factura/factura.component';
import { SalidaComponent } from './core/componente/salida/salida.component';
import { ErrorComponent } from './shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ErrorComponent,
    RegistroComponent,
    FacturaComponent,
    SalidaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule, BrowserModule, FormsModule,
    ToastrModule.forRoot({})
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
