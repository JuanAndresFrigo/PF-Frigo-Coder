import { Component, EventEmitter, Input, Output } from '@angular/core';
import { take } from 'rxjs';
import { Course } from 'src/app/interfaces/course.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.scss'],
  providers: [AuthService],
})
export class TableCourseComponent {
  // REMOVER COMPONENTE Y UTILIZAR UNA UNICA TABLA

  public _dataSourceTable: Course[] = [];
  public _displayedColumnsTable: string[] = [];
  public loggedUserRol: string = '';

  @Input() public set dataSourceTable(listCourse: Course[]) {
    this._dataSourceTable = listCourse;
  }
  public get dataSourceTable() {
    return this._dataSourceTable;
  }

  @Input() public set displayedColumnsTable(columnList: string[]) {
    this._displayedColumnsTable = columnList;
  }
  public get displayedColumnsTable() {
    return this._displayedColumnsTable;
  }

  @Output() public onInfoClick = new EventEmitter<Course>();
  @Output() public onEditClick = new EventEmitter<Course>();
  @Output() public onDeleteClick = new EventEmitter<Course>();

  constructor(private authService: AuthService) {
    authService.authUser$
      .pipe(take(1))
      .subscribe((res: any) => (this.loggedUserRol = res.rol));
  }
}
