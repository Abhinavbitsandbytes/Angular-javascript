import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdChildComponent } from './cd-child.component';

describe('CdChildComponent', () => {
  let component: CdChildComponent;
  let fixture: ComponentFixture<CdChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
