import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TrmService {
  public url: string;

  constructor(
    public _http:HttpClient
  ) {
    this.url ="http://app.docm.co/prod/Dmservices/Utilities.svc/GetTRM";
    console.log("Servicio...");
  }

  /*getTrm(): Observable<any>{
    console.log("Servico trm...");
    return this._http.get(this.url);
  }*/
}
