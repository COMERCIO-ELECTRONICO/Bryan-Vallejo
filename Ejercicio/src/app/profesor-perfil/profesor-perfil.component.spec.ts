import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorPerfilComponent } from './profesor-perfil.component';

describe('ProfesorPerfilComponent', () => {
  let component: ProfesorPerfilComponent;
  let fixture: ComponentFixture<ProfesorPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
