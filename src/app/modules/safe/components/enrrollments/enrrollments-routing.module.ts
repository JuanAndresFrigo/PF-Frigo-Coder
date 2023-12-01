import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrrollmentsComponent } from './enrrollments.component';

const routes: Routes = [
  {
    path: '',
    component: EnrrollmentsComponent,
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
export class EnrrollmentsRoutingModule {}
