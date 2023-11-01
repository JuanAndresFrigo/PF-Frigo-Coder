import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableCourseComponent } from './table-course.component';

@NgModule({
  declarations: [TableCourseComponent],
  exports: [TableCourseComponent],
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
})
export class TableCourseModule {}
