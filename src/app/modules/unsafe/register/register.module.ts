import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { GenericCardModule } from 'src/app/components/generic-card/generic-card.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormErrorsModule } from 'src/app/pipes/form-errors/form-errors.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    GenericCardModule,
    ReactiveFormsModule,
    FormErrorsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonModule,
    MatButtonModule
  ],
})
export class RegisterModule {}
