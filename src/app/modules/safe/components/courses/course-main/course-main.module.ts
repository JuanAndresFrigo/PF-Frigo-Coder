import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CourseMainRoutingModule } from './course-main-routing.module';
import { CourseMainComponent } from './course-main.component';
import { TableCourseModule } from 'src/app/components/table-course/table-course.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormErrorsModule } from 'src/app/pipes/form-errors/form-errors.module';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [CourseMainComponent, CourseDialogComponent],
  exports: [CourseMainComponent],
  imports: [
    CommonModule,
    CourseMainRoutingModule,
    TableCourseModule,
    ButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormErrorsModule,
    MatListModule, NgFor
  ],
})
export class CourseMainModule {}
