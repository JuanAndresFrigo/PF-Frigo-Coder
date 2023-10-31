import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeRoutingModule } from './safe-routing.module';
import { MainModule } from './main/main.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SafeRoutingModule,
    MainModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

  ],
})
export class SafeModule {}
