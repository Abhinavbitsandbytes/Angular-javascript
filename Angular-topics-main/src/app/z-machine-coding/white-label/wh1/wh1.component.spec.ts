import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wh1Component } from './wh1.component';

describe('Wh1Component', () => {
  let component: Wh1Component;
  let fixture: ComponentFixture<Wh1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wh1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
