export interface User {
  id: number;
  name: string;
  surname: string;
  docNumber: string;
  email: string;
  rol: UserRole;
}

export interface UserRole {
  id: number;
  rolDescription: string;
}

export type UserColumns = Omit<User, 'rol'>;
