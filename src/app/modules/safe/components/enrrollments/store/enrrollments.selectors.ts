import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrrollments from './enrrollments.reducer';

export const selectEnrrollmentsState =
  createFeatureSelector<fromEnrrollments.State>(
    fromEnrrollments.enrrollmentsFeatureKey
  );

export const selectEnrollments = createSelector(
  selectEnrrollmentsState,
  (state) => state.enrrollments
);

export const selectCourseOptions = createSelector(
  selectEnrrollmentsState,
  (state) => state.courseOptions
);

export const selectStudentOptions = createSelector(
  selectEnrrollmentsState,
  (state) => state.studentOptions
);
