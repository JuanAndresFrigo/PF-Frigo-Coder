import { NgModule } from '@angular/core';
import { FormErrorsPipe } from './form-errors.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FormErrorsPipe],
  exports: [FormErrorsPipe],
  imports: [CommonModule],
})
export class FormErrorsModule {}
