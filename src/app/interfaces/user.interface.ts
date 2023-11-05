export interface User {
  id: number;
  name: string;
  surname: string;
  docNumber: string;
  email: string;
  token: string;
  rol: UserRole;
}

export interface UserRole {
  id: number;
  rolDescription: UserRoleDescription;
}

export type UserColumns = Omit<User, 'rol'>;

export enum UserRoleDescription {
  Admin = "ADMIN",
  User = "USER",
}
