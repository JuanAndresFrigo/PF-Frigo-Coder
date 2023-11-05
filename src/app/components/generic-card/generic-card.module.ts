import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardComponent } from './generic-card.component';
import {MatCardModule} from '@angular/material/card';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [GenericCardComponent],
  exports: [GenericCardComponent],
  imports: [CommonModule, MatCardModule, ButtonModule],
})
export class GenericCardModule {}
