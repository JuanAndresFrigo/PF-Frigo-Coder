import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course } from 'src/app/interfaces/course.interface';
import {
  CreateEnrollmentPayload,
  Enrrollment,
} from 'src/app/interfaces/enrrollment.interface';
import { User } from 'src/app/interfaces/user.interface';

export const EnrrollmentsActions = createActionGroup({
  source: 'Enrrollments',
  events: {
    'Load Enrrollmentss': emptyProps(),
    'Load Enrrollmentss Success': props<{ data: Enrrollment[] }>(),
    'Load Enrrollmentss Failure': props<{ error: unknown }>(),

    'Load Enrollment Dialog Options': emptyProps(),
    'Load Enrollment Dialog Options Success': props<{
      courses: Course[];
      students: User[];
    }>(),
    'Load Enrollment Dialog Options Failure': props<{ error: unknown }>(),

    'Create Enrollment': props<{ payload: CreateEnrollmentPayload }>(),
    'Create Enrollment Failure': props<{ error: unknown }>(),

    'Edit Enrollment': props<{ payload: Enrrollment }>(),
    'Edit Enrollment Failure': props<{ error: unknown }>(),

    'Delete Enrollment': props<{ payload: Enrrollment }>(),
    'Delete Enrollment Failure': props<{ error: unknown }>(),
  },
});
