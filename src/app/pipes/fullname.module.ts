import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './fullname.pipe';

@NgModule({
  declarations: [FullnamePipe],
  exports: [FullnamePipe],
  imports: [CommonModule],
})
export class FullnameModule {}
