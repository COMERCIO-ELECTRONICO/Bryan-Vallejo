import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioInicioComponent } from './usuario-inicio.component';

describe('UsuarioInicioComponent', () => {
  let component: UsuarioInicioComponent;
  let fixture: ComponentFixture<UsuarioInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
