import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './components/users/users.component';

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
        path: '**',
        redirectTo: 'users',
      },
    ],
  },
  // {
  //   path: 'main',
  //   loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  // },
  // {
  //   path: 'courses',
  //   loadChildren: () =>
  //     import('./components/courses/courses.module').then(
  //       (m) => m.CoursesModule
  //     ),
  // },
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
