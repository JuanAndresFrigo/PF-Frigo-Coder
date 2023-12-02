import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
  imports: [CommonModule, MatSelectModule, FormsModule, MatFormFieldModule, MatInputModule],
})
export class DropdownModule {}
