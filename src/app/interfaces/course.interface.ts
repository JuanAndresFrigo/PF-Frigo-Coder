export interface Course {
  id: number;
  name: string;
  classes: CourseClas[];
}

export interface CourseClas {
  id: number;
  name: string;
}
