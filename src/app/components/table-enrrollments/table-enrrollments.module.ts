import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableEnrrollmentsComponent } from './table-enrrollments.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FullnameModule } from 'src/app/pipes/fullname/fullname.module';

@NgModule({
  declarations: [TableEnrrollmentsComponent],
  exports: [TableEnrrollmentsComponent],
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, FullnameModule],
})
export class TableEnrrollmentsModule {}
