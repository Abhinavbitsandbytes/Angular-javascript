import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpurePipeCompComponent } from './impure-pipe-comp.component';

describe('ImpurePipeCompComponent', () => {
  let component: ImpurePipeCompComponent;
  let fixture: ComponentFixture<ImpurePipeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpurePipeCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpurePipeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
