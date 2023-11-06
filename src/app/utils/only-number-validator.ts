import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function onlyNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const onlyNumber = /[0-9]+/.test(value);

    return !onlyNumber ? { onlyNumbersAllowed: true } : null;
  };
}
