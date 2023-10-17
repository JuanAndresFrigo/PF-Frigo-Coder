import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { TableModule } from 'src/app/components/table/table.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FormErrorsModule } from 'src/app/pipes/form-errors/form-errors.module';
@NgModule({
  declarations: [UsersComponent, UserDialogComponent],
  exports: [UsersComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormErrorsModule
  ],
})
export class UsersModule {}
