import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { TableModule } from 'src/app/components/table/table.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [CommonModule, TableModule, ButtonModule, MatDialogModule,],
})
export class UsersModule {}
