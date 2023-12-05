import { Component } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { map, take, tap } from 'rxjs';
import { Course } from 'src/app/interfaces/course.interface';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EnrrollmentsService } from '../../../services/enrrollments.service';
import { User } from 'src/app/interfaces/user.interface';
import { Enrrollment } from 'src/app/interfaces/enrrollment.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-main',
  templateUrl: './course-main.component.html',
  styleUrls: ['./course-main.component.scss'],
  providers: [CourseService, AuthService, EnrrollmentsService],
})
export class CourseMainComponent {
  public courseList: Course[] = [];
  public courseColumns: string[] = ['id', 'name', 'actions'];
  public loggedUser?: User;

  constructor(
    private courseService: CourseService,
    private matDialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private enrrollmentService: EnrrollmentsService
  ) {
    authService.authUser$.pipe(take(1)).subscribe((res: any) => {
      this.loggedUser = res;
    });
    this.getCourses();
  }

  private getCourses(): void {
    this.loggedUser?.rol === 'STUDENT'
      ? this.enrrollmentService
          .getEnrrollmentsByUserId(this.loggedUser.id!)
          .pipe(
            take(1),
            map((enrrollment: Enrrollment[]) =>
              enrrollment.map((enrrollment: Enrrollment) => enrrollment.course)
            )
          )
          .subscribe((enrrollments: any) => {
            this.courseList = enrrollments;
          })
      : this.courseService
          .getCourses()
          .pipe(take(1))
          .subscribe((courses: Course[]) => (this.courseList = courses));
  }

  public get getCourseList(): Course[] {
    return this.courseList;
  }

  public openCoursesDialog() {
    this.matDialog
      .open(CourseDialogComponent)
      .afterClosed()
      .subscribe({
        next: (newCourse: Course) => {
          if (!newCourse) return;
          const { name, classes } = newCourse;

          const courseToCreate: Course = {
            name,
            classes,
          };

          this.courseService
            .createCourse(courseToCreate)
            .pipe(
              take(1),
              tap(() => this.getCourses())
            )
            .subscribe(() => {
              Swal.fire({
                title: 'Éxito!',
                text: 'Curso creado correctamente',
                icon: 'success',
              });
            });
        },
      });
  }

  public onInfoCourseClick(courseToInfo: Course) {
    // Se navega al detalle
    this.router.navigate(['safe/courses/detail', courseToInfo.id]);
  }

  public onEditCourseClick(courseToEdit: Course) {
    this.matDialog
      .open(CourseDialogComponent, {
        data: courseToEdit,
      })
      .afterClosed()
      .subscribe({
        next: (editedCourse: Course) => {
          if (!editedCourse) return;
          const { name } = editedCourse;

          const courseEdited: Course = {
            id: courseToEdit.id,
            name,
            classes: editedCourse.classes,
          };

          this.courseService
            .editCourse(courseEdited)
            .pipe(
              take(1),
              tap(() => this.getCourses())
            )
            .subscribe(() => {
              Swal.fire({
                title: 'Éxito!',
                text: 'El curso se editó correctamente',
                icon: 'success',
              });
            });
        },
      });
  }

  public onDeleteCourseClick(courseToDelete: Course) {
    const message: string = `Vas a eliminar el curso: ${courseToDelete.name}?`;

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
          text: 'El curso se removió con éxito',
          icon: 'success',
        });
        this.courseList = this.courseList.filter(
          (c) => c.id !== courseToDelete.id
        );
        // acción
        this.courseService
          .deleteCourse(courseToDelete)
          .pipe(
            take(1),
            tap(() => this.getCourses())
          )
          .subscribe();
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
