import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrrollmentsActions } from './store/enrrollments.actions';
import { Observable } from 'rxjs';
import { Enrrollment } from 'src/app/interfaces/enrrollment.interface';
import { MatDialog } from '@angular/material/dialog';
import { EnrrollmentDialogComponent } from './enrrollment-dialog/enrrollment-dialog.component';
import { selectEnrollments } from './store/enrrollments.selectors';

@Component({
  selector: 'app-enrrollments',
  templateUrl: './enrrollments.component.html',
  styleUrls: ['./enrrollments.component.scss'],
})
export class EnrrollmentsComponent {
  public enrrollmentsColumns = ['id', 'course', 'user', 'actions'];
  public enrrollments$: Observable<Enrrollment[]>;

  constructor(private store: Store, private matDialog: MatDialog) {
    this.store.dispatch(EnrrollmentsActions.loadEnrrollmentss());
    this.enrrollments$ = this.store.select(selectEnrollments);
  }

  public openEnrrollmentDialog(): void {
    this.matDialog.open(EnrrollmentDialogComponent);
  }

  public onEditEnrrollmentClick(enrrollment: Enrrollment) {
    this.matDialog
    .open(EnrrollmentDialogComponent, {
      data: enrrollment,
    })
    .afterClosed()
    .subscribe(
    );
  }
  public onDeleteEnrrollmentClick(enrrollment: Enrrollment) {
    const message:string = `¿Esta seguro que quiere borrar la inscripción n° ${enrrollment.id}?`

    if (confirm(message)) {
          this.store.dispatch(
      EnrrollmentsActions.deleteEnrollment({
        payload: enrrollment
      })
    );
    }
  }
}
