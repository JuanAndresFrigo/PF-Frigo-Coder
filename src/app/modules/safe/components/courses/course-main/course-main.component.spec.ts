import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMainComponent } from './course-main.component';
import { CourseService } from '../../../services/course.service';

describe('CourseMainComponent', () => {
  let component: CourseMainComponent;
  let fixture: ComponentFixture<CourseMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMainComponent],
      providers: [CourseService],
    });
    fixture = TestBed.createComponent(CourseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
