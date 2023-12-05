import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMainComponent } from './course-main.component';
import { CourseService } from '../../../services/course.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CourseMainRoutingModule } from './course-main-routing.module';
import { MatDialog } from '@angular/material/dialog';

xdescribe('CourseMainComponent', () => {
  let component: CourseMainComponent;
  let fixture: ComponentFixture<CourseMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMainComponent],
      imports:[HttpClientTestingModule, CourseMainRoutingModule],
      providers: [CourseService, MatDialog],
    });
    fixture = TestBed.createComponent(CourseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
