import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('./user-main/users-main.module').then(
            (m) => m.UsersMainModule
          ),
      },
      {
        path: 'detail/:id',
        loadChildren: () =>
          import('./user-detail/user-detail.module').then(
            (m) => m.UserDetailModule
          ),
      },
      {
        path: '**',
        redirectTo: 'main',
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
export class UsersRoutingModule {}
