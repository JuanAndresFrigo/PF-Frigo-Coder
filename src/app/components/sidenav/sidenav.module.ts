import { NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    ButtonModule
  ],
})
export class SidenavModule {}
