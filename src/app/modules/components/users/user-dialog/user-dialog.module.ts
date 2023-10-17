import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDialogComponent } from './user-dialog.component';

@NgModule({
  declarations: [UserDialogComponent],
  exports: [UserDialogComponent],
  imports: [
    CommonModule,
  ],
})
export class UserDialogModule {}
