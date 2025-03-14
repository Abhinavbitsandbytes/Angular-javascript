import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirComponentComponent } from './dir-component.component';

describe('DirComponentComponent', () => {
  let component: DirComponentComponent;
  let fixture: ComponentFixture<DirComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
