import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Factura } from '../modelos/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  public url:string;

  constructor(
    public _http:HttpClient
  ) {
    this.url =environment.apiUrl;
  }

  getFactura(placa): Observable<Factura>{
    return this._http.get<Factura>(`${this.url}/vehiculo/factura/${placa}`);
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || 'Server error');
  }

}
