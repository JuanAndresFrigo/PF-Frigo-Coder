import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { Course } from 'src/app/interfaces/course.interface';
import { CourseService } from 'src/app/modules/safe/services/course.service';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers:[CourseService]
})
export class CoursesComponent {
  public courseList: Course[] = [];
  public courseColumns: string[] = [
    'id',
    'name',
    'actions',
  ];

  constructor(private courseService: CourseService, private matDialog: MatDialog) {
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
          if (newCourse) {
            this.courseList = [
              ...this.courseList,
              {
                ...newCourse,
                id: 5,
              },
            ];
          }
        },
      });
  }

  public onEditCourseClick(courseToEdit: Course) {
    this.matDialog
      .open(CourseDialogComponent, {
        data: courseToEdit,
      })
      .afterClosed()
      .subscribe({
        next: (editedCourse: Course) => {
          if (editedCourse) {
            this.courseList = this.courseList.map((user: Course) =>
              user.id === courseToEdit.id ? { ...user, ...editedCourse } : user
            );
          }
        },
      });
  }

  public onDeleteCourseClick(courseToDelete: Course) {
    const message:string = `¿Esta seguro que quiere borrar a ${courseToDelete.name}?`

    if (confirm(message)) {
      this.courseList = this.courseList.filter((c) => c.id !== courseToDelete.id);
    }
  }
}
