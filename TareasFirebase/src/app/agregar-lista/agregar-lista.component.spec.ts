import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarListaComponent } from './agregar-lista.component';

describe('AgregarListaComponent', () => {
  let component: AgregarListaComponent;
  let fixture: ComponentFixture<AgregarListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
