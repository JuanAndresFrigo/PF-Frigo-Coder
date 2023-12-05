export interface Course {
  id?: number;
  name: string;
  classes?: CourseClass[];
}

export interface CourseClass {
  id: number;
  name: string;
}
