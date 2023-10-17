import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public _dataSourceTable: User[] = [];
  public _displayedColumnsTable: string[] = [];

  @Input() public set dataSourceTable(listUser: User[]) {
    this._dataSourceTable = listUser;
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

  @Output() public onEditClick = new EventEmitter<User>();

  @Output() public onDeleteClick = new EventEmitter<User>();

  constructor() {}
}
