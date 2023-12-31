import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [CoursesComponent],
  exports: [CoursesComponent],
  imports: [CommonModule, CoursesRoutingModule],
})
export class CoursesModule {}
