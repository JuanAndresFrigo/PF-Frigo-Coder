import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Enrrollment } from 'src/app/interfaces/enrrollment.interface';

@Component({
  selector: 'app-table-enrrollments',
  templateUrl: './table-enrrollments.component.html',
  styleUrls: ['./table-enrrollments.component.scss']
})
export class TableEnrrollmentsComponent {
  // REMOVER COMPONENTE Y UTILIZAR UNA UNICA TABLA

  public _dataSourceTable: Enrrollment[] = [];
  public _displayedColumnsTable: string[] = [];

  @Input() public set dataSourceTable(listEnrrollments: Enrrollment[]) {
    listEnrrollments ? this._dataSourceTable = listEnrrollments: this._dataSourceTable = []
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

  @Output() public onEditClick = new EventEmitter<Enrrollment>();
  @Output() public onDeleteClick = new EventEmitter<Enrrollment>();
}
