import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors',
})
export class FormErrorsPipe implements PipeTransform {
  transform(value: ValidationErrors | null | undefined): unknown {
    if (!value) return '';

    const errorMessages: string[] = [];

    if ('required' in value) {
      errorMessages.push('Este campo es requerido');
    }

    if ('email' in value) {
      errorMessages.push('Ingresa un correo válido');
    }

    if ('lettersOnly' in value) {
      errorMessages.push('Ingresa solo letras');
    }

    if ('maxlength' in value) {
      errorMessages.push(`El largo máximo es ${value['maxlength'].requiredLength} caracteres`);
    }

    if ('onlyNumbersAllowed' in value) {
      errorMessages.push('Sólo se permiten números');
    }

    if ('notSame' in value) {
      errorMessages.push('Las contraseñas deben ser iguales');
    }

    return errorMessages.join('. ');
  }
}
