import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkBlogComponent } from './think-blog.component';

describe('ThinkBlogComponent', () => {
  let component: ThinkBlogComponent;
  let fixture: ComponentFixture<ThinkBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinkBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
