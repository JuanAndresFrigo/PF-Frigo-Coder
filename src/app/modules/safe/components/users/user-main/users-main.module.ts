import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMainComponent } from './users-main.component';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { TableModule } from 'src/app/components/table/table.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormErrorsModule } from 'src/app/pipes/form-errors/form-errors.module';
import { RadioButtonModule } from 'src/app/components/radio-button/radio-button.module';
import { UsersMainRoutingModule } from './users-main-routing.module';

@NgModule({
  declarations: [UsersMainComponent, UserDialogComponent],
  exports: [UsersMainComponent],
  imports: [
    CommonModule,
    UsersMainRoutingModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormErrorsModule,
    RadioButtonModule,
  ],
})
export class UsersMainModule {}
