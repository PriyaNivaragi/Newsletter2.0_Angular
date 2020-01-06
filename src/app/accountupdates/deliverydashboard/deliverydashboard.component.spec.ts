import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverydashboardComponent } from './deliverydashboard.component';

describe('DeliverydashboardComponent', () => {
  let component: DeliverydashboardComponent;
  let fixture: ComponentFixture<DeliverydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
