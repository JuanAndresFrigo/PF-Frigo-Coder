import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [RadioButtonComponent],
  exports: [RadioButtonComponent],
  imports: [CommonModule, MatRadioModule],
})
export class RadioButtonModule {}
