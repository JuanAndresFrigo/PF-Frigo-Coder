import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from 'src/app/interfaces/user.interface';
import { map, mergeMap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnrrollmentsService } from '../../../services/enrrollments.service';
import { Course } from 'src/app/interfaces/course.interface';
import { Enrrollment } from 'src/app/interfaces/enrrollment.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserService, EnrrollmentsService],
})
export class UserDetailComponent {
  public user?: User;
  public userForm!: FormGroup;
  public courses?: Course[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private enrrollmentService: EnrrollmentsService,
    private roputer: Router
  ) {
    this.buildForm();
    this.getUserAndCourses();
  }

  private buildForm() {
    this.userForm = this.fb.group({
      name: [''],
      surname: [''],
      docNumber: [''],
      email: [''],
      rol: [''],
    });
  }

  private getUserAndCourses() {
    this.userService
      .getUsersById(+this.activatedRoute.snapshot.paramMap.get('id')!)
      .pipe(
        mergeMap((user) =>
          this.enrrollmentService.getEnrrollmentsByUserId(user.id!).pipe(
            map((enrrollments) => {
              return { user, enrrollments };
            })
          )
        )
      )
      .subscribe((result) => {
        // El resultado contiene al usuario y los cursos en los que esta inscripto
        this.user = result.user;
        this.fillForm();
        this.fillCourses(result.enrrollments);
      });
  }

  private fillForm() {
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  private fillCourses(enrrollments: Enrrollment[]) {
    this.courses = enrrollments.map((elem) => elem.course!);
  }

  public onGoBack() {
    this.roputer.navigate(['safe/users'])
  }
}
