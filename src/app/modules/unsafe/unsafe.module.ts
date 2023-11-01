import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsafeRoutingModule } from './unsafe-routing.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UnsafeRoutingModule,
    MatButtonModule,
    ButtonModule
  ]
})
export class UnsafeModule { }
