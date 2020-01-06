import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingactivitiesComponent } from './ongoingactivities.component';

describe('OngoingactivitiesComponent', () => {
  let component: OngoingactivitiesComponent;
  let fixture: ComponentFixture<OngoingactivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingactivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
