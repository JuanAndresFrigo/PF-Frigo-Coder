import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { TableModule } from 'src/app/components/table/table.module';

@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [CommonModule, TableModule],
})
export class UsersModule {}
