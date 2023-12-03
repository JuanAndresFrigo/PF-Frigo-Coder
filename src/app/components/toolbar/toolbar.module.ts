import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { FullnameModule } from 'src/app/pipes/fullname/fullname.module';


@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, FullnameModule],
  providers:[AuthService]
})
export class ToolbarModule {}
