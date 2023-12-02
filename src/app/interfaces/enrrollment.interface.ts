import { Course } from './course.interface';
import { User } from './user.interface';

export interface Enrrollment {
  id: number;
  courseId: number;
  userId: number;
  user?: User;
  course?: Course;
}

export interface CreateEnrollmentPayload {
  courseId: number | null;
  userId: number | null;
}
