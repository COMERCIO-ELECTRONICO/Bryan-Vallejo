import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeberComponent } from './deber.component';

describe('DeberComponent', () => {
  let component: DeberComponent;
  let fixture: ComponentFixture<DeberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
