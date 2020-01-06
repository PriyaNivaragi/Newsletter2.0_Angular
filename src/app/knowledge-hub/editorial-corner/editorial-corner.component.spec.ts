import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialCornerComponent } from './editorial-corner.component';

describe('EditorialCornerComponent', () => {
  let component: EditorialCornerComponent;
  let fixture: ComponentFixture<EditorialCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
