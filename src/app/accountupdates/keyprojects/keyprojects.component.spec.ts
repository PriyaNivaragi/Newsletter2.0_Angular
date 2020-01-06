import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyprojectsComponent } from './keyprojects.component';

describe('KeyprojectsComponent', () => {
  let component: KeyprojectsComponent;
  let fixture: ComponentFixture<KeyprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
