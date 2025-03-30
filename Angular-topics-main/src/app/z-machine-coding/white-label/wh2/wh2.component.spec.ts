import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wh2Component } from './wh2.component';

describe('Wh2Component', () => {
  let component: Wh2Component;
  let fixture: ComponentFixture<Wh2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wh2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wh2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
