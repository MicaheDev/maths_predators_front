import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailViewComponent } from './course-detail-view.component';

describe('CourseDetailViewComponent', () => {
  let component: CourseDetailViewComponent;
  let fixture: ComponentFixture<CourseDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDetailViewComponent]
    });
    fixture = TestBed.createComponent(CourseDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
