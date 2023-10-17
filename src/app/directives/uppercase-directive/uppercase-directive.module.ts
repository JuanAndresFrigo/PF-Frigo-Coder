import { NgModule } from '@angular/core';
import { UppercaseDirectiveDirective } from './uppercase-directive.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UppercaseDirectiveDirective],
  exports: [UppercaseDirectiveDirective],
  imports: [CommonModule],
})
export class UppercaseDirectiveModule {}
