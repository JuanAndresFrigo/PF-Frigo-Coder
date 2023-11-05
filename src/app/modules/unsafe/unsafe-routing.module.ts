import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsafeMainComponent } from './unsafe-main/unsafe-main.component';

const routes: Routes = [
  {
    path: '',
    component: UnsafeMainComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
      {
        path: '**',
        redirectTo: 'login',
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
export class UnsafeRoutingModule {}
