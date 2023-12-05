# 1PFFrigo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `json-server --watch db.json` -> Para levantar el servidor del BE, en `http://localhost:3000`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Usuarios base

1. ADMIN
    * email: admin@mail.com
    * password: 1234
2. USER
    * email: user@mail.com
    * password: 1234
3. STUDENT
    * email: student@mail.com
    * password: 1234

## Features

1. Register
    * Este módulo, permite a un usuario registrarse en la aplicación.
        * Será generado un nuevo usuario con el rol: 'USER'.
        * Sólo un usuario con rol ADMIN, puede generar un nuevo usuario con rol ADMIN. (desde el alta de usuario)
2. Login
    * Este módulo, permite a un usuario ya registrado, ingresar a la aplicación.
        * En el header global de la aplicacion se setea el nombre del usuario logueado
    * EL usuario de rol "ADMIN" verá en el sidebar las opciones de -Usuarios, -Cursos, -Inscrpciones
    * EL usuario de rol "USER" verá en el sidebar las opciones de -Usuarios (sólo estudiantes), -Cursos, -Inscrpciones
    * EL usuario de rol "STUDENT" verá en el sidebar sólo la opción de -Cursos
3. Usuarios
    * Esta página, permite a un usuario de la app gestionar a los usuarios
        * El usuario de rol ADMIN, puede ver el listado completo, generar un nuevo usuario con cualquier rol, editar un usuario, borrarlo e ingresar a su detalle.
        * El usuario de rol USER, puede ver el listado, pero únicamente de quienes tengan el rol STUDENT; e ingresar a su detalle.
        * El usuario de rol STUDENT, no puede ver esta página
4. Cursos
    * Esta página, permite a un usuario de la app gestionar los cursos
        * El usuario de rol ADMIN, puede ver el listado completo, generar un nuevo curso con al menos una clase, editar un curso, borrarlo e ingresar a su detalle.
        * El usuario de rol USER, puede ver el listado completo e ingresar a su detalle.
        * El usuario de rol STUDENT, puede ver el listado s´lo de los cursos en los que está inscripto, e ingresar a su detalle.
5. Inscripciones
    * Esta página, permite a un usuario de la app gestionar las incripciones a los cursos
        * El usuario de rol ADMIN, puede ver el listado completo, generar una nueva inscripción, editarla o borrarla
        * El usuario de rol USER, puede ver el listado completo, generar una nueva inscripción, editarla o borrarla
        * El usuario de rol STUDENT, no puede ver esta página

## EXTRA

1. Se implementa rxjs store, para el manejo de estados en las inscripciones y en la autenticación.
    * Usuario logueado
    * Inscripciones: carga de inscripciones, ABM, opciones del dialog
2. Se utiliza una DB local para persistencia de datos, la cual es consumida mediante llamadas http.
3. Se implementa el uso de SweetAlert2, para mostrar alertas con una estética mas pulida a la default del navegador
