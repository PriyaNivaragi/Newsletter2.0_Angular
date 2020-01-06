import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBeesComponent } from './new-bees.component';

describe('NewBeesComponent', () => {
  let component: NewBeesComponent;
  let fixture: ComponentFixture<NewBeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
