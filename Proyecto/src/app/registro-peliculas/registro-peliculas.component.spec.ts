import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPeliculasComponent } from './registro-peliculas.component';

describe('RegistroPeliculasComponent', () => {
  let component: RegistroPeliculasComponent;
  let fixture: ComponentFixture<RegistroPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
