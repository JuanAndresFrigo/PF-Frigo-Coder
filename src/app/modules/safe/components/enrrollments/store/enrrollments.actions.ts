import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Enrrollment } from 'src/app/interfaces/enrrollment.interface';

export const EnrrollmentsActions = createActionGroup({
  source: 'Enrrollments',
  events: {
    'Load Enrrollmentss': emptyProps(),
    'Load Enrrollmentss Success': props<{ data: Enrrollment[] }>(),
    'Load Enrrollmentss Failure': props<{ error: unknown }>(),
  },
});
