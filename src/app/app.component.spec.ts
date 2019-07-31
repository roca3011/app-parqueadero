import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('Obtiene el valor del titulo'), () =>{
    const appComponent = new AppComponent();
    const valor = appComponent.title;
    expect(valor).toEqual('CeibaPar');

  }

});
