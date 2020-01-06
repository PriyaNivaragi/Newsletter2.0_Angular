import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YummyTummyComponent } from './yummy-tummy.component';

describe('YummyTummyComponent', () => {
  let component: YummyTummyComponent;
  let fixture: ComponentFixture<YummyTummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YummyTummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YummyTummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
