import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseMainComponent } from './course-main.component';

const routes: Routes = [
  {
    path: '',
    component: CourseMainComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseMainRoutingModule {}
