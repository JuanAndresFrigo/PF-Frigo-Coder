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
    * EL usuario de rol "STUDENT" verá en el sidebar sólo la opción de -Inscrpciones
3. Usuarios
    * Esta página, permite a un usuario gestionar a los usuarios
        * El usuariode rol ADMIN, puede ver el listado, generar un nuevo usuario con cualquier rol, editar un usuario, borrarlo, ingresar a su detalle.
        * El usuariode rol USER, puede ver el listado, pero únicamente de quienes tengan el rol STUDENT; e ingresar a su detalle.
        * El usuariode rol STUDENT, no puede ver esta página

## TODOs

    [] alertas
    [] datos únicos
