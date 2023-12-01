import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrrollmentsComponent } from './enrrollments.component';
import { EnrrollmentsRoutingModule } from './enrrollments-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { enrrollmentsFeature } from './store/enrrollments.reducer';
import { EnrrollmentsEffects } from './store/enrrollments.effects';
import { EnrrollmentsService } from '../../services/enrrollments.service';

@NgModule({
  declarations: [EnrrollmentsComponent],
  exports: [EnrrollmentsComponent],
  imports: [
    CommonModule,
    EnrrollmentsRoutingModule,
    StoreModule.forFeature(enrrollmentsFeature),
    EffectsModule.forFeature([EnrrollmentsEffects]),
  ],
  providers:[EnrrollmentsService]
})
export class EnrrollmentsModule {}
