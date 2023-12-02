import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrrollmentsActions } from './enrrollments.actions';
import { Enrrollment } from 'src/app/interfaces/enrrollment.interface';
import { Course } from 'src/app/interfaces/course.interface';
import { User } from 'src/app/interfaces/user.interface';

export const enrrollmentsFeatureKey = 'enrrollments';

export interface State {
  enrrollments: Enrrollment[];
  error: unknown;
  courseOptions: Course[];
  studentOptions: User[];
}

export const initialState: State = {
  enrrollments: [],
  error: null,
  courseOptions: [],
  studentOptions: [],
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
  })),

  on(EnrrollmentsActions.loadEnrollmentDialogOptions, (state) => ({
    ...state,
  })),
  on(
    EnrrollmentsActions.loadEnrollmentDialogOptionsSuccess,
    (state, action) => ({
      ...state,
      courseOptions: action.courses,
      studentOptions: action.students,
    })
  ),
  on(
    EnrrollmentsActions.loadEnrollmentDialogOptionsFailure,
    (state, action) => ({ ...state, error: action.error })
  )
);

export const enrrollmentsFeature = createFeature({
  name: enrrollmentsFeatureKey,
  reducer,
});
