import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Vehiculo } from './../modelos/vehiculo';
import { VehiculosActivos } from '../modelos/vehiculosActivos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  public url: string;

  constructor(
    public _http:HttpClient
  ) {
    this.url = environment.apiUrl;
  }

  getVehiculos(): Observable<Vehiculo[]>{
    return this._http.get<Vehiculo[]>(`${this.url}/vehiculos`);
  }

  getTiposVehiculo(): Observable<any>{
    return this._http.get(`${this.url}/vehiculos/tipos_vehiculo`);
  }

  getVehiculosActivos(): Observable<VehiculosActivos[]>{
    return this._http.get<VehiculosActivos[]>(`${this.url}/vehiculos/activos`)
                      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || 'Server error');
  }
}
