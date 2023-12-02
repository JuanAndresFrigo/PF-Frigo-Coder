import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EnrrollmentsActions } from './enrrollments.actions';
import { EnrrollmentsService } from '../../../services/enrrollments.service';

@Injectable()
export class EnrrollmentsEffects {
  // CARGA DE INSCRIPCIONES
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

  // CARGA DE OPCIONES DEL DIALOG
  loadEnrollmentDialogOptions$ = createEffect(() =>
    this.actions$.pipe(
      // FILTRO LAS ACCIONES loadEnrollmentDialogOptions
      ofType(EnrrollmentsActions.loadEnrollmentDialogOptions),
      concatMap(() =>
        this.enrrollmentService.getEnrollmentDialogOptions().pipe(
          map((resp) =>
            // SI SALE BIEN loadEnrollmentDialogOptionsSuccess
            EnrrollmentsActions.loadEnrollmentDialogOptionsSuccess(resp)
          ),
          catchError((err) =>
            of(
              EnrrollmentsActions.loadEnrollmentDialogOptionsFailure({
                error: err,
              })
            )
          )
        )
      )
    )
  );

  // NUEVA INSCRIPCION
  createEnrollment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrrollmentsActions.createEnrollment),
      concatMap((action) => {
        return this.enrrollmentService.createEnrollment(action.payload).pipe(
          // Si sale bien
          map((data) => EnrrollmentsActions.loadEnrrollmentss()),
          // Si hay error
          catchError((error) =>
            of(EnrrollmentsActions.createEnrollmentFailure({ error }))
          )
        );
      })
    )
  );

  // EDITAR INSCRIPCION
  editEnrollment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrrollmentsActions.editEnrollment),
      concatMap((action) => {
        return this.enrrollmentService.editEnrollment(action.payload).pipe(
          // Si sale bien
          map((data) => EnrrollmentsActions.loadEnrrollmentss()),
          // Si hay error
          catchError((error) =>
            of(EnrrollmentsActions.editEnrollmentFailure({ error }))
          )
        );
      })
    )
  );

  // BORRAR INSCRIPCION
  deleteEnrollment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrrollmentsActions.deleteEnrollment),
      concatMap((action) => {
        return this.enrrollmentService.deleteEnrollment(action.payload).pipe(
          // Si sale bien
          map((data) => EnrrollmentsActions.loadEnrrollmentss()),
          // Si hay error
          catchError((error) =>
            of(EnrrollmentsActions.deleteEnrollmentFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private enrrollmentService: EnrrollmentsService
  ) {}
}
