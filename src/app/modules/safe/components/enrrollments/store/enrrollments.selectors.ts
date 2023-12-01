import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrrollments from './enrrollments.reducer';

export const selectEnrrollmentsState =
  createFeatureSelector<fromEnrrollments.State>(
    fromEnrrollments.enrrollmentsFeatureKey
  );
