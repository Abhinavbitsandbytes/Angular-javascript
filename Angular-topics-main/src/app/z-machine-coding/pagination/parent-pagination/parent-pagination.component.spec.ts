import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPaginationComponent } from './parent-pagination.component';

describe('ParentPaginationComponent', () => {
  let component: ParentPaginationComponent;
  let fixture: ComponentFixture<ParentPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
