import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceQuizComponent } from './insurance-quiz.component';

describe('InsuranceQuizComponent', () => {
  let component: InsuranceQuizComponent;
  let fixture: ComponentFixture<InsuranceQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
