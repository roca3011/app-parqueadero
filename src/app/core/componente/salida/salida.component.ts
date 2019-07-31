import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router';
import { Factura } from 'src/app/shared/modelos/factura';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {
  public titulo: string;
  public placaInput: string;
  public factura: Factura;
  public path: string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Registrar salida';
    this.path = '/factura/';
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.placaInput);
    this._router.navigate([this.path + this.placaInput]);
  }

}
