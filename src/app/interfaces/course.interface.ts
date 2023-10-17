import { User } from './user.interface';

export interface Course {
  id: number;
  name: string;
  classes: CourseClas[];
  users: User[];
}

export interface CourseClas {
  id: number;
  name: string;
}
