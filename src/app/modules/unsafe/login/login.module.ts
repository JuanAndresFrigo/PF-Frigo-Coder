import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardModule } from 'src/app/components/generic-card/generic-card.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormErrorsModule } from 'src/app/pipes/form-errors/form-errors.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    GenericCardModule,
    ReactiveFormsModule,
    FormErrorsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonModule,
    MatButtonModule
  ],
})
export class LoginModule {}
