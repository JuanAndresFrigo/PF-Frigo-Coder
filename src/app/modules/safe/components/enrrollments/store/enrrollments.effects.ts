import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrrollmentsActions } from './enrrollments.actions';
import { EnrrollmentsService } from '../../../services/enrrollments.service';

@Injectable()
export class EnrrollmentsEffects {
  loadEnrrollmentss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrrollmentsActions.loadEnrrollmentss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.enrrollmentService.getEnrrollments().pipe(
          map((data) => EnrrollmentsActions.loadEnrrollmentssSuccess({ data })),
          catchError((error) =>
            of(EnrrollmentsActions.loadEnrrollmentssFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private enrrollmentService: EnrrollmentsService) {}
}
