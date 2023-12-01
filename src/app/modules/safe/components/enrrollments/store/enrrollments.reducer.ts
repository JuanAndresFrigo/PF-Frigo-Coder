import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrrollmentsActions } from './enrrollments.actions';
import { Enrrollment } from 'src/app/interfaces/enrrollment.interface';

export const enrrollmentsFeatureKey = 'enrrollments';

export interface State {
  enrrollments: Enrrollment[];
  error: unknown;
}

export const initialState: State = {
  enrrollments: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(EnrrollmentsActions.loadEnrrollmentss, (state) => ({ ...state })),
  on(EnrrollmentsActions.loadEnrrollmentssSuccess, (state, { data }) => ({
    ...state,
    enrrollments: data,
  })),
  on(EnrrollmentsActions.loadEnrrollmentssFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const enrrollmentsFeature = createFeature({
  name: enrrollmentsFeatureKey,
  reducer,
});
