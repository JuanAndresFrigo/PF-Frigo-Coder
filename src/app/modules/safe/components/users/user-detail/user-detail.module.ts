import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { UsersDetailRoutingModule } from './users-detail-routing.module';
import { GenericCardModule } from 'src/app/components/generic-card/generic-card.module';
import { TableModule } from 'src/app/components/table/table.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormErrorsModule } from 'src/app/pipes/form-errors/form-errors.module';
import { MatListModule } from '@angular/material/list';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  declarations: [UserDetailComponent],
  exports: [UserDetailComponent],
  imports: [
    CommonModule,
    UsersDetailRoutingModule,
    GenericCardModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormErrorsModule,
    MatListModule,
  ],
})
export class UserDetailModule {}
