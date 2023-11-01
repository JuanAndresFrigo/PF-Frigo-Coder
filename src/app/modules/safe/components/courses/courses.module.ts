import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { TableCourseModule } from 'src/app/components/table-course/table-course.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormErrorsModule } from 'src/app/pipes/form-errors/form-errors.module';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';

@NgModule({
  declarations: [CoursesComponent, CourseDialogComponent],
  exports: [CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    TableCourseModule,
    ButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormErrorsModule,
  ],
})
export class CoursesModule {}
