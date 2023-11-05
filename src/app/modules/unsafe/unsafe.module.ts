import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsafeRoutingModule } from './unsafe-routing.module';
import { RouterModule } from '@angular/router';
import { UnsafeMainModule } from './unsafe-main/unsafe-main.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UnsafeRoutingModule,
    UnsafeMainModule,
  ]
})
export class UnsafeModule { }
