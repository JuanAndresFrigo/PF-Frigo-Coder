import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user.interface';
import { onlyNumbersValidator } from 'src/app/utils/only-number-validator';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent {
  public userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user?: User
  ) {
    this.userForm = this.fb.group(
      {
        name: ['', Validators.required],
        surname: ['', Validators.required],
        docNumber: [
          '',
          [
            Validators.required,
            Validators.maxLength(8),
            onlyNumbersValidator(),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        repeatPassword: ['', [Validators.required]],
      },
      {
        validators: (control) => {
          if (control.value.password !== control.value.repeatPassword) {
            control.get('repeatPassword')?.setErrors({ notSame: true });
          }
          return null;
        },
      }
    );

    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  public onCancelClick() {}

  public onSaveClick(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userForm.value);
    }
  }
}
