import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailComponent } from './course-detail.component';
import { GenericCardModule } from 'src/app/components/generic-card/generic-card.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CourseDetailComponent],
  exports: [CourseDetailComponent],
  imports: [
    CommonModule,
    CourseDetailRoutingModule,
    GenericCardModule,
    ButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
  ],
})
export class CourseDetailModule {}
