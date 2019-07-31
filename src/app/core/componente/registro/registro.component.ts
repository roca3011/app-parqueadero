import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistroService } from 'src/app/shared/servicios/registro.service';
import { VehiculoService } from 'src/app/shared/servicios/vehiculo.service';
import { Vehiculo } from 'src/app/shared/modelos/Vehiculo';
import { TipoVehiculo } from 'src/app/shared/modelos/tipoVehiculo';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [RegistroService, VehiculoService]
})
export class RegistroComponent implements OnInit {

  public titulo: string;
  public vehiculo: Vehiculo;
  public tipoVehiculo: TipoVehiculo;
  public tiposVehiculo: Array<TipoVehiculo>;
  public message: string;

  constructor(
    private _registroService: RegistroService,
    private _vehiculoService: VehiculoService,
    private _route: ActivatedRoute,
    private _router: Router,
    private toast: ToastrService
  ) {
    this.titulo = 'Registrar entrada';
    this.vehiculo = new Vehiculo(null, null, 0, '', null);
  }

  ngOnInit() {
    console.log('vehiculo.component.ts cargando..');
    this.getVehicleType();
  }

  onSubmit(form) {
    console.log(this.vehiculo);
    this.validateVehicleType(this.vehiculo.tipoVehiculo);
    this._registroService.addVehiculo(this.vehiculo).subscribe(
      response => {
        this.toast.success("Se registro el vehiculo con placa: " + this.vehiculo.placa);
        this.message = "Se registro el vehiculo con placa: " + this.vehiculo.placa;
        //this._router.navigate(['/vehiculos']);
      },
      error => {
        this.toast.error("Mensaje de error: " + error.error.mensaje);
        this.message = error.error.mensaje;
      }
    )
  }
  getVehicleType() {
    this._vehiculoService.getTiposVehiculo().subscribe(
      result => {
        console.log(result);
        let arregloTipos = result;
        this.tiposVehiculo = new Array();
        arregloTipos.forEach(element => {
          this.tiposVehiculo.push(new TipoVehiculo(element.idTipoVehiculo, element.descripcion));
        });
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  validateVehicleType(idTipoVehiculo) {
    if (idTipoVehiculo != null) {
      for (let index = 0; index < this.tiposVehiculo.length; index++) {
        const element = this.tiposVehiculo[index];
        if (element.idTipoVehiculo === parseInt(idTipoVehiculo)) {
          this.vehiculo.tipoVehiculo = element;
        }

      }
    }
  }
}
