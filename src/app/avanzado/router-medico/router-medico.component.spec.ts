import { from, Observable } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter{
  navigate(params:any){ }
}

class FakeActivatedRoute{
  //params:Observable<any>=of(EMPTY);
  params:Observable<any> = from([{id:'nuevo'}]);
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        { provide:Router, useClass:FakeRouter},
        { provide:ActivatedRoute, useClass:FakeActivatedRoute},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a médico cuando se guarde', ()=>{

    const router = TestBed.inject(Router);
    const spy = spyOn( router, 'navigate' );

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  })

  it('Debe de colocar el id = nuevo', ()=>{

    component = fixture.componentInstance;
    const activatedRoute:FakeActivatedRoute=TestBed.inject(ActivatedRoute);

    expect(component.id).toBe('nuevo');
  })


});
