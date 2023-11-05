import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsafeMainComponent } from './unsafe-main.component';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UnsafeMainComponent],
  exports: [UnsafeMainComponent],
  imports: [CommonModule, LoginModule, RegisterModule, RouterModule],
})
export class UnsafeMainModule {}
