import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/user.interface';


export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Set Auth User': props<{ data: User }>(),
    'Reset State': emptyProps(),
  },
});
