import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [CoursesComponent],
  exports: [CoursesComponent],
  imports: [CommonModule],
})
export class CoursesModule {}
