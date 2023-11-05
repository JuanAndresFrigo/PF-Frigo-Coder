import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'safe',
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
