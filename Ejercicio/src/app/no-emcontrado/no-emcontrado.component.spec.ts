import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEmcontradoComponent } from './no-emcontrado.component';

describe('NoEmcontradoComponent', () => {
  let component: NoEmcontradoComponent;
  let fixture: ComponentFixture<NoEmcontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEmcontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEmcontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
