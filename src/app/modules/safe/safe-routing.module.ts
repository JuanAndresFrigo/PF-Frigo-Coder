import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '', //main
    component: MainComponent,
    children: [
      {
        path: 'users', //main/users
        loadChildren: () =>
          import('./components/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'courses', //main/courses
        loadChildren: () =>
          import('./components/courses/courses.module').then(
            (m) => m.CoursesModule
          ),
      },
      {
        path: 'enrrollments', //main/enrrollments
        loadChildren: () =>
          import('./components/enrrollments/enrrollments.module').then(
            (m) => m.EnrrollmentsModule
          ),
      },
      {
        path: '**',
        redirectTo: 'users',
      },
    ],
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
export class SafeRoutingModule {}
