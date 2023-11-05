import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { GenericCardModule } from 'src/app/components/generic-card/generic-card.module';

@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, GenericCardModule],
})
export class RegisterModule {}
