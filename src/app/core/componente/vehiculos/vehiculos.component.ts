import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VehiculoService } from 'src/app/shared/servicios/vehiculo.service';
import { VehiculosActivos } from 'src/app/shared/modelos/vehiculosActivos';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css'],
  providers: [VehiculoService]
})
export class VehiculosComponent implements OnInit {

  public titulo: string;
  public vehiculosActivos: VehiculosActivos[];
  public errorMsg;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _vehiculoService: VehiculoService,
    private toast: ToastrService
  ) {
    this.titulo = "Vehiculos activos";
  }

  ngOnInit() {
   this._vehiculoService.getVehiculosActivos().subscribe(
     result => {
       console.log(result);
        this.vehiculosActivos = result;
        //this.toast.success("Vehiculos activos: " + this.vehiculosActivos.length)
     },
     error => {
        console.log(<any>error);
        this.errorMsg = error.mensaje;
        this.toast.error("Mensaje de error: " + error.error.mensaje)
     }
   );
  }

}
