import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdParentComponent } from './cd-parent.component';

describe('CdParentComponent', () => {
  let component: CdParentComponent;
  let fixture: ComponentFixture<CdParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
