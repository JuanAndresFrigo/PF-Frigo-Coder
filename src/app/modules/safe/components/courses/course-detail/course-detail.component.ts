import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course.interface';
import { CourseService } from '../../../services/course.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  providers: [CourseService],
})
export class CourseDetailComponent {
  public courseForm!: FormGroup;

  public courseToDetail?: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseservice: CourseService,
    private fb: FormBuilder,
    private roputer: Router
  ) {
    this.buildForm();
    this.getCourse();
  }

  private buildForm() {
    this.courseForm = this.fb.group({
      name: [''],
    });
  }

  private getCourse() {
    this.courseservice
      .getCourseById(+this.activatedRoute.snapshot.paramMap.get('id')!)
      .pipe(take(1))
      .subscribe((result) => {
        this.courseToDetail = result;
        this.fillForm();
      });
  }

  private fillForm() {
    if (this.courseToDetail) {
      this.courseForm.patchValue(this.courseToDetail);
    }
  }

  public onGoBack() {
    this.roputer.navigate(['safe/courses']);
  }
}
