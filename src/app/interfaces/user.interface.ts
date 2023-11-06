export interface User {
  id?: number;
  name: string;
  surname: string;
  docNumber: string;
  email: string;
  password: string;
  token: string;
  rol: UserRole;
}

export type UserColumns = Omit<User, 'rol'>;

export enum UserRole {
  Admin = "ADMIN",
  User = "USER",
}
