import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'safe',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/safe/safe.module').then((m) => m.SafeModule),
  },
  {
    path: 'unsafe',
    loadChildren: () =>
      import('./modules/unsafe/unsafe.module').then((m) => m.UnsafeModule),
  },
  {
    path: '**',
    redirectTo: 'unsafe',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
