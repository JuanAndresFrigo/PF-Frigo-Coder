import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  public selectedValue?: any;

  @Input() public dropdownLabel: string = '';
  @Input() public dropdownOptions: any; //recibe Curso o User

  @Input() public set dropdownValue(value: any){
    if (value) this.selectedValue = value
  }

  @Output() public onSelectItem = new EventEmitter<any>();
}
