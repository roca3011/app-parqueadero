import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Vehiculo } from './../modelos/vehiculo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  public url:string;

  constructor(
    public _http:HttpClient
  ) {
    this.url = environment.apiUrl;
  }

  addVehiculo(vehiculo: Vehiculo){
    let json = JSON.stringify(vehiculo);
    let params = json;
    let headers = new HttpHeaders().set('Content-Type','application/json;charset=UTF-8');

    return this._http.post(this.url, params, {headers:headers})
                      .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || 'Server error');
  }
}
