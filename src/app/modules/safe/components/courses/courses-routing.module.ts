import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children:[
      {
        path: 'main',
        loadChildren: () =>
          import('./course-main/course-main.module').then(
            (m) => m.CourseMainModule
          ),
      },
      {
        path: 'detail/:id',
        loadChildren: () =>
          import('./course-detail/course-detail.module').then(
            (m) => m.CourseDetailModule
          ),
      },
      {
        path: '**',
        redirectTo: 'main',
      },
    ]
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
export class CoursesRoutingModule {}
