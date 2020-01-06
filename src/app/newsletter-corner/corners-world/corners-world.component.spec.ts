import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornersWorldComponent } from './corners-world.component';

describe('CornersWorldComponent', () => {
  let component: CornersWorldComponent;
  let fixture: ComponentFixture<CornersWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornersWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornersWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
