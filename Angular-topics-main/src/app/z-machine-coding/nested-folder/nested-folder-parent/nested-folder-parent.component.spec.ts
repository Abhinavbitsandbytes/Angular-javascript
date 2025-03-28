import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFolderParentComponent } from './nested-folder-parent.component';

describe('NestedFolderParentComponent', () => {
  let component: NestedFolderParentComponent;
  let fixture: ComponentFixture<NestedFolderParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedFolderParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFolderParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
