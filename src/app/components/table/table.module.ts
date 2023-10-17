import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FullnameModule } from 'src/app/pipes/fullname.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UppercaseDirectiveModule } from 'src/app/directives/uppercase-directive/uppercase-directive.module';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    FullnameModule,
    MatButtonModule,
    MatIconModule,
    UppercaseDirectiveModule
  ],
})
export class TableModule {}
