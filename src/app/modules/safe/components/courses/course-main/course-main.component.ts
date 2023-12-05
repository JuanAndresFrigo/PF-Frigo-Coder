import { Component } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { take, tap } from 'rxjs';
import { Course } from 'src/app/interfaces/course.interface';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-main',
  templateUrl: './course-main.component.html',
  styleUrls: ['./course-main.component.scss'],
  providers: [CourseService],
})
export class CourseMainComponent {
  public courseList: Course[] = [];
  public courseColumns: string[] = ['id', 'name', 'actions'];

  constructor(
    private courseService: CourseService,
    private matDialog: MatDialog,
    private router: Router
  ) {
    this.getCourses();
  }

  private getCourses(): void {
    this.courseService
      .getCourses()
      .pipe(take(1))
      .subscribe((courses: Course[]) => (this.courseList = courses));
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
            .subscribe();
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
            .subscribe();
        },
      });
  }

  public onDeleteCourseClick(courseToDelete: Course) {
    const message: string = `¿Esta seguro que quiere borrar el curso: ${courseToDelete.name}?`;

    if (confirm(message)) {
      this.courseList = this.courseList.filter(
        (c) => c.id !== courseToDelete.id
      );

      this.courseService
        .deleteCourse(courseToDelete)
        .pipe(
          take(1),
          tap(() => this.getCourses())
        )
        .subscribe();
    }
  }
}
