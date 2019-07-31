import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { VehiculosComponent } from './vehiculos.component';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';
import { ToastrService } from 'ngx-toastr';

fdescribe('VehiculosComponent', () => {

  let injector:TestBed

  //Simular solicitudes HTTP
  let httpMock:HttpTestingController

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosComponent ],
      imports : [
        ActivatedRoute,
        Router,
        ToastrService,
        HttpClientTestingModule
      ],
      providers: [{VehiculoService}]

    })
    .compileComponents();
    //Tener acceso a las variables limpias antes de cada it()
    injector = getTestBed()
    httpMock = injector.get(HttpTestingController)
  }));

  afterEach(()=>{

    //Verificamos que no haya solicitudes pendientes
    httpMock.verify()
  })

  /*beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  fit('Obtiene el valor del titulo'), () =>{
    const component:VehiculosComponent = TestBed.get(VehiculosComponent);
    const valor = component.titulo.length;
    console.log(valor);
    expect(valor).toBe(3);

  }


});
