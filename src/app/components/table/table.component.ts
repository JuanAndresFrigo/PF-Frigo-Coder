import { Component, EventEmitter, Input, Output } from '@angular/core';
import { take } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [AuthService]
})
export class TableComponent {
  public _dataSourceTable: User[] = [];
  public _displayedColumnsTable: string[] = [];
  public loggedUserRol: string = '';

  @Input() public set dataSourceTable(listUser: User[] | null) {
    if (listUser) this._dataSourceTable = listUser;
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

  @Output() public onInfoClick = new EventEmitter<User>();
  @Output() public onEditClick = new EventEmitter<User>();
  @Output() public onDeleteClick = new EventEmitter<User>();

  constructor(private authService: AuthService) {
    authService.authUser$
      .pipe(take(1))
      .subscribe((res: any) => (this.loggedUserRol = res.rol));
  }
}
