import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPipeCompComponent } from './filter-pipe-comp.component';

describe('FilterPipeCompComponent', () => {
  let component: FilterPipeCompComponent;
  let fixture: ComponentFixture<FilterPipeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPipeCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPipeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
