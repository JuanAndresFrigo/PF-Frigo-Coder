import { NgModule } from '@angular/core';
import { FullnamePipe } from './fullname.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FullnamePipe],
  exports: [FullnamePipe],
  imports: [CommonModule],
})
export class FullnameModule {}
