import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/interfaces/course.interface';

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.scss'],
})
export class TableCourseComponent {
  // REMOVER COMPONENTE Y UTILIZAR UNA UNICA TABLA

  public _dataSourceTable: Course[] = [];
  public _displayedColumnsTable: string[] = [];

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

  @Output() public onEditClick = new EventEmitter<Course>();
  @Output() public onDeleteClick = new EventEmitter<Course>();
}
