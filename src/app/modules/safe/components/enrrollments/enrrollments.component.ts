import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrrollmentsActions } from './store/enrrollments.actions';
import { Observable } from 'rxjs';
import { Enrrollment } from 'src/app/interfaces/enrrollment.interface';
import { MatDialog } from '@angular/material/dialog';
import { EnrrollmentDialogComponent } from './enrrollment-dialog/enrrollment-dialog.component';
import { selectEnrollments } from './store/enrrollments.selectors';
import Swal from 'sweetalert2';

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
      .subscribe();
  }
  public onDeleteEnrrollmentClick(enrrollment: Enrrollment) {
    const message: string = `Vas a eliminar la inscripción n° ${enrrollment.id}?`;

    Swal.fire({
      title: 'Estas seguro?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: '#673ab7',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // alerta
        Swal.fire({
          title: 'Eliminado!',
          text: 'La inscripción se removió con éxito',
          icon: 'success',
        });
        //accion
        this.store.dispatch(
          EnrrollmentsActions.deleteEnrollment({
            payload: enrrollment,
          })
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelado',
          text: 'No se realizó ningún cambio',
          icon: 'error',
        });
      }
    });
  }
}
