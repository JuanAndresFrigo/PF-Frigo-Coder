import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrrollmentsComponent } from './enrrollments.component';
import { EnrrollmentsRoutingModule } from './enrrollments-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { enrrollmentsFeature } from './store/enrrollments.reducer';
import { EnrrollmentsEffects } from './store/enrrollments.effects';
import { EnrrollmentsService } from '../../services/enrrollments.service';
import { TableEnrrollmentsModule } from 'src/app/components/table-enrrollments/table-enrrollments.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { EnrrollmentDialogComponent } from './enrrollment-dialog/enrrollment-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormErrorsModule } from 'src/app/pipes/form-errors/form-errors.module';
import { DropdownModule } from 'src/app/components/dropdown/dropdown.module';

@NgModule({
  declarations: [EnrrollmentsComponent, EnrrollmentDialogComponent],
  exports: [EnrrollmentsComponent],
  imports: [
    CommonModule,
    EnrrollmentsRoutingModule,
    StoreModule.forFeature(enrrollmentsFeature),
    EffectsModule.forFeature([EnrrollmentsEffects]),
    TableEnrrollmentsModule,
    ButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormErrorsModule,
    DropdownModule
  ],
  providers: [EnrrollmentsService],
})
export class EnrrollmentsModule {}
