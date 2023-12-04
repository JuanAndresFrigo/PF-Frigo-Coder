import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersMainComponent } from './users-main.component';

const routes: Routes = [
  {
    path: '',
    component: UsersMainComponent,
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
export class UsersMainRoutingModule {}
