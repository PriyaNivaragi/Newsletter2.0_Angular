import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtWritingComponent } from './art-writing.component';

describe('ArtWritingComponent', () => {
  let component: ArtWritingComponent;
  let fixture: ComponentFixture<ArtWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
