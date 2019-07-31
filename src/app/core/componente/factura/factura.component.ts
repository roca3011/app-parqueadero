import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacturaService } from 'src/app/shared/servicios/factura.service';
import { Factura } from 'src/app/shared/modelos/factura';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  providers: [FacturaService]
})
export class FacturaComponent implements OnInit {
  public titulo: string;
  public factura: Factura;
  public errorMsg;
  placa: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _facturaService: FacturaService,
    private toast: ToastrService
  ) {
    this.titulo = 'Factura';
  }

  ngOnInit() {
    console.log('Componente factura cargado..');
    this.getFactura();
  }

  getFactura() {
     this._route.params.subscribe(
      (params: Params) => {
        this.placa = params.idVehiculo;
      }
    );
    //forEach((params: Params) => {
      //console.log(this._route.params);
      //const placa = params['idVehiculo'];

      this._facturaService.getFactura(this.placa).subscribe(
        result => {
          this.factura = result;
          this.toast.success("Factura generada")
        },
        error => {
          this.toast.error(`Mensaje de error: ${error.error.mensaje}`)
        }
      );
    //});
  }
}
