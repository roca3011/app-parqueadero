import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TrmService } from 'src/app/shared/servicios/trm.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [TrmService]
})
export class InicioComponent implements OnInit {

  public titulo: string;
  public trm: string;

  constructor(
    private _trmService: TrmService,
  ) {
    this.titulo = "Bienvenido a Ceiba parqueadero";
   }

  ngOnInit() {
    /*this._trmService.getTrm().subscribe(
      result => {
        console.log(result);
        this._trmService = result;
      },
      error => {
        console.log("Error---"+<any>error);
      }
    )*/
  }

}
