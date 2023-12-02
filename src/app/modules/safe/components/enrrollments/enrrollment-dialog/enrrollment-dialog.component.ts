import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Course } from 'src/app/interfaces/course.interface';
import { User } from 'src/app/interfaces/user.interface';
import { EnrrollmentsActions } from '../store/enrrollments.actions';
import {
  selectCourseOptions,
  selectStudentOptions,
} from '../store/enrrollments.selectors';
import { Enrrollment } from 'src/app/interfaces/enrrollment.interface';

@Component({
  selector: 'app-enrrollment-dialog',
  templateUrl: './enrrollment-dialog.component.html',
  styleUrls: ['./enrrollment-dialog.component.scss'],
})
export class EnrrollmentDialogComponent {
  public enrrollmentForm: FormGroup;
  public courseOptions$: Observable<Course[]>;
  public studentOptions$: Observable<User[]>;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<EnrrollmentDialogComponent>,
    private action$: Actions,
    private store: Store,
    @Inject(MAT_DIALOG_DATA
      ) public enrrollment?: Enrrollment
  ) {
    this.enrrollmentForm = this.fb.group({
      id: [null],
      courseId: [null, Validators.required],
      userId: [null, Validators.required],
    });

    if (this.enrrollment) {
      this.enrrollmentForm.patchValue(this.enrrollment);
    }

    this.store.dispatch(EnrrollmentsActions.loadEnrollmentDialogOptions());
    this.courseOptions$ = this.store.select(selectCourseOptions);
    this.studentOptions$ = this.store.select(selectStudentOptions);

    this.action$
      .pipe(ofType(EnrrollmentsActions.loadEnrrollmentss), take(1))
      .subscribe({
        next: () => this.matDialogRef.close(),
      });
  }

  public get courseControl(){
    return this.enrrollmentForm.controls['courseId'].value
  }

  public get userControl(){
    return this.enrrollmentForm.controls['userId'].value
  }

  public onSelectCourse(course: number) {
    this.enrrollmentForm.controls['courseId'].setValue(course);
  }
  public onSelectStudent(student: number) {
    this.enrrollmentForm.controls['userId'].setValue(student);
  }

  public onCancelClick() {
    this.matDialogRef.close();
  }

  public onSaveClick(): void {
    this.store.dispatch(
      EnrrollmentsActions.createEnrollment({
        payload: this.enrrollmentForm.getRawValue(),
      })
    );
  }

  public onEditClick(): void {
    this.store.dispatch(
      EnrrollmentsActions.editEnrollment({
        payload: this.enrrollmentForm.getRawValue(),
      })
    );
  }
}
