import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course, CourseClass } from 'src/app/interfaces/course.interface';
import { ClassesService } from '../../../services/classes.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss'],
  providers: [ClassesService],
})
export class CourseDialogComponent {
  public courseForm: FormGroup;
  public classeslist?: Observable<CourseClass[]>;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CourseDialogComponent>,
    private classesService: ClassesService,
    @Inject(MAT_DIALOG_DATA) public course?: Course
  ) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      classes: ['', Validators.required],
    });

    if (this.course) {
      this.courseForm.patchValue(this.course);
      this.courseForm.controls['classes'].setValue(null);
    }

    this.getClasses();
  }

  public onCancelClick() {}

  public onSaveClick(): void {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.courseForm.value);
    }
  }

  private getClasses() {
    this.classeslist = this.classesService.getClasses().pipe(take(1));
  }

  public testeo(items: any) {
    const selectedItems: CourseClass[] = items.selected.map(
      (items: any) => items.value
    );
    this.courseForm.controls['classes'].setValue(selectedItems);
  }
}
