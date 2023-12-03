import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  // Recibe un objeto usuario, y retorna un string con sus propiedades nombre y apellido unidas
  transform(user: User | null): string {
    return user ? `${user.name} ${user.surname}`.toLowerCase() : '';
  }
}
